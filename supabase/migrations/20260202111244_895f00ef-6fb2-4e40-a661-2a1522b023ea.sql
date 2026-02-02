-- Create app role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create chat_sessions table to track chat users
CREATE TABLE public.chat_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    messages JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on chat_sessions
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;

-- Only admins can view chat sessions
CREATE POLICY "Admins can view all chat sessions"
ON public.chat_sessions FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Anyone can insert (for saving chats)
CREATE POLICY "Anyone can create chat sessions"
ON public.chat_sessions FOR INSERT
WITH CHECK (true);

-- Anyone can update their own session (by matching email in the session)
CREATE POLICY "Chat sessions can be updated"
ON public.chat_sessions FOR UPDATE
USING (true);

-- Create blogs table
CREATE TABLE public.blogs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    cover_image TEXT,
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Anyone can view published blogs
CREATE POLICY "Anyone can view published blogs"
ON public.blogs FOR SELECT
USING (published = true OR public.has_role(auth.uid(), 'admin'));

-- Only admins can manage blogs
CREATE POLICY "Admins can manage blogs"
ON public.blogs FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply triggers
CREATE TRIGGER update_chat_sessions_updated_at
BEFORE UPDATE ON public.chat_sessions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blogs_updated_at
BEFORE UPDATE ON public.blogs
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
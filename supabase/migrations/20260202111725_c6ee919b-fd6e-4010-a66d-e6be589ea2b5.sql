-- Fix: Set search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Drop overly permissive policies
DROP POLICY IF EXISTS "Anyone can create chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Chat sessions can be updated" ON public.chat_sessions;

-- Create edge function service role policies for chat_sessions
-- These allow the edge function (using service role) to insert/update
CREATE POLICY "Service role can manage chat sessions"
ON public.chat_sessions FOR ALL
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Create insert policy for anon users (for edge function calls)
CREATE POLICY "Anon can insert chat sessions"
ON public.chat_sessions FOR INSERT
WITH CHECK (auth.role() = 'anon');
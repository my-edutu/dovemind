-- Create AI usage tracking table
CREATE TABLE public.ai_usage_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID REFERENCES public.chat_sessions(id) ON DELETE SET NULL,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  model TEXT NOT NULL DEFAULT 'gemini-3-flash-preview',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_usage_logs ENABLE ROW LEVEL SECURITY;

-- Admins can view all usage logs
CREATE POLICY "Admins can view AI usage logs"
  ON public.ai_usage_logs
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Service role can insert usage logs (from edge function)
CREATE POLICY "Service role can insert AI usage logs"
  ON public.ai_usage_logs
  FOR INSERT
  WITH CHECK (auth.role() = 'service_role');

-- Create index for date-based queries
CREATE INDEX idx_ai_usage_created_at ON public.ai_usage_logs(created_at DESC);
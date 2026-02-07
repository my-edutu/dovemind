-- Fix for "Authenticated users can update submissions" warning
-- Only admins should be able to update contact submissions (e.g. marking as read)

-- First, drop the permissive policy if it exists (using a DO block to avoid error if missing, or just CREATE OR REPLACE via separate statements)
-- We will just Drop and Recreate to be safe.

DROP POLICY IF EXISTS "Authenticated users can update submissions" ON public.contact_submissions;

CREATE POLICY "Admins can update submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Note on chat_sessions:
-- The 'chat_sessions' table relies on anonymous access for public chat functionality.
-- Restricting this strictly requires architectural changes (e.g. issuing session tokens).
-- For now, the 'Allow anonymous inserts' and 'Allow anonymous updates' policies are necessary for the feature to work as designed.

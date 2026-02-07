-- 1. First, find all users to confirm the email exists (Run this first)
SELECT id, email FROM auth.users;

-- 2. Once you have the UUID of the user you want to make admin (confirms they exist)
-- Replace 'USER_UUID_HERE' with the actual UUID from step 1.
-- INSERT INTO public.user_roles (user_id, role)
-- VALUES ('USER_UUID_HERE', 'admin');

-- AUTOMATED SCRIPT (Safe to run):
-- This will look up the user by email and make them an admin if they aren't already.
-- Replace 'new_admin@example.com' with the actual email address.

DO $$
DECLARE
  target_email TEXT := 'nwosupaul3@gmail.com'; -- CHANGE THIS to the new admin's email
  target_user_id UUID;
BEGIN
  -- Get the user ID from auth.users
  SELECT id INTO target_user_id FROM auth.users WHERE email = target_email;

  IF target_user_id IS NOT NULL THEN
    -- Check if they already have the role
    IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = target_user_id AND role = 'admin') THEN
      INSERT INTO public.user_roles (user_id, role) VALUES (target_user_id, 'admin');
      RAISE NOTICE 'User % has been made an admin.', target_email;
    ELSE
      RAISE NOTICE 'User % is already an admin.', target_email;
    END IF;
  ELSE
    RAISE NOTICE 'User % not found in auth.users. They must sign up first.', target_email;
  END IF;
END $$;

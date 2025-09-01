-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (you can view all submissions)
-- Note: You'll need authentication to access these later
CREATE POLICY "Admin can view all submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false); -- Disabled for now, enable when you add authentication
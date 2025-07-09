
-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  username TEXT UNIQUE,
  bio TEXT,
  location TEXT,
  avatar_url TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT,
  level TEXT,
  price DECIMAL(10,2),
  instructor_id UUID REFERENCES public.profiles(id),
  category TEXT,
  features TEXT[],
  thumbnail_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  course_id UUID REFERENCES public.courses(id) NOT NULL,
  enrollment_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'active',
  progress INTEGER DEFAULT 0,
  UNIQUE(user_id, course_id)
);

-- Create films table for showcase
CREATE TABLE public.films (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  genre TEXT,
  duration TEXT,
  rating DECIMAL(2,1),
  views INTEGER DEFAULT 0,
  release_date TEXT,
  cast TEXT[],
  thumbnail_url TEXT,
  video_url TEXT,
  created_by UUID REFERENCES public.profiles(id),
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create subscriptions table for pricing plans
CREATE TABLE public.subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  plan_type TEXT NOT NULL, -- 'viewer', 'creator', 'professional'
  status TEXT DEFAULT 'active',
  price DECIMAL(10,2),
  billing_cycle TEXT DEFAULT 'monthly',
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table for collaborative work
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'planning', -- 'planning', 'in_progress', 'completed'
  project_type TEXT, -- 'film', 'documentary', 'commercial'
  budget DECIMAL(12,2),
  deadline DATE,
  created_by UUID REFERENCES public.profiles(id) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create project members table for collaboration
CREATE TABLE public.project_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) NOT NULL,
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  role TEXT, -- 'director', 'actor', 'cinematographer', 'editor'
  joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(project_id, user_id)
);

-- Create portfolios table for member showcases
CREATE TABLE public.portfolios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  media_type TEXT, -- 'video', 'image', 'audio'
  media_url TEXT,
  thumbnail_url TEXT,
  tags TEXT[],
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, username)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name',
    NEW.raw_user_meta_data ->> 'username'
  );
  RETURN NEW;
END;
$$;

-- Trigger to automatically create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.films ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- RLS Policies for courses
CREATE POLICY "Anyone can view published courses" ON public.courses FOR SELECT USING (is_active = true);
CREATE POLICY "Instructors can manage their courses" ON public.courses FOR ALL USING (auth.uid() = instructor_id);

-- RLS Policies for enrollments
CREATE POLICY "Users can view their enrollments" ON public.enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can enroll in courses" ON public.enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for films
CREATE POLICY "Anyone can view published films" ON public.films FOR SELECT USING (is_published = true);
CREATE POLICY "Creators can manage their films" ON public.films FOR ALL USING (auth.uid() = created_by);

-- RLS Policies for subscriptions
CREATE POLICY "Users can view their subscriptions" ON public.subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their subscriptions" ON public.subscriptions FOR ALL USING (auth.uid() = user_id);

-- RLS Policies for projects
CREATE POLICY "Users can view projects they're part of" ON public.projects FOR SELECT USING (
  auth.uid() = created_by OR 
  EXISTS (SELECT 1 FROM public.project_members WHERE project_id = id AND user_id = auth.uid())
);
CREATE POLICY "Project creators can manage their projects" ON public.projects FOR ALL USING (auth.uid() = created_by);

-- RLS Policies for project members
CREATE POLICY "Project members can view team" ON public.project_members FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.projects WHERE id = project_id AND (created_by = auth.uid() OR 
  EXISTS (SELECT 1 FROM public.project_members pm WHERE pm.project_id = project_id AND pm.user_id = auth.uid())))
);
CREATE POLICY "Project creators can manage members" ON public.project_members FOR ALL USING (
  EXISTS (SELECT 1 FROM public.projects WHERE id = project_id AND created_by = auth.uid())
);

-- RLS Policies for portfolios
CREATE POLICY "Anyone can view portfolios" ON public.portfolios FOR SELECT USING (true);
CREATE POLICY "Users can manage their portfolio" ON public.portfolios FOR ALL USING (auth.uid() = user_id);

-- Insert sample data for courses
INSERT INTO public.courses (title, description, duration, level, price, category, features) VALUES
('Film Production Masterclass', 'Master the art of storytelling through comprehensive video production training.', '12 weeks', 'Beginner to Advanced', 299.00, 'Film Production', ARRAY['Script Writing', 'Cinematography', 'Editing', 'Post-Production']),
('Acting & Performance Workshop', 'Develop your acting skills with professional coaching and real-world practice.', '8 weeks', 'All Levels', 199.00, 'Acting', ARRAY['Method Acting', 'Voice Training', 'Movement', 'Character Development']),
('VFX & CGI Intensive', 'Create stunning visual effects and computer-generated imagery for film and media.', '16 weeks', 'Intermediate', 399.00, 'VFX', ARRAY['3D Modeling', 'Animation', 'Compositing', 'Motion Graphics']),
('Graphic Design Fundamentals', 'Design compelling visuals for film posters, marketing materials, and digital media.', '10 weeks', 'Beginner to Intermediate', 149.00, 'Design', ARRAY['Brand Design', 'Digital Art', 'Typography', 'Layout Design']),
('Animation Bootcamp', 'Bring stories to life through traditional and digital animation techniques.', '14 weeks', 'All Levels', 349.00, 'Animation', ARRAY['2D Animation', '3D Animation', 'Storyboarding', 'Character Design']);

-- Insert sample films
INSERT INTO public.films (title, description, genre, duration, rating, views, release_date, cast, is_published) VALUES
('Ubuntu: The Journey Home', 'A powerful story about identity and belonging in modern Africa.', 'Drama', '2h 15min', 4.8, 125000, '2024', ARRAY['Amara Johnson', 'Kofi Asante', 'Nala Okafor'], true),
('The Last Baobab', 'Exploring the environmental challenges facing Africa''s ancient trees.', 'Documentary', '1h 32min', 4.6, 89000, '2024', ARRAY['Production Team Alpha'], true),
('City of Dreams', 'Young entrepreneurs chasing their dreams in Lagos.', 'Short Film', '24min', 4.9, 203000, '2024', ARRAY['Chinwe Okoro', 'Abdul Rahman', 'Sara Mitchell'], true),
('Rhythms of the Sahel', 'The evolution of traditional music in West Africa.', 'Music Documentary', '58min', 4.7, 67000, '2023', ARRAY['Cultural Music Collective'], true);

-- Create storage bucket for media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media-files', 'media-files', true);

-- Storage policies for media files
CREATE POLICY "Anyone can view media files" ON storage.objects FOR SELECT USING (bucket_id = 'media-files');
CREATE POLICY "Authenticated users can upload media files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media-files' AND auth.role() = 'authenticated');
CREATE POLICY "Users can update their own media files" ON storage.objects FOR UPDATE USING (bucket_id = 'media-files' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Users can delete their own media files" ON storage.objects FOR DELETE USING (bucket_id = 'media-files' AND auth.uid()::text = (storage.foldername(name))[1]);

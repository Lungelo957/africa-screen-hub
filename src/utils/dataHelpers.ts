
import { supabase } from '@/integrations/supabase/client';

// Helper function to add a new course
export const addCourse = async (courseData: {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  category: string;
  features: string[];
  instructor_id?: string;
  thumbnail_url?: string;
}) => {
  const { data, error } = await supabase
    .from('courses')
    .insert([courseData])
    .select();
  
  if (error) throw error;
  return data;
};

// Helper function to add a new film
export const addFilm = async (filmData: {
  title: string;
  description: string;
  genre: string;
  duration: string;
  rating: number;
  release_date: string;
  cast: string[];
  thumbnail_url?: string;
  video_url?: string;
  created_by?: string;
}) => {
  const { data, error } = await supabase
    .from('films')
    .insert([{ ...filmData, is_published: true }])
    .select();
  
  if (error) throw error;
  return data;
};

// Helper function to update course
export const updateCourse = async (courseId: string, updates: any) => {
  const { data, error } = await supabase
    .from('courses')
    .update(updates)
    .eq('id', courseId)
    .select();
  
  if (error) throw error;
  return data;
};

// Helper function to update film
export const updateFilm = async (filmId: string, updates: any) => {
  const { data, error } = await supabase
    .from('films')
    .update(updates)
    .eq('id', filmId)
    .select();
  
  if (error) throw error;
  return data;
};

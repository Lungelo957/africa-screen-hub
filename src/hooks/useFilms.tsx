
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Film {
  id: string;
  title: string;
  description: string;
  genre: string;
  duration: string;
  rating: number;
  views: number;
  release_date: string;
  cast: string[];
  thumbnail_url?: string;
  video_url?: string;
  is_published: boolean;
}

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('films')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFilms(data || []);
    } catch (err) {
      console.error('Error fetching films:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch films');
    } finally {
      setLoading(false);
    }
  };

  const incrementViews = async (filmId: string) => {
    try {
      const { error } = await supabase.rpc('increment_film_views', {
        film_id: filmId
      });
      
      if (error) throw error;
      
      // Update local state
      setFilms(films.map(film => 
        film.id === filmId 
          ? { ...film, views: film.views + 1 }
          : film
      ));
    } catch (err) {
      console.error('Error incrementing views:', err);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return { films, loading, error, refetch: fetchFilms, incrementViews };
};

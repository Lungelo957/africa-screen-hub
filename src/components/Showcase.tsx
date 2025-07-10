
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useFilms } from '@/hooks/useFilms';

const Showcase = () => {
  const { films, loading, error, incrementViews } = useFilms();

  const handleWatch = async (filmId: string) => {
    try {
      await incrementViews(filmId);
      toast.success('Enjoy watching!');
    } catch (err) {
      console.error('Error updating views:', err);
      toast.error('Failed to load video');
    }
  };

  if (loading) {
    return (
      <section id="showcase" className="py-20">
        <div className="container mx-auto section-padding">
          <div className="text-center">
            <p className="text-muted-foreground">Loading films...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="showcase" className="py-20">
        <div className="container mx-auto section-padding">
          <div className="text-center">
            <p className="text-red-500">Error loading films: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="showcase" className="py-20">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Featured Films</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover incredible stories created by our talented community members. 
            From powerful dramas to innovative documentaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {films.map((film) => (
            <Card key={film.id} className="group card-hover bg-card/50 backdrop-blur border-african-gold/20 overflow-hidden">
              <div className="relative">
                {film.thumbnail_url ? (
                  <img 
                    src={film.thumbnail_url} 
                    alt={film.title}
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-african-gold/20 to-african-sunset/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-african-gold opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    {film.genre}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-1">{film.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {film.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{film.duration}</span>
                    <span>{film.release_date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-african-gold fill-current" />
                      <span className="font-medium">{film.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span>{film.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Cast:</p>
                    <div className="flex flex-wrap gap-1">
                      {film.cast?.slice(0, 2).map((actor, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {actor}
                        </Badge>
                      )) || <Badge variant="outline" className="text-xs">TBA</Badge>}
                      {film.cast && film.cast.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{film.cast.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleWatch(film.id)}
                    className="w-full mt-4 bg-african-gradient text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-african-gold/25"
                  >
                    Watch Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {films.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">No films available at the moment. Check back soon!</p>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Films
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

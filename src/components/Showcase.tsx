
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, Calendar, Star } from 'lucide-react';

const Showcase = () => {
  const films = [
    {
      title: "Ubuntu: The Journey Home",
      genre: "Drama",
      duration: "2h 15min",
      rating: 4.8,
      views: "125K",
      releaseDate: "2024",
      description: "A powerful story about identity and belonging in modern Africa.",
      cast: ["Amara Johnson", "Kofi Asante", "Nala Okafor"],
      thumbnail: "bg-gradient-to-br from-african-gold/60 to-african-sunset/40"
    },
    {
      title: "The Last Baobab",
      genre: "Documentary",
      duration: "1h 32min",
      rating: 4.6,
      views: "89K",
      releaseDate: "2024",
      description: "Exploring the environmental challenges facing Africa's ancient trees.",
      cast: ["Production Team Alpha"],
      thumbnail: "bg-gradient-to-br from-african-earth/60 to-african-gold/40"
    },
    {
      title: "City of Dreams",
      genre: "Short Film",
      duration: "24min",
      rating: 4.9,
      views: "203K",
      releaseDate: "2024",
      description: "Young entrepreneurs chasing their dreams in Lagos.",
      cast: ["Chinwe Okoro", "Abdul Rahman", "Sara Mitchell"],
      thumbnail: "bg-gradient-to-br from-african-sky/60 to-african-sunset/40"
    },
    {
      title: "Rhythms of the Sahel",
      genre: "Music Documentary",
      duration: "58min",
      rating: 4.7,
      views: "67K",
      releaseDate: "2023",
      description: "The evolution of traditional music in West Africa.",
      cast: ["Cultural Music Collective"],
      thumbnail: "bg-gradient-to-br from-african-sunset/60 to-african-gold/40"
    }
  ];

  return (
    <section id="showcase" className="py-20">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Film Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover incredible stories created by our talented community. From feature films to documentaries, 
            experience the authentic voice of African cinema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {films.map((film, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur border-african-gold/20 overflow-hidden">
              <div className={`aspect-video ${film.thumbnail} relative group cursor-pointer`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-12 w-12 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-african-gold text-african-earth">
                    {film.genre}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{film.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{film.title}</h3>
                    <p className="text-muted-foreground">{film.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{film.releaseDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{film.views} views</span>
                    </div>
                    <span>{film.duration}</span>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-african-gold">Cast:</h4>
                    <div className="flex flex-wrap gap-2">
                      {film.cast.map((actor, castIndex) => (
                        <Badge key={castIndex} variant="outline" className="border-african-sunset/50 text-african-sunset">
                          {actor}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-primary">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="text-lg px-8 py-4 border-african-gold text-african-gold hover:bg-african-gold hover:text-african-earth">
            View All Films
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

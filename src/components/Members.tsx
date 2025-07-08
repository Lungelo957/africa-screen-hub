
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Award, ExternalLink } from 'lucide-react';

const Members = () => {
  const members = [
    {
      name: "Amara Johnson",
      role: "Director & Producer",
      location: "Lagos, Nigeria",
      specialties: ["Film Direction", "Screenplay Writing", "Production Management"],
      experience: "5+ years",
      projects: 12,
      rating: 4.9,
      bio: "Award-winning filmmaker passionate about telling authentic African stories that resonate globally.",
      avatar: "bg-gradient-to-br from-african-gold to-african-sunset"
    },
    {
      name: "Kofi Asante",
      role: "Cinematographer",
      location: "Accra, Ghana",
      specialties: ["Camera Operation", "Lighting Design", "Visual Storytelling"],
      experience: "7+ years",
      projects: 18,
      rating: 4.8,
      bio: "Master of visual storytelling with expertise in both traditional and modern cinematographic techniques.",
      avatar: "bg-gradient-to-br from-african-sky to-african-gold"
    },
    {
      name: "Nala Okafor",
      role: "Actress & Voice Coach",
      location: "Cape Town, South Africa",
      specialties: ["Method Acting", "Voice Training", "Character Development"],
      experience: "4+ years",
      projects: 15,
      rating: 4.7,
      bio: "Versatile performer dedicated to bringing depth and authenticity to every character.",
      avatar: "bg-gradient-to-br from-african-sunset to-african-earth"
    },
    {
      name: "Omar Hassan",
      role: "VFX Artist",
      location: "Cairo, Egypt",
      specialties: ["3D Animation", "Visual Effects", "Motion Graphics"],
      experience: "6+ years",
      projects: 22,
      rating: 4.9,
      bio: "Creating stunning visual effects that bring imagination to life in African cinema.",
      avatar: "bg-gradient-to-br from-african-earth to-african-sky"
    },
    {
      name: "Zara Mwangi",
      role: "Graphic Designer",
      location: "Nairobi, Kenya",
      specialties: ["Brand Design", "Film Posters", "Digital Marketing"],
      experience: "3+ years",
      projects: 8,
      rating: 4.6,
      bio: "Creative designer specializing in visual branding for film and entertainment industry.",
      avatar: "bg-gradient-to-br from-african-gold to-african-sky"
    },
    {
      name: "Abdul Rahman",
      role: "Sound Engineer",
      location: "Khartoum, Sudan",
      specialties: ["Audio Production", "Sound Design", "Music Composition"],
      experience: "8+ years",
      projects: 25,
      rating: 4.8,
      bio: "Audio specialist crafting immersive soundscapes that enhance storytelling.",
      avatar: "bg-gradient-to-br from-african-sunset to-african-gold"
    }
  ];

  return (
    <section id="members" className="py-20 bg-muted/30">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Our Creative Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the talented professionals who make up our vibrant community. 
            Each member brings unique skills and perspectives to collaborative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur border-african-gold/20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Profile Header */}
                  <div className="text-center">
                    <div className={`w-24 h-24 ${member.avatar} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <div className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-african-gold font-semibold">{member.role}</p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mt-2">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-african-gold">{member.projects}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-african-sunset">{member.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-african-sky">{member.experience.split('+')[0]}</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground text-center">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold mb-2 text-african-gold text-center">Specialties:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="outline" className="border-african-sunset/50 text-african-sunset text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="border-african-gold text-african-gold hover:bg-african-gold hover:text-african-earth">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" className="btn-secondary">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Portfolio
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary text-lg px-8 py-4">
            <Award className="h-5 w-5 mr-2" />
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Members;

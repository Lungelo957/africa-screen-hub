
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Theater, Palette, Camera, Zap, Users } from 'lucide-react';

const Training = () => {
  const courses = [
    {
      icon: Video,
      title: "Film Production",
      description: "Master the art of storytelling through comprehensive video production training.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      features: ["Script Writing", "Cinematography", "Editing", "Post-Production"]
    },
    {
      icon: Theater,
      title: "Acting & Performance",
      description: "Develop your acting skills with professional coaching and real-world practice.",
      duration: "8 weeks",
      level: "All Levels",
      features: ["Method Acting", "Voice Training", "Movement", "Character Development"]
    },
    {
      icon: Zap,
      title: "VFX & CGI",
      description: "Create stunning visual effects and computer-generated imagery for film and media.",
      duration: "16 weeks",
      level: "Intermediate",
      features: ["3D Modeling", "Animation", "Compositing", "Motion Graphics"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Design compelling visuals for film posters, marketing materials, and digital media.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      features: ["Brand Design", "Digital Art", "Typography", "Layout Design"]
    },
    {
      icon: Camera,
      title: "Animation",
      description: "Bring stories to life through traditional and digital animation techniques.",
      duration: "14 weeks",
      level: "All Levels",
      features: ["2D Animation", "3D Animation", "Storyboarding", "Character Design"]
    },
    {
      icon: Users,
      title: "Collaborative Projects",
      description: "Work on real film projects with other creatives to build your portfolio.",
      duration: "Ongoing",
      level: "All Levels",
      features: ["Team Building", "Project Management", "Networking", "Portfolio Development"]
    }
  ];

  return (
    <section id="training" className="py-20 bg-muted/30">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Training Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive courses designed to transform passionate creatives into industry professionals. 
            Learn from experienced mentors and work on real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="card-hover bg-card/50 backdrop-blur border-african-gold/20">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-african-gradient p-3 rounded-lg">
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-african-gold">What You'll Learn:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-african-sunset rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full btn-secondary">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary text-lg px-8 py-4">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Training;


import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Theater, Palette, Camera, Zap, Users } from 'lucide-react';
import { toast } from 'sonner';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: number;
  category: string;
  features: string[];
}

const Training = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'film production': return Video;
      case 'acting': return Theater;
      case 'vfx': return Zap;
      case 'design': return Palette;
      case 'animation': return Camera;
      default: return Users;
    }
  };

  useEffect(() => {
    const loadCourses = () => {
      // Using static data for now
      setCourses([
        {
          id: '1',
          title: 'Film Production Masterclass',
          description: 'Master the art of storytelling through comprehensive video production training.',
          duration: '12 weeks',
          level: 'Beginner to Advanced',
          price: 299,
          category: 'Film Production',
          features: ['Script Writing', 'Cinematography', 'Editing', 'Post-Production']
        },
        {
          id: '2',
          title: 'Acting & Performance Workshop',
          description: 'Develop your acting skills with professional coaching and real-world practice.',
          duration: '8 weeks',
          level: 'All Levels',
          price: 199,
          category: 'Acting',
          features: ['Method Acting', 'Voice Training', 'Movement', 'Character Development']
        },
        {
          id: '3',
          title: 'VFX & CGI Intensive',
          description: 'Create stunning visual effects and computer-generated imagery for film and media.',
          duration: '16 weeks',
          level: 'Intermediate',
          price: 399,
          category: 'VFX',
          features: ['3D Modeling', 'Animation', 'Compositing', 'Motion Graphics']
        }
      ]);
      setLoading(false);
    };

    loadCourses();
  }, []);

  const handleEnroll = (courseId: string) => {
    console.log('Enrolling in course:', courseId);
    toast.success('Successfully enrolled in course!');
  };

  if (loading) {
    return (
      <section id="training" className="py-20 bg-muted/30">
        <div className="container mx-auto section-padding">
          <div className="text-center">
            <p className="text-muted-foreground">Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

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
          {courses.map((course) => {
            const IconComponent = getCategoryIcon(course.category);
            return (
              <Card key={course.id} className="card-hover bg-card/50 backdrop-blur border-african-gold/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-african-gradient p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
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
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-african-gold">
                        R{course.price}
                      </span>
                      <Button 
                        className="btn-secondary"
                        onClick={() => handleEnroll(course.id)}
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
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

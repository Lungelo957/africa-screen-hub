
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {
  Camera,
  Users,
  BookOpen,
  Award,
  Play,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Zap
} from 'lucide-react';

const GetStarted = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const learningPaths = [
    {
      id: 'filmmaker',
      title: 'Filmmaker Track',
      description: 'Learn the complete filmmaking process from script to screen',
      icon: Camera,
      duration: '12 weeks',
      level: 'Beginner',
      courses: ['Film Production Basics', 'Cinematography', 'Post-Production', 'Storytelling'],
      color: 'african-gold',
      features: ['Hands-on projects', 'Industry mentorship', 'Professional equipment access']
    },
    {
      id: 'actor',
      title: 'Actor Track',
      description: 'Develop your acting skills and screen presence',
      icon: Users,
      duration: '8 weeks',
      level: 'Beginner',
      courses: ['Acting Fundamentals', 'Voice & Movement', 'Scene Study', 'On-Camera Acting'],
      color: 'african-sunset',
      features: ['Live workshops', 'Scene practice', 'Demo reel creation']
    },
    {
      id: 'vfx',
      title: 'VFX & Animation Track',
      description: 'Master visual effects and animation techniques',
      icon: Zap,
      duration: '16 weeks',
      level: 'Intermediate',
      courses: ['VFX Basics', '3D Animation', 'Compositing', 'Motion Graphics'],
      color: 'african-sky',
      features: ['Industry software training', 'Portfolio projects', 'Render farm access']
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with fellow creatives and build lasting relationships'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn recognized certificates to advance your career'
    },
    {
      icon: Camera,
      title: 'Hands-On Projects',
      description: 'Build a portfolio with real-world projects and assignments'
    }
  ];

  const handleGetStarted = () => {
    if (!user) {
      navigate('/auth');
    } else if (selectedPath) {
      navigate('/dashboard');
    } else {
      // If user is logged in but hasn't selected a path, encourage selection
      setSelectedPath('filmmaker'); // Default selection
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-african-gradient text-white py-20">
        <div className="container mx-auto section-padding text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Creative Journey
          </h1>
          <p className="text-xl md:text-2xl text-african-gold/80 mb-8 max-w-3xl mx-auto">
            Choose your path and begin creating amazing content with Africa's premier media training platform
          </p>
          {user && (
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-5 w-5 text-african-gold" />
              <span>Welcome back, {user.user_metadata?.first_name || 'Creative'}!</span>
            </div>
          )}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20">
        <div className="container mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the track that aligns with your creative goals and start your journey today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {learningPaths.map((path) => {
              const Icon = path.icon;
              const isSelected = selectedPath === path.id;
              
              return (
                <Card 
                  key={path.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected ? `ring-2 ring-${path.color} bg-${path.color}/5` : ''
                  }`}
                  onClick={() => setSelectedPath(path.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`h-8 w-8 text-${path.color}`} />
                      {isSelected && <CheckCircle className={`h-6 w-6 text-${path.color}`} />}
                    </div>
                    <CardTitle className="text-xl mb-2">{path.title}</CardTitle>
                    <CardDescription className="text-base">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {path.duration}
                      </Badge>
                      <Badge variant="outline">
                        <Star className="h-3 w-3 mr-1" />
                        {path.level}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Core Courses:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {path.courses.map((course, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className={`w-1 h-1 rounded-full bg-${path.color}`}></div>
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {path.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className={`h-3 w-3 text-${path.color}`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={handleGetStarted}
            >
              {!user ? 'Sign Up to Get Started' : selectedPath ? 'Start Learning' : 'Choose a Path Above'}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            {selectedPath && (
              <p className="text-sm text-muted-foreground mt-2">
                Selected: {learningPaths.find(p => p.id === selectedPath)?.title}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Screen of Africa?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in the African media industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-african-gold mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto section-padding text-center">
          <Card className="max-w-4xl mx-auto bg-african-gradient text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Creative Vision?
              </h2>
              <p className="text-xl text-african-gold/80 mb-8">
                Join thousands of African creatives who are already building their careers with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-african-earth hover:bg-white/90 text-lg px-8 py-4"
                  onClick={handleGetStarted}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Start Your Journey Now
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                  onClick={() => navigate('/#showcase')}
                >
                  View Student Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;

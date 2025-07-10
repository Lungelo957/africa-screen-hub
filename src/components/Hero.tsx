
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Camera, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/get-started');
    }
  };

  const handleViewShowcase = () => {
    const showcaseElement = document.getElementById('showcase');
    if (showcaseElement) {
      showcaseElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0 bg-african-gradient opacity-10"></div>
      <div className="container mx-auto section-padding py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Empowering
                <span className="text-gradient block">African Creatives</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join Africa's premier media training platform. Learn film production, acting, VFX, and animation 
                while collaborating on real projects that showcase your talent to the world.
              </p>
              {user && (
                <div className="flex items-center gap-2 text-african-gold">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Welcome back, {user.user_metadata?.first_name || 'Creative'}!</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg px-8 py-4" onClick={handleGetStarted}>
                <Play className="h-5 w-5 mr-2" />
                {user ? 'Go to Dashboard' : 'Start Your Journey'}
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-african-gold text-african-gold hover:bg-african-gold hover:text-african-earth"
                onClick={handleViewShowcase}
              >
                <Camera className="h-5 w-5 mr-2" />
                View Showcase
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-african-gold">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-african-sunset">50+</div>
                <div className="text-sm text-muted-foreground">Films Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-african-sky">20+</div>
                <div className="text-sm text-muted-foreground">Training Courses</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image Placeholder */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-african-gold/20 to-african-sunset/20 rounded-2xl border border-african-gold/30 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-african-gold rounded-full flex items-center justify-center mx-auto">
                    <Play className="h-10 w-10 text-african-earth ml-1" />
                  </div>
                  <p className="text-african-gold font-semibold">Watch Our Story</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-african-gold" />
                  <span className="text-sm font-semibold">Live Community</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-african-sunset" />
                  <span className="text-sm font-semibold">Certified Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Film, User, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-african-gradient p-2 rounded-lg">
              <Film className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">The Screen of Africa</h1>
              <p className="text-xs text-muted-foreground">Media & Training Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-african-gold transition-colors">Home</a>
            <a href="#training" className="text-foreground hover:text-african-gold transition-colors">Training</a>
            <a href="#showcase" className="text-foreground hover:text-african-gold transition-colors">Showcase</a>
            <a href="#members" className="text-foreground hover:text-african-gold transition-colors">Members</a>
            <a href="#pricing" className="text-foreground hover:text-african-gold transition-colors">Pricing</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button className="btn-primary" size="sm">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-african-gold transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-african-gold transition-colors">Home</a>
              <a href="#training" className="text-foreground hover:text-african-gold transition-colors">Training</a>
              <a href="#showcase" className="text-foreground hover:text-african-gold transition-colors">Showcase</a>
              <a href="#members" className="text-foreground hover:text-african-gold transition-colors">Members</a>
              <a href="#pricing" className="text-foreground hover:text-african-gold transition-colors">Pricing</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button className="btn-primary" size="sm">
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

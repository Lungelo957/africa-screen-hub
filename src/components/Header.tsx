
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AuthButton from './AuthButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#training', label: 'Training' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#members', label: 'Community' },
    { href: '#pricing', label: 'Pricing' }
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-african-gold/20">
      <div className="container mx-auto section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 bg-african-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="text-xl font-bold text-gradient">Screen of Africa</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-african-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            {user && (
              <button
                onClick={handleDashboardClick}
                className="text-foreground hover:text-african-gold transition-colors duration-300 font-medium"
              >
                Dashboard
              </button>
            )}
          </nav>

          {/* Desktop Auth Button */}
          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <span className="text-sm text-muted-foreground">
                Welcome, {user.user_metadata?.first_name || 'Creative'}!
              </span>
            )}
            <AuthButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-african-gold transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-african-gold/20 mt-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-african-gold transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {user && (
                <button
                  onClick={() => {
                    handleDashboardClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-african-gold transition-colors duration-300 font-medium py-2 text-left"
                >
                  Dashboard
                </button>
              )}
              <div className="pt-4 border-t border-african-gold/20">
                {user && (
                  <p className="text-sm text-muted-foreground mb-3">
                    Welcome, {user.user_metadata?.first_name || 'Creative'}!
                  </p>
                )}
                <AuthButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Film, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur border-t border-border">
      <div className="container mx-auto section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-african-gradient p-2 rounded-lg">
                <Film className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gradient">The Screen of Africa</h3>
                <p className="text-xs text-muted-foreground">Media & Training Hub</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering African creatives through comprehensive training, collaborative projects, 
              and a platform to showcase authentic African stories to the world.
            </p>
            <div className="flex space-x-4">
              <div className="bg-african-gold/20 p-2 rounded-lg hover:bg-african-gold/30 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-african-gold" />
              </div>
              <div className="bg-african-sunset/20 p-2 rounded-lg hover:bg-african-sunset/30 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5 text-african-sunset" />
              </div>
              <div className="bg-african-sky/20 p-2 rounded-lg hover:bg-african-sky/30 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-african-sky" />
              </div>
              <div className="bg-african-earth/20 p-2 rounded-lg hover:bg-african-earth/30 transition-colors cursor-pointer">
                <Youtube className="h-5 w-5 text-african-earth" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-african-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Home</a></li>
              <li><a href="#training" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Training</a></li>
              <li><a href="#showcase" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Showcase</a></li>
              <li><a href="#members" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Members</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="font-semibold mb-4 text-african-gold">Training</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Film Production</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Acting & Performance</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">VFX & CGI</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Animation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-african-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-african-sunset" />
                <span className="text-sm text-muted-foreground">info@screenofafrica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-african-sunset" />
                <span className="text-sm text-muted-foreground">+27 (0) 67 709 1064</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-african-sunset mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Creative studios<br />
                  Durban, South Africa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 The Screen of Africa Media(created by Lungelo). All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-african-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

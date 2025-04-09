
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-seedlink-green to-seedlink-lightgreen mr-2"></div>
              <span className="text-xl font-display font-bold">SeedLink</span>
            </div>
            <p className="text-white/70 mb-6">
              Connecting investors and farmers for sustainable growth and shared prosperity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-seedlink-green transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#investments" className="text-white/70 hover:text-seedlink-green transition-colors">
                  Investment Options
                </a>
              </li>
              <li>
                <a href="#farmers" className="text-white/70 hover:text-seedlink-green transition-colors">
                  For Farmers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  Investment Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  Farming Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  Market Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-seedlink-green transition-colors">
                  Sustainable Practices
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-seedlink-green shrink-0 mt-0.5" />
                <span className="text-white/70">contact@seedlink.com</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-seedlink-green shrink-0 mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li>
                <address className="text-white/70 not-italic">
                  SeedLink Headquarters<br />
                  123 Green Avenue<br />
                  Farmington, AG 54321
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SeedLink. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

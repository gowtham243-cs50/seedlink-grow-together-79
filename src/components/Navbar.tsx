
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled ? "py-3 bg-background/95 backdrop-blur-sm shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-seedlink-green to-seedlink-darkgreen"></div>
            <span className="ml-2 text-xl font-display font-bold">SeedLink</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            How It Works
          </a>
          <a href="#benefits" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            Benefits
          </a>
          <a href="#investments" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            Investments
          </a>
          <a href="#farmers" className="text-foreground/80 hover:text-foreground transition-colors duration-200">
            For Farmers
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/sign-in">
            <Button variant="outline" className="rounded-full hover:bg-seedlink-green/10">
              Sign In
            </Button>
          </Link>
          <Button 
            className="rounded-full bg-seedlink-green hover:bg-seedlink-darkgreen text-white"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 mb-4">
            <a 
              href="#how-it-works" 
              className="px-4 py-2 hover:bg-seedlink-green/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="px-4 py-2 hover:bg-seedlink-green/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#investments" 
              className="px-4 py-2 hover:bg-seedlink-green/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investments
            </a>
            <a 
              href="#farmers" 
              className="px-4 py-2 hover:bg-seedlink-green/10 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Farmers
            </a>
          </nav>
          <div className="flex flex-col space-y-3 px-4">
            <Link to="/sign-in" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center rounded-full">
                Sign In
              </Button>
            </Link>
            <Button className="w-full justify-center rounded-full bg-seedlink-green hover:bg-seedlink-darkgreen text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Seedling, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-seedlink-green/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-60 h-60 bg-seedlink-lightgreen/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Subtitle */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-seedlink-green/10 text-seedlink-green text-sm font-medium animate-fade-in">
            <Seedling size={16} className="mr-2" />
            Connecting Farmers & Investors for Sustainable Growth
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Invest in Agriculture, <span className="seedlink-gradient-text">Harvest Returns</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            SeedLink transforms agricultural investments through our innovative funding model, 
            empowering farmers while providing investors with sustainable returns.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button className="seedlink-button bg-seedlink-green hover:bg-seedlink-darkgreen text-white px-8 py-6 text-lg">
              Start Investing
              <ChevronRight size={20} className="ml-2" />
            </Button>
            <Button variant="outline" className="seedlink-button px-8 py-6 text-lg border-seedlink-green text-seedlink-darkgreen hover:bg-seedlink-green/10">
              Join as a Farmer
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="p-6 rounded-2xl bg-white/50 border border-seedlink-green/20 shadow-sm hover-lift">
              <TrendingUp size={28} className="text-seedlink-green mb-3" />
              <h3 className="text-3xl font-bold">18%</h3>
              <p className="text-muted-foreground">Average Annual Returns</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/50 border border-seedlink-green/20 shadow-sm hover-lift">
              <Seedling size={28} className="text-seedlink-green mb-3" />
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-muted-foreground">Acres Under Management</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/50 border border-seedlink-green/20 shadow-sm hover-lift">
              <Users size={28} className="text-seedlink-green mb-3" />
              <h3 className="text-3xl font-bold">2,500+</h3>
              <p className="text-muted-foreground">Farmers Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

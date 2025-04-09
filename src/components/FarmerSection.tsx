
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';

const FarmerSection = () => {
  const benefits = [
    "Access to capital without taking on debt",
    "Agricultural experts to help improve your farm's productivity",
    "Modern farming techniques and technologies",
    "Better market access and premium prices for crops",
    "Reduced risk through crop insurance and diversification",
    "Community of like-minded farmers sharing knowledge"
  ];

  return (
    <section id="farmers" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-seedlink-green/10 text-seedlink-green text-sm font-medium mb-6">
              For Farmers
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Grow Your Farm's Potential
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join SeedLink to transform your agricultural operations with expert support and reliable funding. 
              We partner with you throughout the entire growing season to maximize yields and build sustainable success.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="shrink-0 bg-seedlink-green/10 rounded-full p-1 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-seedlink-green" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="seedlink-button bg-seedlink-green hover:bg-seedlink-darkgreen text-white">
                Apply To Join
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="seedlink-button border-seedlink-green text-seedlink-darkgreen hover:bg-seedlink-green/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1501286353178-1ec871b144f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Farmer in field" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Testimonial card */}
            <div className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-12 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-seedlink-green/20 flex items-center justify-center mr-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="Farmer" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">James Wilson</h4>
                  <p className="text-sm text-muted-foreground">Corn Farmer, Iowa</p>
                </div>
              </div>
              <p className="text-sm italic">
                "Joining SeedLink was the best decision for my farm. Their expert guidance helped increase my yield by 35% while reducing costs."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerSection;

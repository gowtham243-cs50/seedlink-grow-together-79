import React from 'react';
import { Circle, ArrowRight, BarChart3, Users, Warehouse, Sprout } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Warehouse className="h-10 w-10 text-seedlink-green" />,
      title: "Land Collation",
      description: "Farmers' lands are evaluated and grouped into specialized agricultural funds based on location, crop type, and potential yield."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-seedlink-green" />,
      title: "Fund Creation",
      description: "We establish structured investment funds with clear objectives, risk profiles, and expected returns for each agricultural portfolio."
    },
    {
      icon: <Users className="h-10 w-10 text-seedlink-green" />,
      title: "Expert Support",
      description: "Our agricultural specialists provide ongoing support to farmers, optimizing crop management and ensuring sustainable practices."
    },
    {
      icon: <Sprout className="h-10 w-10 text-seedlink-green" />,
      title: "Shared Growth",
      description: "Investors receive dividends from successful harvests while farmers benefit from improved techniques, better infrastructure, and premium market access."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary relative">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">How SeedLink Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our innovative model creates a sustainable ecosystem where investors and farmers grow together
          </p>
        </div>

        {/* Desktop view - Horizontal steps */}
        <div className="hidden md:block relative mb-12">
          <div className="absolute top-16 left-0 right-0 h-1 bg-seedlink-green/20"></div>
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative z-10 mb-8">
                  <div className="bg-white rounded-full p-4 border-2 border-seedlink-green shadow-md">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight 
                      className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-seedlink-green"
                      size={24}
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile view - Vertical steps */}
        <div className="md:hidden space-y-12 relative">
          <div className="absolute top-0 bottom-0 left-4 w-1 bg-seedlink-green/20"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative pl-16">
              <div className="absolute left-0 top-0 bg-white rounded-full p-2 border-2 border-seedlink-green shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-6">Ready to be part of sustainable agriculture?</p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-seedlink-green text-white rounded-full hover:bg-seedlink-darkgreen transition-colors duration-300"
          >
            Explore Our Investment Options
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

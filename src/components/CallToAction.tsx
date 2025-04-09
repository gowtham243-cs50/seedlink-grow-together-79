
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-seedlink-green to-seedlink-darkgreen text-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Ready to Grow Together?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
          Join the SeedLink community today and be part of the
          agricultural revolution that benefits everyone.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">For Investors</h3>
            <p className="mb-6 text-white/80">
              Discover sustainable investment opportunities that 
              deliver competitive returns while supporting rural communities.
            </p>
            <Button className="w-full bg-white text-seedlink-darkgreen hover:bg-white/90">
              Start Investing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">For Farmers</h3>
            <p className="mb-6 text-white/80">
              Transform your agricultural business with expert 
              support and reliable funding through our innovative model.
            </p>
            <Button className="w-full bg-white text-seedlink-darkgreen hover:bg-white/90">
              Join as a Farmer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <p className="text-lg text-white/80 mb-4">Not sure where to start?</p>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

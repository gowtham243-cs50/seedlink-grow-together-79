
import React from 'react';
import { Button } from "@/components/ui/button";
import { Wheat, Coffee, Banana, ChevronRight } from 'lucide-react';

const InvestmentOptions = () => {
  const investmentOptions = [
    {
      icon: <Wheat className="h-8 w-8" />,
      title: "Grain Fund",
      description: "Focus on staple crops like corn, wheat, and soybeans with steady seasonal returns.",
      returnRate: "12-14%",
      minInvestment: "$1,000",
      risk: "Low",
      term: "1-3 years",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Specialty Crops Fund",
      description: "Invest in high-value crops like coffee, cocoa, and specialty vegetables for premium returns.",
      returnRate: "15-18%",
      minInvestment: "$2,500",
      risk: "Medium",
      term: "2-5 years",
      color: "from-seedlink-green to-seedlink-darkgreen"
    },
    {
      icon: <Banana className="h-8 w-8" />,
      title: "Orchard & Plantation Fund",
      description: "Long-term investments in fruit orchards and tree plantations with compounding growth.",
      returnRate: "18-22%",
      minInvestment: "$5,000",
      risk: "Medium-High",
      term: "5-10 years",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="investments" className="py-20 bg-secondary relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Investment Options</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diversify your portfolio with our carefully curated agricultural investment funds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {investmentOptions.map((option, index) => (
            <div key={index} className="seedlink-card overflow-hidden group hover:translate-y-[-8px] duration-300">
              <div className={`p-6 bg-gradient-to-r ${option.color} text-white`}>
                <div className="bg-white/20 rounded-full p-3 inline-block mb-4">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <p className="opacity-90 mb-4">{option.description}</p>
              </div>
              
              <div className="p-6 bg-white">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Expected Return</p>
                    <p className="text-xl font-bold text-seedlink-darkgreen">{option.returnRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Minimum</p>
                    <p className="text-xl font-bold">{option.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <p className="text-lg font-medium">{option.risk}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Investment Term</p>
                    <p className="text-lg font-medium">{option.term}</p>
                  </div>
                </div>
                
                <Button className="w-full justify-between bg-seedlink-cream text-seedlink-darkgreen hover:bg-seedlink-green hover:text-white group-hover:bg-seedlink-green group-hover:text-white transition-colors duration-300">
                  Explore Fund Details
                  <ChevronRight size={18} className="opacity-70" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6">Looking for customized investment options?</p>
          <Button className="seedlink-button bg-seedlink-green hover:bg-seedlink-darkgreen text-white">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;


import React from 'react';
import { TrendingUp, ShieldCheck, Leaf, Users, CircleDollarSign, BarChart3 } from 'lucide-react';

const Benefits = () => {
  const investorBenefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-seedlink-green" />,
      title: "Competitive Returns",
      description: "Access to profitable agricultural investments with historically consistent yields"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-seedlink-green" />,
      title: "Reduced Risk",
      description: "Diversified agricultural portfolios managed by experts to mitigate risk"
    },
    {
      icon: <Leaf className="h-8 w-8 text-seedlink-green" />,
      title: "Impact Investing",
      description: "Support sustainable farming practices while generating financial returns"
    }
  ];

  const farmerBenefits = [
    {
      icon: <CircleDollarSign className="h-8 w-8 text-seedlink-green" />,
      title: "Capital Access",
      description: "Secure reliable funding without the burden of traditional loans"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-seedlink-green" />,
      title: "Expert Guidance",
      description: "Benefit from agricultural specialists who help optimize crop yields"
    },
    {
      icon: <Users className="h-8 w-8 text-seedlink-green" />,
      title: "Community Support",
      description: "Join a network of progressive farmers sharing knowledge and resources"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Benefits for Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform creates value for both investors seeking returns and farmers looking for support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Investor benefits */}
          <div className="bg-white rounded-2xl p-8 border border-seedlink-green/20 shadow-md">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-seedlink-green/10 text-seedlink-green text-sm font-medium mb-6">
              For Investors
            </div>
            <div className="space-y-8">
              {investorBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 bg-seedlink-green/10 rounded-lg p-3">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Farmer benefits */}
          <div className="bg-white rounded-2xl p-8 border border-seedlink-green/20 shadow-md">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-seedlink-green/10 text-seedlink-green text-sm font-medium mb-6">
              For Farmers
            </div>
            <div className="space-y-8">
              {farmerBenefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 bg-seedlink-green/10 rounded-lg p-3">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-seedlink-green/5 to-seedlink-lightgreen/10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Agricultural Revolution</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Whether you're an investor looking for sustainable returns or a farmer seeking support,
            SeedLink is building the future of agriculture together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="seedlink-button bg-seedlink-green hover:bg-seedlink-darkgreen text-white"
            >
              Explore Investment Options
            </a>
            <a 
              href="#" 
              className="seedlink-button border border-seedlink-green text-seedlink-darkgreen hover:bg-seedlink-green/10"
            >
              Apply as a Farmer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

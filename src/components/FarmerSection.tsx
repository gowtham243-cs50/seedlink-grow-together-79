
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const FarmerSection = () => {
  const benefits = [
    "Access to capital without taking on debt",
    "Agricultural experts to help improve your farm's productivity",
    "Modern farming techniques and technologies",
    "Better market access and premium prices for crops",
    "Reduced risk through crop insurance and diversification",
    "Community of like-minded farmers sharing knowledge"
  ];

  const testimonials = [
    {
      name: "James Wilson",
      role: "Corn Farmer, Iowa",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "Joining SeedLink was the best decision for my farm. Their expert guidance helped increase my yield by 35% while reducing costs."
    },
    {
      name: "Sarah Johnson",
      role: "Organic Vegetable Farmer, California",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "The capital from SeedLink investors allowed me to upgrade my irrigation system. Now I use 40% less water and my produce quality has improved significantly."
    },
    {
      name: "Miguel Rodriguez",
      role: "Coffee Grower, Colombia",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      quote: "SeedLink connected me with premium buyers and helped me implement sustainable practices. My income has increased by 60% over the last two years."
    },
    {
      name: "Priya Patel",
      role: "Rice Farmer, India",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "With SeedLink's support, I was able to diversify my crops and implement modern techniques. This has made my farm more resilient to climate changes."
    }
  ];

  return (
    <section id="farmers" className="py-20 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Background" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
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
            
            {/* Testimonials carousel */}
            <div className="absolute -bottom-24 md:-bottom-8 -right-4 md:-right-12 w-full md:w-[120%] max-w-md">
              <h3 className="text-xl font-bold mb-4 text-center md:text-left">What Farmers Say</h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-seedlink-green/20 flex items-center justify-center mr-3">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="text-sm italic">"{testimonial.quote}"</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
                  <CarouselNext className="relative static right-0 left-auto translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerSection;

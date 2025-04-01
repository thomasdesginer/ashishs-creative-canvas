
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Ashish Newar"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary opacity-10 rounded-full z-[-1]"></div>
          </div>
          
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="text-muted-foreground mb-6">
              Hello! I'm Ashish Newar, a passionate creator at the intersection of technology and design. With a deep love for both logical problem-solving and artistic expression, I've cultivated expertise across web development, UI design, and photography.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey began with a fascination for how things work behind the scenes, which led me to web development. Over time, I realized that creating functional applications wasn't enough – they needed to be beautiful and intuitive too. This revelation sparked my passion for UI design.
            </p>
            <p className="text-muted-foreground mb-8">
              Photography became my third passion, allowing me to capture moments and tell stories visually. These three disciplines complement each other perfectly in my work, enabling me to create holistic digital experiences.
            </p>
            
            <Button className="flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

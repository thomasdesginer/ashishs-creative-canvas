
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ashish Newar
          </h1>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 font-medium text-xl md:text-2xl mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Web Developer | UI Designer | Photographer
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Creating digital experiences that blend technical precision with artistic vision. 
            Transforming ideas into engaging web solutions, captivating designs, and compelling visual stories.
          </p>
          
          <div className="flex justify-center space-x-4 mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="default" className="flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-fade-in"
        style={{ animationDelay: '1.2s' }}
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;

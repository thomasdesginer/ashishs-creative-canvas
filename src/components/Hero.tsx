
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "<Ashish Newar />";
  const [cursorPosition, setCursorPosition] = useState(0);
  
  useEffect(() => {
    if (cursorPosition < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[cursorPosition]);
        setCursorPosition(cursorPosition + 1);
      }, 150);
      
      return () => clearTimeout(timeout);
    }
  }, [cursorPosition, text]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center">
          <div className="inline-block mb-4">
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <span className="ml-2 text-xs text-gray-400">portfolio.jsx</span>
              </div>
              <div className="code-line">
                <span className="text-green-400">{text}</span>
                {cursorPosition < fullText.length && (
                  <span className="animate-blink">|</span>
                )}
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 animate-fade-in bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ animationDelay: '0.2s' }}>
            Ashish Newar
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[2px] w-10 bg-primary/50"></div>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-medium text-xl md:text-2xl font-mono animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="text-blue-400">&lt;</span>
              Web Developer <span className="text-purple-400">|</span> UI Designer <span className="text-purple-400">|</span> Photographer
              <span className="text-blue-400">/&gt;</span>
            </div>
            <div className="h-[2px] w-10 bg-primary/50"></div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in font-mono" style={{ animationDelay: '0.6s' }}>
            <span className="text-green-400">$</span> Creating digital experiences that blend{" "}
            <span className="highlight-text">technical precision</span> with{" "}
            <span className="highlight-text">artistic vision</span>.
          </p>
          
          <div className="flex justify-center space-x-4 mb-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="default" className="flex items-center gap-2 bg-primary/80 hover:bg-primary border border-primary/30">
              <Mail size={18} />
              Contact Me
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-primary/30 bg-background/50">
              <Code size={18} />
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200">
              <Terminal size={24} />
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
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;

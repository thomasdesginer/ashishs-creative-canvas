
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Terminal, Code, FileCode } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full matrix-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
                <span className="ml-2 text-xs text-gray-400">about.js</span>
              </div>
              
              <div className="mb-4">
                <div className="code-line mb-1">
                  <span className="text-blue-400">const</span> 
                  <span className="text-yellow-300 ml-1">developer</span> 
                  <span className="text-white ml-1">=</span>
                  <span className="text-green-400 ml-1">&#123;</span>
                </div>
                <div className="ml-6 text-muted-foreground">
                  name: <span className="text-green-300">'Ashish Newar'</span>,
                </div>
                <div className="ml-6 text-muted-foreground">
                  skills: [<span className="text-yellow-300">'web_dev'</span>, <span className="text-yellow-300">'ui_design'</span>, <span className="text-yellow-300">'photography'</span>],
                </div>
                <div className="ml-6 text-muted-foreground">
                  experience: <span className="text-purple-300">5</span> + <span className="text-purple-300">new Date().getFullYear() - 2023</span>,
                </div>
                <div className="ml-6 text-muted-foreground">
                  <span className="text-pink-400">passion</span>: <span className="text-green-300">'Creating digital experiences'</span>
                </div>
                <div className="text-green-400">&#125;;</div>
              </div>
              
              <div className="cursor-blink before:content-['$_'] before:text-green-400">
                <span className="typing-cursor"></span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full z-[-1]"></div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={20} className="text-primary" />
              <h2 className="section-title mb-0 inline-flex">About Me</h2>
            </div>
            
            <p className="text-muted-foreground mb-6 font-mono">
              <span className="text-green-400">$ cat</span> <span className="text-blue-300">about-ashish.txt</span>
            </p>
            
            <p className="text-muted-foreground mb-6">
              Hello! I'm Ashish Newar, a passionate creator at the intersection of technology and design. With a deep love for both logical problem-solving and artistic expression, I've cultivated expertise across web development, UI design, and photography.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey began with a fascination for how things work behind the scenes, which led me to web development. Over time, I realized that creating functional applications wasn't enough – they needed to be beautiful and intuitive too. This revelation sparked my passion for UI design.
            </p>
            <p className="text-muted-foreground mb-8">
              Photography became my third passion, allowing me to capture moments and tell stories visually. These three disciplines complement each other perfectly in my work, enabling me to create holistic digital experiences.
            </p>
            
            <Button className="flex items-center gap-2 bg-primary/80 hover:bg-primary border border-primary/30">
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

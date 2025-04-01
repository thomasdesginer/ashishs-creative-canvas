
import React from 'react';
import { ChevronUp, Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full matrix-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-mono font-bold text-white inline-flex items-center">
              <Code className="mr-2 text-primary" size={24} />
              <span className="text-primary">&lt;</span>
              Ashish Newar
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md font-mono">
              <span className="text-green-400">$</span> Creating digital experiences that blend technical precision with artistic vision.
            </p>
          </div>
          
          <div>
            <a 
              href="#home" 
              className="neo-blur p-3 rounded-full hover:bg-[#333] transition-colors border border-[#555]/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </a>
          </div>
        </div>
        
        <div className="terminal-box w-full mb-6">
          <div className="code-line">
            <span className="text-blue-400">const</span> <span className="text-yellow-300">currentYear</span> <span className="text-white">=</span> <span className="text-purple-400">new</span> <span className="text-blue-400">Date</span>()<span className="text-blue-400">.getFullYear</span>();
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 font-mono">
            <p className="text-gray-500">
              <span className="text-primary">&copy;</span> {new Date().getFullYear()} <span className="text-primary">Ashish Newar</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors relative group font-mono font-bold">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#web-dev" className="text-gray-400 hover:text-primary transition-colors relative group font-mono font-bold">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors relative group font-mono font-bold">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

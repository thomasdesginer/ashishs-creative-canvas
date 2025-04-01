
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-serif font-bold text-white">
              Ashish Newar
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating digital experiences that blend technical precision with artistic vision.
            </p>
          </div>
          
          <div>
            <a 
              href="#home" 
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Ashish Newar. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
              About
            </a>
            <a href="#web-dev" className="text-gray-400 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

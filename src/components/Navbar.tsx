
import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Web Dev', href: '#web-dev' },
    { name: 'UI Design', href: '#ui-design' },
    { name: 'Photography', href: '#photography' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-3 neo-blur shadow-[0_8px_32px_rgba(0,0,0,0.3)]' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="inline-flex items-center">
            <Code className="mr-2 text-primary" size={20} />
            <span className="text-primary">&lt;</span>
            <span className="text-xl font-serif font-bold tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Ashish Newar
            </span>
            <span className="text-primary">/&gt;</span>
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono font-bold text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="neo-blur hover:bg-[#333]/50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden neo-blur rounded-lg mt-4 p-4 animate-fade-in border border-[#555]/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono font-bold text-muted-foreground hover:text-primary py-2 transition-colors flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary mr-2">$</span> {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

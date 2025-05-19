
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/index.html", text: "Inicio" },
    { href: "/project-info.html", text: "Sobre el Proyecto" },
    { href: "/features.html", text: "Características" },
    { href: "/request-service.html", text: "Solicitar Servicio" },
    { href: "/drivers.html", text: "Conductores" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/index.html" className="flex items-center">
              <Truck className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">Gocarg</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-700 hover:text-primary px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
            <Button asChild className="ml-2 lg:ml-4">
              <a href="/request-service.html">Contactar</a>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a href="/request-service.html">Contactar</a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;

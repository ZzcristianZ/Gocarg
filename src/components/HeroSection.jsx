
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Clock, MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative overflow-hidden hero-gradient text-white">
      <div className="absolute bottom-0 left-0 w-full opacity-10 truck-animation">
        <Truck className="h-32 w-32" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gocarg: Transporte de Carga Eficiente en Ocaña
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Conectamos tus necesidades de transporte con conductores locales. Rápido, seguro y adaptado a Ocaña, Colombia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
                <Link to="/request-service">Solicitar Servicio</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/project-info">Más Sobre Gocarg</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <img  alt="Camioneta de carga moderna transitando por una calle colorida de Ocaña, representando el servicio de Gocarg" className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1587096297167-a479d385f5fe" />
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <Truck className="h-8 w-8"/>, title: "Flota Local", description: "Vehículos para Ocaña" },
            { icon: <Package className="h-8 w-8"/>, title: "Carga Variada", description: "Paquetes y mudanzas" },
            { icon: <Clock className="h-8 w-8"/>, title: "Servicio Ágil", description: "Respuesta rápida" },
            { icon: <Info className="h-8 w-8"/>, title: "Proyecto UFPSO", description: "Innovación local" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-lg p-6"
            >
              <div className="bg-white/20 p-3 rounded-full w-fit mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function CTASection() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transportar tu carga en Ocaña?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Con Gocarg, conecta con conductores profesionales y obtén el mejor servicio de transporte de carga para tus necesidades locales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50 group">
                <Link to="/request-service">
                  Solicitar Ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/drivers">Ver Conductores</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img  alt="Camión pequeño de Gocarg estacionado en una zona de carga en Ocaña" className="w-full" src="https://images.unsplash.com/photo-1626026822664-9980fecf5d13" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

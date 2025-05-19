
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Truck, MessageSquare, CheckCircle } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Busca un Conductor",
      description: "Explora nuestra lista de conductores disponibles o solicita un servicio directamente."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Contacta y Coordina",
      description: "Comunícate con el conductor para acordar detalles del servicio y precio."
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Recibe tu Servicio",
      description: "El conductor realizará el transporte de tu carga de manera segura y eficiente."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Confirma la Entrega",
      description: "Verifica que todo esté en orden y califica el servicio recibido."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            ¿Cómo Funciona?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Conectarte con un conductor de carga nunca fue tan fácil
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-300 transform translate-x-full" />
              )}
              
              <div className="bg-blue-50 rounded-full p-4 mx-auto mb-6 w-20 h-20 flex items-center justify-center">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              <div className="absolute -top-3 -left-3 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

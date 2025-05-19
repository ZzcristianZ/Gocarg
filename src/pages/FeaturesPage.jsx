
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Truck, Users, MessageSquare, MapPin, ShieldCheck, Smartphone, Clock } from 'lucide-react';

const featuresList = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Variedad de Vehículos",
    description: "Encuentra desde camionetas pickup hasta camiones pequeños, perfectos para las necesidades de transporte en Ocaña."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Conductores Verificados",
    description: "Todos nuestros conductores pasan por un proceso de verificación para garantizar tu seguridad y confianza."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Comunicación Directa",
    description: "Contacta directamente con los conductores para coordinar todos los detalles de tu servicio de carga."
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Cobertura Local",
    description: "Servicio enfocado en la ciudad de Ocaña y sus alrededores, con conocimiento de las rutas locales."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Pagos Seguros (Próximamente)",
    description: "Integraremos opciones de pago seguras directamente en la aplicación para tu comodidad."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Fácil de Usar",
    description: "Nuestra plataforma es intuitiva y fácil de navegar, tanto en la web como en la futura app móvil."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Solicitudes Rápidas",
    description: "Publica tu necesidad de transporte y recibe respuestas de conductores disponibles rápidamente."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Calificaciones y Reseñas",
    description: "Consulta las opiniones de otros usuarios para elegir al conductor que mejor se adapte a tus necesidades."
  }
];

function FeaturesPage() {
  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Características de Gocarg
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todo lo que Gocarg te ofrece para facilitar tus transportes de carga en Ocaña.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center mb-6 bg-blue-100 rounded-full p-4 w-20 h-20 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Y mucho más por venir!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos trabajando constantemente para mejorar Gocarg y añadir nuevas funcionalidades que hagan tu experiencia de transporte de carga aún mejor.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturesPage;


import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Search, UserCheck, MessageCircle, MapPin as MapIconUI, Send } from 'lucide-react';

const featuresData = [
  {
    title: "Búsqueda Fácil",
    description: "Encuentra conductores por tipo de vehículo y ubicación en Ocaña.",
    icon: <Search className="h-8 w-8 text-white" />,
    imgAlt: "Pantalla de búsqueda de conductores en la app móvil Gocarg mostrando un mapa de Ocaña y filtros de vehículos",
    imgPlaceholder: "App Gocarg: Pantalla de búsqueda de conductores con mapa interactivo de Ocaña y opciones de filtro por tipo de camión o camioneta."
  },
  {
    title: "Perfiles Detallados",
    description: "Revisa calificaciones, reseñas y especialidades del conductor local.",
    icon: <UserCheck className="h-8 w-8 text-white" />,
    imgAlt: "Pantalla de perfil de un conductor en la app Gocarg, mostrando su foto, vehículo, calificación por estrellas y reseñas de clientes en Ocaña",
    imgPlaceholder: "App Gocarg: Perfil de conductor con foto, detalles del vehículo (ej. camioneta roja), calificación de 4.8 estrellas y lista de reseñas de usuarios."
  },
  {
    title: "Contacto Directo",
    description: "Comunícate fácilmente con el conductor elegido para tu transporte en Ocaña.",
    icon: <MessageCircle className="h-8 w-8 text-white" />,
    imgAlt: "Pantalla de chat dentro de la app Gocarg entre un usuario y un conductor, coordinando un servicio de transporte en Ocaña",
    imgPlaceholder: "App Gocarg: Interfaz de chat con mensajes de ejemplo: 'Hola, necesito transportar unos muebles en Ocaña centro.' y 'Claro, estoy disponible. ¿Para cuándo sería?'."
  },
  {
    title: "Solicitud de Servicio",
    description: "Pide un transporte detallando tu carga y necesidades dentro de Ocaña.",
    icon: <Send className="h-8 w-8 text-white" />,
    imgAlt: "Pantalla de formulario para solicitar un servicio en la app Gocarg, con campos para dirección de recogida/entrega en Ocaña, tipo de carga y vehículo",
    imgPlaceholder: "App Gocarg: Formulario de solicitud de servicio con campos: 'Dirección Recogida (Ocaña)', 'Dirección Entrega (Ocaña)', 'Tipo de Carga: Muebles', 'Notas Adicionales'."
  },
];

function AppFeaturesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Así Funciona Gocarg en tu Móvil
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre lo fácil que es gestionar tus transportes de carga en Ocaña desde la palma de tu mano.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6 phone-mockup-container">
                <div className="relative w-72 h-[560px] bg-gray-800 rounded-[40px] p-4 shadow-2xl border-8 border-gray-900 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-lg"></div>
                  <div className="absolute top-7 left-2 w-1 h-8 bg-gray-700 rounded-full"></div>
                  <div className="absolute top-20 left-2 w-1 h-12 bg-gray-700 rounded-full"></div>
                  <div className="absolute top-7 right-2 w-1 h-16 bg-gray-700 rounded-full"></div>
                  
                  <div className="w-full h-full bg-gray-100 rounded-[28px] overflow-hidden">
                    <img  
                      alt={feature.imgAlt}
                      className="w-full h-full object-cover"
                     src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary p-4 rounded-full shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform duration-300 z-10">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-10 mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 px-4 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppFeaturesPreview;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DriverCard from '@/components/DriverCard';
import { Search, Truck } from 'lucide-react';

const mockDrivers = [
  {
    id: '1',
    name: 'Carlos Martínez',
    rating: 4.8,
    reviews: 124,
    vehicleType: 'Pickup Doble Cabina',
    vehicleDetails: 'Toyota Hilux 2020 Gris',
    location: 'Centro de Ocaña',
    description: 'Conductor con 5 años de experiencia en transporte de carga en Ocaña. Especializado en mudanzas y entregas rápidas. Vehículo espacioso.',
    availability: 'Lunes a Sábado',
    imageUrl: 'https://images.unsplash.com/photo-1580623899418-a5f700190099' 
  },
  {
    id: '2',
    name: 'Ana Rodríguez',
    rating: 4.9,
    reviews: 87,
    vehicleType: 'Furgoneta Grande',
    vehicleDetails: 'Mercedes Sprinter 2021 Blanca',
    location: 'Barrio El Carmen, Ocaña',
    description: 'Servicio profesional de transporte con experiencia en manejo de carga frágil y voluminosa en Ocaña. Ideal para mercancías delicadas.',
    availability: 'Todos los días',
    imageUrl: 'https://images.unsplash.com/photo-1604553533113-fed9a6150053'
  },
  {
    id: '3',
    name: 'Miguel López',
    rating: 4.7,
    reviews: 56,
    vehicleType: 'Camión Pequeño (Estacas)',
    vehicleDetails: 'Chevrolet NPR 2019 Rojo',
    location: 'Zona Industrial, Ocaña',
    description: 'Especialista en transporte de materiales de construcción y mudanzas completas dentro de Ocaña. Gran capacidad de carga.',
    availability: 'Lunes a Viernes',
    imageUrl: 'https://images.unsplash.com/photo-1506551109886-6101a3c051b3'
  },
  {
    id: '4',
    name: 'Laura Sánchez',
    rating: 4.6,
    reviews: 42,
    vehicleType: 'Pickup Sencilla',
    vehicleDetails: 'Nissan Frontier 2018 Azul',
    location: 'Aguas Claras, Ocaña',
    description: 'Servicio rápido y eficiente para cargas pequeñas y medianas. Entregas en el mismo día en Ocaña. Ágil en tráfico urbano.',
    availability: 'Lunes a Domingo',
    imageUrl: 'https://images.unsplash.com/photo-1618804210799-396310add73c'
  },
  {
    id: '5',
    name: 'Javier Gómez',
    rating: 4.9,
    reviews: 95,
    vehicleType: 'Furgón Mediano',
    vehicleDetails: 'Ford Transit 2022 Gris Oscuro',
    location: 'Barrio La Primavera, Ocaña',
    description: 'Transporte seguro y confiable para todo tipo de mercancías. Amplia experiencia en rutas de Ocaña y alrededores. Puntualidad garantizada.',
    availability: 'Lunes a Sábado, horarios flexibles',
    imageUrl: 'https://images.unsplash.com/photo-1599499009809-794220e4d209'
  },
  {
    id: '6',
    name: 'Sofía Vargas',
    rating: 4.8,
    reviews: 78,
    vehicleType: 'Camioneta Van Pasajeros (Adaptable Carga)',
    vehicleDetails: 'Renault Kangoo 2020 Blanca',
    location: 'El Hatillo, Ocaña',
    description: 'Versátil para transporte de pasajeros o carga ligera. Ideal para entregas urgentes y servicios personalizados en Ocaña.',
    availability: 'Fines de semana y festivos',
    imageUrl: 'https://images.unsplash.com/photo-1621992061602-1861e0b6a88e'
  }
];

function DriversPage() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    setDrivers(mockDrivers);
  }, []);

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 mb-4">
            Conductores Verificados en Ocaña
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conoce a los profesionales listos para ayudarte con tu transporte de carga. Calidad y confianza a tu servicio.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-12 sticky top-4 z-10 backdrop-blur-md bg-opacity-80"
        >
          <div className="flex items-center space-x-3">
            <Search className="h-6 w-6 text-primary" />
            <p className="text-gray-700 font-medium">Mostrando todos los conductores. La funcionalidad de búsqueda y filtros se ha simplificado.</p>
          </div>
        </motion.div>
        
        {drivers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {drivers.map(driver => (
              <DriverCard key={driver.id} driver={driver} isStatic={true} />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="animate-pulse flex flex-col items-center">
              <Truck className="h-16 w-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Cargando conductores...</h3>
              <p className="text-gray-600">Por favor espera un momento.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default DriversPage;

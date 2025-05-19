
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactDriverForm from '@/components/ContactDriverForm';
import DriverProfileHeader from '@/components/driverProfile/DriverProfileHeader';
import DriverInfoSection from '@/components/driverProfile/DriverInfoSection';
import DriverStatsSection from '@/components/driverProfile/DriverStatsSection';
import DriverReviewsSection from '@/components/driverProfile/DriverReviewsSection';
import DriverContactInfo from '@/components/driverProfile/DriverContactInfo';
import { ArrowLeft } from 'lucide-react';

const mockDrivers = [
  {
    id: '1',
    name: 'Carlos Martínez',
    rating: 4.8,
    reviewsData: [
      { id: 1, author: 'Juan Pérez', rating: 5, date: '2023-04-15', comment: 'Excelente servicio, muy puntual y cuidadoso con la carga.' },
      { id: 2, author: 'María López', rating: 5, date: '2023-03-22', comment: 'Muy profesional, llegó a tiempo y el precio fue justo.' },
      { id: 3, author: 'Roberto Sánchez', rating: 4, date: '2023-02-10', comment: 'Buen servicio, recomendado para mudanzas pequeñas.' }
    ],
    vehicleType: 'Pickup',
    vehicleDetails: 'Toyota Hilux 2020',
    location: 'Centro de Ocaña',
    description: 'Conductor con 5 años de experiencia en transporte de carga en Ocaña. Especializado en mudanzas y entregas rápidas.',
    availability: 'Lunes a Sábado',
    phone: '+57 (3XX) XXX-XX01',
    email: 'carlos.martinez@gocarg.co',
    joinedDate: '2019-05-15',
    completedJobs: 342,
    specialties: ['Mudanzas Locales', 'Entregas Rápidas', 'Carga Delicada']
  },
  {
    id: '2',
    name: 'Ana Rodríguez',
    rating: 4.9,
    reviewsData: [
      { id: 1, author: 'Pedro Gómez', rating: 5, date: '2023-05-05', comment: 'Ana es muy profesional y cuidadosa con la mercancía.' },
      { id: 2, author: 'Laura Torres', rating: 5, date: '2023-04-12', comment: 'Excelente servicio, muy recomendable.' }
    ],
    vehicleType: 'Furgoneta',
    vehicleDetails: 'Mercedes Sprinter 2021',
    location: 'Barrio El Carmen, Ocaña',
    description: 'Servicio profesional de transporte con experiencia en manejo de carga frágil y voluminosa en Ocaña.',
    availability: 'Todos los días',
    phone: '+57 (3XX) XXX-XX02',
    email: 'ana.rodriguez@gocarg.co',
    joinedDate: '2020-03-10',
    completedJobs: 187,
    specialties: ['Carga Voluminosa', 'Entregas Comerciales', 'Transporte Refrigerado Local']
  },
   {
    id: '3',
    name: 'Miguel López',
    rating: 4.7,
    reviewsData: [ { id: 1, author: 'Ana Martínez', rating: 5, date: '2023-05-18', comment: 'Excelente para transporte de materiales de construcción.' } ],
    vehicleType: 'Camión Pequeño',
    vehicleDetails: 'Chevrolet NPR 2019',
    location: 'Zona Industrial, Ocaña',
    description: 'Especialista en transporte de materiales de construcción y mudanzas completas dentro de Ocaña.',
    availability: 'Lunes a Viernes',
    phone: '+57 (3XX) XXX-XX03',
    email: 'miguel.lopez@gocarg.co',
    joinedDate: '2020-08-22',
    completedJobs: 156,
    specialties: ['Materiales de Construcción', 'Mudanzas Completas', 'Carga Pesada Local']
  }
];


function DriverProfilePage() {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const foundDriver = mockDrivers.find(d => d.id === id);
      if (foundDriver) {
        // Simulate having a reviews count if not present
        setDriver({ ...foundDriver, reviews: foundDriver.reviewsData.length });
      } else {
        setDriver(null);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!driver) {
    return (
      <div className="py-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Conductor no encontrado</h2>
        <p className="mb-6">El conductor que buscas no existe o ha sido removido.</p>
        <Button asChild>
          <Link to="/drivers">Ver todos los conductores</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/drivers" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a conductores
            </Link>
          </Button>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <DriverProfileHeader driver={driver} />
            
            <div className="relative px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <DriverInfoSection driver={driver} />
                  <DriverStatsSection driver={driver} />
                  <DriverReviewsSection reviews={driver.reviewsData} />
                </div>
                
                <div>
                  <ContactDriverForm driverId={driver.id} driverName={driver.name} />
                  <DriverContactInfo phone={driver.phone} email={driver.email} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DriverProfilePage;

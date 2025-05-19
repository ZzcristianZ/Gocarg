
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Truck, MapPin, Calendar, Clock } from 'lucide-react';

function DriverInfoSection({ driver }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Acerca de</h2>
      <p className="text-gray-700">{driver.description}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center">
          <Truck className="h-5 w-5 text-primary mr-2" />
          <span className="text-gray-700">{driver.vehicleDetails}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-primary mr-2" />
          <span className="text-gray-700">{driver.location}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-primary mr-2" />
          <span className="text-gray-700">{driver.availability}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-primary mr-2" />
          <span className="text-gray-700">Respuesta rápida</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Especialidades</h2>
        <div className="flex flex-wrap gap-2">
          {driver.specialties.map((specialty, index) => (
            <Badge key={index} variant="outline" className="bg-blue-50 text-primary border-primary/50">
              {specialty}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DriverInfoSection;

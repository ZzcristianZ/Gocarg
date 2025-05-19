
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Award } from 'lucide-react';

function DriverProfileHeader({ driver }) {
  return (
    <>
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="relative px-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
          <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
            <AvatarFallback className="text-3xl font-bold bg-primary text-white">
              {driver.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="mt-4 md:mt-0 md:ml-6 md:pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-bold text-gray-900">{driver.name}</h1>
              <Badge variant="secondary" className="ml-2">
                {driver.vehicleType}
              </Badge>
              {driver.rating === 5 && (
                <Badge className="bg-yellow-500 text-white">
                  <Award className="h-3 w-3 mr-1" /> Mejor Calificado
                </Badge>
              )}
            </div>
            
            <div className="flex items-center mt-2">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < driver.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
              <span className="ml-2 text-gray-700">{driver.rating.toFixed(1)} ({driver.reviews} reseñas)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverProfileHeader;


import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Truck, MapPin, Phone } from 'lucide-react';

function DriverCard({ driver, isStatic = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={!isStatic ? { y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" } : {}}
      className="h-full"
    >
      <Card className="h-full overflow-hidden flex flex-col">
        <div className="relative h-52 overflow-hidden">
          <img
            alt={`Vehículo de ${driver.name} tipo ${driver.vehicleType} en Ocaña`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={driver.imageUrl || "https://images.unsplash.com/photo-1612630740918-fa51f9c74765"} />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="font-semibold bg-opacity-80 backdrop-blur-sm">
              {driver.vehicleType}
            </Badge>
          </div>
           <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <CardContent className="pt-6 flex-grow">
          <div className="flex items-center mb-4">
            <Avatar className="h-14 w-14 mr-4 border-2 border-primary">
              <AvatarFallback className="bg-primary text-white font-semibold">
                {driver.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{driver.name}</h3>
              <div className="flex items-center mt-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < driver.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({driver.reviews} reseñas)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center text-gray-700">
              <Truck className="h-5 w-5 mr-2 text-primary" />
              <span>{driver.vehicleDetails}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>{driver.location}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm line-clamp-3">{driver.description}</p>
        </CardContent>
        
        {!isStatic && (
          <CardFooter className="flex justify-between border-t pt-4 mt-auto">
             <Button asChild variant="outline" disabled>
              <span className="cursor-not-allowed">Ver Perfil</span>
            </Button>
            <Button className="flex items-center" disabled>
              <Phone className="mr-2 h-4 w-4" /> Contactar
            </Button>
          </CardFooter>
        )}
         {isStatic && (
          <CardFooter className="border-t pt-4 mt-auto">
            <p className="text-xs text-gray-500">Para contactar, utiliza la sección "Solicitar Servicio".</p>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

export default DriverCard;

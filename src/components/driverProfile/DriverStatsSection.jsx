
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ThumbsUp, Star, Shield } from 'lucide-react';

function DriverStatsSection({ driver }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center">
            <ThumbsUp className="h-8 w-8 text-primary mr-3" />
            <div>
              <p className="text-sm text-gray-500">Servicios Completados</p>
              <p className="text-xl font-bold">{driver.completedJobs}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center">
            <Star className="h-8 w-8 text-yellow-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Calificación</p>
              <p className="text-xl font-bold">{driver.rating.toFixed(1)}/5</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center">
            <Shield className="h-8 w-8 text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-500">Miembro desde</p>
              <p className="text-xl font-bold">{new Date(driver.joinedDate).getFullYear()}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DriverStatsSection;

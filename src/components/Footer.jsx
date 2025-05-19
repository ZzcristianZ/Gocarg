
import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook, Twitter, Instagram, UserCheck } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-10 w-10 text-primary" />
              <span className="ml-3 text-2xl font-bold">Gocarg</span>
            </div>
            <p className="text-gray-400 text-sm">
              Optimizando el transporte de carga en Ocaña, Colombia. Conectamos tus necesidades con soluciones eficientes.
            </p>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-5">Enlaces Rápidos</p>
            <ul className="space-y-3">
              <li>
                <a href="/index.html" className="text-gray-300 hover:text-primary transition-colors duration-150">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/project-info.html" className="text-gray-300 hover:text-primary transition-colors duration-150">
                  Sobre el Proyecto
                </a>
              </li>
              <li>
                <a href="/features.html" className="text-gray-300 hover:text-primary transition-colors duration-150">
                  Características
                </a>
              </li>
              <li>
                <a href="/request-service.html" className="text-gray-300 hover:text-primary transition-colors duration-150">
                  Solicitar Servicio
                </a>
              </li>
              <li>
                <a href="/drivers.html" className="text-gray-300 hover:text-primary transition-colors duration-150 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2"/> Conductores
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-5">Contacto</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-300">+57 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-300">info@gocarg.com.co</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-300">Ocaña, Norte de Santander, Colombia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-lg font-semibold mb-5">Síguenos</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook de Gocarg" className="text-gray-400 hover:text-primary transition-colors duration-150 p-2 rounded-full hover:bg-gray-700">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter de Gocarg" className="text-gray-400 hover:text-primary transition-colors duration-150 p-2 rounded-full hover:bg-gray-700">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram de Gocarg" className="text-gray-400 hover:text-primary transition-colors duration-150 p-2 rounded-full hover:bg-gray-700">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">Mantente al día con nuestras novedades y servicios.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Gocarg. Un proyecto de estudiantes de Ingeniería de Sistemas UFPSO.</p>
          <p className="text-xs text-gray-500 mt-2">Diseñado y desarrollado con <span className="text-red-400">&hearts;</span> para la comunidad de Ocaña.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

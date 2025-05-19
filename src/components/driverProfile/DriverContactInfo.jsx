
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

function DriverContactInfo({ phone, email }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg p-6 mt-6"
    >
      <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-primary mr-2" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-primary mr-2" />
          <span>{email}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default DriverContactInfo;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import ServiceRequestFormFields from '@/components/serviceRequest/ServiceRequestFormFields';
import { serviceRequestFormConfig, initialFormData } from '@/config/serviceRequestFormConfig';
import { Send } from 'lucide-react';
import FormSubmitButton from '@/components/serviceRequest/FormSubmitButton';

function ServiceRequestForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Solicitud enviada",
        description: "Hemos recibido tu solicitud. Un conductor se pondrá en contacto contigo pronto.",
        variant: "default",
      });
      
      const requests = JSON.parse(localStorage.getItem('serviceRequests') || '[]');
      const newRequest = {
        id: Date.now().toString(),
        ...formData,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('serviceRequests', JSON.stringify([...requests, newRequest]));
      
      setFormData(initialFormData);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-xl p-6 md:p-8"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Solicitar Servicio de Transporte</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceRequestFormFields
            fields={serviceRequestFormConfig}
            formData={formData}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
          />
        </div>
        
        <FormSubmitButton loading={loading} />
      </form>
    </motion.div>
  );
}

export default ServiceRequestForm;

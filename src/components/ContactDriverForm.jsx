
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Phone } from 'lucide-react';

function ContactDriverForm({ driverId, driverName }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensaje enviado",
        description: `Tu mensaje ha sido enviado a ${driverName}. Te contactará pronto.`,
        variant: "default",
      });
      
      // Save to localStorage
      const messages = JSON.parse(localStorage.getItem('driverMessages') || '[]');
      const newMessage = {
        id: Date.now().toString(),
        driverId,
        ...formData,
        status: 'sent',
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('driverMessages', JSON.stringify([...messages, newMessage]));
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Contactar a {driverName}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Tu Nombre</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Tu nombre completo" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Tu número de teléfono" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="tu@email.com" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Describe tu necesidad de transporte, fechas, tipo de carga, etc." 
            rows={4} 
            required 
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button type="submit" className="flex-1" disabled={loading}>
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
              </span>
            )}
          </Button>
          
          <Button type="button" variant="outline" className="flex items-center">
            <Phone className="mr-2 h-4 w-4" /> Llamar Directamente
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export default ContactDriverForm;


export const initialFormData = {
  name: '',
  phone: '',
  email: '',
  pickupAddress: '',
  dropoffAddress: '',
  cargoType: '',
  cargoDescription: '',
  vehicleType: '',
  pickupDate: '',
  pickupTime: '',
  specialInstructions: '',
};

export const serviceRequestFormConfig = [
  { name: 'name', label: 'Nombre Completo', type: 'text', placeholder: 'Ej: Juan Pérez', required: true },
  { name: 'phone', label: 'Teléfono de Contacto', type: 'tel', placeholder: 'Ej: 3001234567', required: true },
  { name: 'email', label: 'Correo Electrónico (Opcional)', type: 'email', placeholder: 'Ej: juan.perez@correo.com' },
  { name: 'pickupAddress', label: 'Dirección de Recogida', type: 'text', placeholder: 'Ej: Calle 5 # 10-20, Barrio Centro, Ocaña', required: true, colSpan: 'md:col-span-2' },
  { name: 'dropoffAddress', label: 'Dirección de Entrega', type: 'text', placeholder: 'Ej: Carrera 15 # 8-30, Barrio El Carmen, Ocaña', required: true, colSpan: 'md:col-span-2' },
  { 
    name: 'cargoType', 
    label: 'Tipo de Carga', 
    type: 'select', 
    placeholder: 'Selecciona el tipo de carga', 
    required: true,
    options: [
      { value: 'muebles', label: 'Muebles' },
      { value: 'mercancia', label: 'Mercancía General' },
      { value: 'materiales_construccion', label: 'Materiales de Construcción' },
      { value: 'trasteo_pequeno', label: 'Trasteo Pequeño' },
      { value: 'paqueteria', label: 'Paquetería' },
      { value: 'otro', label: 'Otro (especificar en descripción)' },
    ] 
  },
  { 
    name: 'vehicleType', 
    label: 'Tipo de Vehículo Preferido', 
    type: 'select', 
    placeholder: 'Selecciona un tipo de vehículo',
    options: [
      { value: 'cualquiera', label: 'Cualquiera Disponible' },
      { value: 'pickup', label: 'Camioneta Pickup' },
      { value: 'furgoneta', label: 'Furgoneta' },
      { value: 'camion_pequeno', label: 'Camión Pequeño (Estacas/Furgón)' },
    ]
  },
  { name: 'cargoDescription', label: 'Descripción de la Carga', type: 'textarea', placeholder: 'Ej: 1 sofá, 2 cajas medianas, peso aproximado 50kg', required: true, colSpan: 'md:col-span-2' },
  { name: 'pickupDate', label: 'Fecha de Recogida', type: 'date', required: true },
  { name: 'pickupTime', label: 'Hora de Recogida', type: 'time', required: true },
  { name: 'specialInstructions', label: 'Instrucciones Especiales (Opcional)', type: 'textarea', placeholder: 'Ej: Carga frágil, se requiere ayuda para cargar, etc.', colSpan: 'md:col-span-2' },
];

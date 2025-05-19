
import React from 'react';
import { motion } from 'framer-motion';
import { Target, ListChecks, FileText, Users, TrendingUp, Goal as Conclusion } from 'lucide-react';

const SectionCard = ({ icon, title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-xl shadow-lg p-6 md:p-8"
  >
    <div className="flex items-center text-primary mb-4">
      {icon}
      <h2 className="text-2xl font-semibold ml-3 text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-700 space-y-3">{children}</div>
  </motion.div>
);

function ProjectInfoPage() {
  return (
    <div className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre el Proyecto Gocarg
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una iniciativa para transformar el transporte de carga en Ocaña, desarrollada por estudiantes de Ingeniería de Sistemas de la UFPSO.
          </p>
        </motion.div>

        <div className="space-y-12">
          <SectionCard icon={<Target className="h-8 w-8" />} title="Objetivo General">
            <p>
              Desarrollar una aplicación móvil que permita la conexión entre usuarios y propietarios de vehículos de transporte de carga en la ciudad de Ocaña, optimizando el acceso al servicio y garantizando transacciones seguras y eficientes.
            </p>
          </SectionCard>

          <SectionCard icon={<ListChecks className="h-8 w-8" />} title="Objetivos Específicos" delay={0.1}>
            <ul className="list-disc list-inside space-y-2">
              <li>Implementar un sistema de registro para usuarios y propietarios de vehículos, asegurando la personalización de los servicios ofrecidos.</li>
              <li>Desarrollar un sistema de reservas y pagos seguros (futura integración con PSE).</li>
              <li>Diseñar una interfaz intuitiva y fácil de usar (actualmente web, con miras a Android Studio y Kotlin para la app móvil).</li>
              <li>Crear un modelo de incentivos basado en un porcentaje por cada transacción realizada para garantizar la sostenibilidad económica del proyecto.</li>
              <li>Evaluar la experiencia de los usuarios a través de funciones como calificaciones y retroalimentación para mejorar continuamente el servicio.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<FileText className="h-8 w-8" />} title="Justificación" delay={0.2}>
            <p>
              El desarrollo de esta aplicación responde a la necesidad de optimizar el acceso a servicios de transporte de carga en Ocaña, conectando de manera directa a usuarios y propietarios de vehículos. Esta solución busca reducir tiempos, costos y riesgos asociados con métodos tradicionales, mientras fomenta la confianza mediante un sistema de pagos seguros (a futuro).
            </p>
            <p>
              Además, promueve el crecimiento económico local al mejorar la visibilidad de estos servicios y generar oportunidades para conductores. Como proyecto real, se consolida como una herramienta innovadora y escalable, fortaleciendo no solo la logística regional, sino también nuestra formación como futuros ingenieros de sistemas.
            </p>
          </SectionCard>
          
          <SectionCard icon={<TrendingUp className="h-8 w-8" />} title="Impacto y Beneficios Esperados" delay={0.3}>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Mejora de la Eficiencia:</strong> Reducción de tiempos de espera y optimización de rutas.</li>
                <li><strong>Reducción de Costos:</strong> Tarifas competitivas al eliminar intermediarios innecesarios.</li>
                <li><strong>Mayor Seguridad y Confianza:</strong> Perfiles verificados, sistema de calificaciones y (futuros) pagos seguros.</li>
                <li><strong>Impulso a la Economía Local:</strong> Más oportunidades para transportistas locales y facilitación del comercio.</li>
                <li><strong>Modernización del Sector:</strong> Introducción de tecnología para un servicio tradicional.</li>
                <li><strong>Desarrollo de Habilidades:</strong> Aplicación práctica de conocimientos de ingeniería para estudiantes de la UFPSO.</li>
            </ul>
          </SectionCard>

          <SectionCard icon={<Users className="h-8 w-8" />} title="Conclusión del Proyecto" delay={0.4}>
            <p>
              El desarrollo de una plataforma como Gocarg para la reserva de transporte de carga en la ciudad de Ocaña es una solución innovadora y necesaria para abordar una problemática tangible en la región. Este proyecto no solo mejora la accesibilidad y eficiencia de este servicio, sino que también fomenta la confianza en las transacciones y fortalece la economía local al conectar usuarios y propietarios de vehículos de forma directa y transparente.
            </p>
            <p>
              Además, este proyecto permite a los estudiantes de Ingeniería de Sistemas de la UFPSO aplicar sus conocimientos técnicos en un entorno real, fortaleciendo sus habilidades en desarrollo web y móvil, y gestión de proyectos. Con una planeación adecuada y un enfoque en la calidad del servicio, esta aplicación tiene el potencial de generar un impacto duradero y significativo en la comunidad de Ocaña, promoviendo el progreso tecnológico y social de la región.
            </p>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoPage;

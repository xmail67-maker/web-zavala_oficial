import { motion } from 'framer-motion';
import { Cog, Building2, Car, Home, Factory, Anchor, Train, Paintbrush } from 'lucide-react';

const applications = [
  {
    icon: Cog,
    title: 'Motores',
    description: 'Limpieza de componentes mecánicos, eliminación de grasa y carbonización.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop',
    span: 'md:col-span-2'
  },
  {
    icon: Building2,
    title: 'Estructuras Metálicas',
    description: 'Remoción de óxido y preparación de superficies para pintura.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    span: ''
  },
  {
    icon: Car,
    title: 'Restauración de Autos',
    description: 'Eliminación de pintura vieja y óxido sin dañar la carrocería original.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop',
    span: ''
  },
  {
    icon: Home,
    title: 'Fachadas',
    description: 'Limpieza de graffitis, mugre y contaminación en edificios.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    span: 'md:col-span-2'
  },
  {
    icon: Factory,
    title: 'Maquinaria Industrial',
    description: 'Mantenimiento de equipos sin desmontaje ni paros prolongados.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=600&auto=format&fit=crop',
    span: ''
  },
  {
    icon: Anchor,
    title: 'Industria Naval',
    description: 'Preparación de cascos y estructuras marinas resistentes a la corrosión.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop',
    span: ''
  },
  {
    icon: Train,
    title: 'Ferrocarriles',
    description: 'Limpieza de rieles, vagones y componentes ferroviarios.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=600&auto=format&fit=crop',
    span: ''
  },
  {
    icon: Paintbrush,
    title: 'Esculturas y Arte',
    description: 'Restauración delicada de piezas históricas y monumentos.',
    image: 'https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=600&auto=format&fit=crop',
    span: ''
  }
];

export const ApplicationsSection = () => {
  return (
    <section id="aplicaciones" className="py-20 md:py-32 bg-[#0A0A0A] grid-pattern" data-testid="applications-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm uppercase tracking-widest font-medium">
            Sectores de Aplicación
          </span>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mt-4 mb-6">
            Aplicaciones <span className="text-[#F5A623]">Clave</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nuestra tecnología láser se adapta a múltiples industrias y necesidades.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`relative group overflow-hidden bg-[#1A1A1A] border border-white/5 hover:border-[#F5A623]/50 transition-all bento-card ${app.span}`}
              data-testid={`application-card-${index}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[200px]">
                <div className="w-10 h-10 bg-[#F5A623]/10 flex items-center justify-center mb-3 group-hover:bg-[#F5A623]/20 transition-colors">
                  <app.icon className="w-5 h-5 text-[#F5A623]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Barlow_Condensed'] uppercase tracking-wide">
                  {app.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5A623]/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            ¿Tu industria no está en la lista?{' '}
            <a href="#contacto" className="text-[#F5A623] hover:underline">
              Contáctanos
            </a>{' '}
            para una evaluación personalizada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

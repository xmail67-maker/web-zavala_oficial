import { motion } from 'framer-motion';
import { Check, X, Zap, Droplets, Timer, ShieldCheck, Recycle, Wrench } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Daño al material base',
    laser: { value: 'Ninguno', positive: true },
    sandblasting: { value: 'Alto', positive: false },
    chemicals: { value: 'Medio', positive: false }
  },
  {
    feature: 'Residuos generados',
    laser: { value: 'Mínimos', positive: true },
    sandblasting: { value: 'Muchos', positive: false },
    chemicals: { value: 'Tóxicos', positive: false }
  },
  {
    feature: 'Impacto ambiental',
    laser: { value: 'Ecológico', positive: true },
    sandblasting: { value: 'Polución', positive: false },
    chemicals: { value: 'Contaminante', positive: false }
  },
  {
    feature: 'Tiempo de ejecución',
    laser: { value: 'Ultra rápido', positive: true },
    sandblasting: { value: 'Lento', positive: false },
    chemicals: { value: 'Variable', positive: false }
  },
  {
    feature: 'Precisión',
    laser: { value: 'Quirúrgica', positive: true },
    sandblasting: { value: 'Baja', positive: false },
    chemicals: { value: 'Media', positive: false }
  },
  {
    feature: 'Seguridad laboral',
    laser: { value: 'Máxima', positive: true },
    sandblasting: { value: 'Riesgos', positive: false },
    chemicals: { value: 'Riesgos', positive: false }
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Sin Abrasivos',
    description: 'El láser elimina contaminantes sin partículas ni arena que dañen la superficie.'
  },
  {
    icon: Droplets,
    title: 'Sin Químicos',
    description: 'Proceso 100% seco. No se utilizan solventes, ácidos ni sustancias tóxicas.'
  },
  {
    icon: Timer,
    title: '70% Más Rápido',
    description: 'Reducción drástica en tiempos de trabajo comparado con métodos tradicionales.'
  },
  {
    icon: ShieldCheck,
    title: 'Cero Daños',
    description: 'El material base permanece intacto. Solo se remueve lo que sobra.'
  },
  {
    icon: Recycle,
    title: '100% Ecológico',
    description: 'Sin contaminación ambiental. Proceso limpio y sustentable.'
  },
  {
    icon: Wrench,
    title: 'Versatilidad',
    description: 'Aplicable en metales, piedra, hormigón, madera y múltiples superficies.'
  }
];

export const WhyLaserSection = () => {
  return (
    <section id="por-que-laser" className="py-20 md:py-32 bg-[#111111]" data-testid="why-laser-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm uppercase tracking-widest font-medium">
            Comparativa de Tecnologías
          </span>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mt-4 mb-6">
            ¿Por Qué Elegir <span className="text-[#F5A623]">Láser</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Descubre por qué la limpieza láser supera ampliamente a los métodos tradicionales.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 overflow-x-auto"
        >
          <table className="w-full min-w-[600px]" data-testid="comparison-table">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-gray-400 font-medium uppercase text-sm tracking-wider">
                  Característica
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-[#F5A623] px-4 py-2 text-black font-bold uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    Láser
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-gray-400 font-medium uppercase text-sm tracking-wider">
                  Sandblasting
                </th>
                <th className="py-4 px-4 text-center text-gray-400 font-medium uppercase text-sm tracking-wider">
                  Químicos
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-2 text-[#F5A623] font-semibold">
                      <Check className="w-5 h-5" />
                      {row.laser.value}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-2 text-red-400">
                      <X className="w-5 h-5" />
                      {row.sandblasting.value}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-2 text-red-400">
                      <X className="w-5 h-5" />
                      {row.chemicals.value}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center font-['Barlow_Condensed'] uppercase tracking-wide">
            Beneficios Clave
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A1A] border border-white/5 p-6 hover:border-[#F5A623]/50 transition-all group bento-card"
                data-testid={`benefit-card-${index}`}
              >
                <div className="w-12 h-12 bg-[#F5A623]/10 flex items-center justify-center mb-4 group-hover:bg-[#F5A623]/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#F5A623]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-['Barlow_Condensed'] uppercase tracking-wide">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

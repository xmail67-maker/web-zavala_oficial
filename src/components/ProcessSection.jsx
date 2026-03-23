import { motion } from 'framer-motion';
import { Search, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico de Superficie',
    description: 'Evaluamos el tipo de material, nivel de contaminación y área a tratar para determinar los parámetros óptimos del láser.',
    details: ['Inspección visual', 'Análisis de material', 'Cotización precisa']
  },
  {
    number: '02',
    icon: Zap,
    title: 'Limpieza Láser Quirúrgica',
    description: 'Aplicamos pulsos de luz de alta intensidad que vaporizan óxido, pintura y contaminantes sin tocar el material base.',
    details: ['Precisión milimétrica', 'Sin abrasivos', 'Sin químicos']
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Entrega con Protección',
    description: 'Verificamos la calidad del trabajo y aplicamos tratamiento protector opcional para prolongar la vida útil de la superficie.',
    details: ['Control de calidad', 'Protección anticorrosiva', 'Garantía de trabajo']
  }
];

export const ProcessSection = () => {
  return (
    <section id="proceso" className="py-20 md:py-32 bg-[#111111]" data-testid="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm uppercase tracking-widest font-medium">
            Metodología de Trabajo
          </span>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mt-4 mb-6">
            Proceso en <span className="text-[#F5A623]">3 Pasos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un flujo de trabajo optimizado para resultados impecables en el menor tiempo posible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
                data-testid={`process-step-${index}`}
              >
                {/* Card */}
                <div className="bg-[#1A1A1A] border border-white/5 p-8 hover:border-[#F5A623]/30 transition-all relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#F5A623] flex items-center justify-center">
                    <span className="font-['Barlow_Condensed'] text-2xl font-bold text-black">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#F5A623]/10 flex items-center justify-center mb-6 ml-8">
                    <step.icon className="w-7 h-7 text-[#F5A623]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-['Barlow_Condensed'] uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 z-20 w-12 h-12 bg-[#0A0A0A] border border-white/10 rounded-full items-center justify-center -translate-y-1/2">
                    <ArrowRight className="w-5 h-5 text-[#F5A623]" />
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-10 h-10 bg-[#0A0A0A] border border-white/10 rounded-full flex items-center justify-center rotate-90">
                      <ArrowRight className="w-5 h-5 text-[#F5A623]" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            ¿Listo para transformar tus superficies? Solicita una demostración gratuita.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-black hover:bg-[#FFBF47] font-bold uppercase tracking-wider px-8 py-4 transition-all shadow-[0_0_20px_rgba(245,166,35,0.3)]"
            data-testid="process-cta"
          >
            Reservar Cupo / Solicitar Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

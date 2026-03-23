import { motion } from 'framer-motion';
import { Zap, ArrowRight, ShieldCheck, Timer } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Zap, text: 'Sin químicos' },
    { icon: ShieldCheck, text: '100% Ecológico' },
    { icon: Timer, text: 'Ultra rápido' },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center hero-bg grid-pattern noise-overlay pt-40 md:pt-44"
      data-testid="hero-section"
    >
      {/* Laser beam decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#F5A623] to-transparent laser-beam" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#F5A623]/10 border border-[#F5A623]/30 px-4 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-[#F5A623]" />
            <span className="text-sm font-medium uppercase tracking-widest text-[#F5A623]">
              Tecnología de Pulso Láser
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Barlow_Condensed'] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-white mb-6"
            data-testid="hero-title"
          >
            Limpieza Industrial
            <span className="block text-[#F5A623] gold-text-glow">Del Futuro</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            data-testid="hero-subtitle"
          >
            Eliminamos óxido, pintura y grasa sin dañar el material base. 
            <span className="text-white font-medium"> Ahorra hasta un 70% en tiempo y costos</span> con nuestra 
            tecnología láser de alta precisión.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400">
                <feature.icon className="w-5 h-5 text-[#F5A623]" />
                <span className="text-sm uppercase tracking-wide">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={scrollToContact}
              className="bg-[#F5A623] text-black hover:bg-[#FFBF47] font-bold uppercase tracking-wider px-10 py-6 text-lg rounded-none shadow-[0_0_20px_rgba(245,166,35,0.4)] transition-all hover:shadow-[0_0_30px_rgba(245,166,35,0.6)] group"
              data-testid="hero-cta-button"
            >
              Reservar Cupo / Solicitar Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#galeria-videos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-[#F5A623] font-bold uppercase tracking-wider px-10 py-6 text-lg rounded-none transition-all"
              data-testid="hero-secondary-button"
            >
              Ver Resultados
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[#F5A623] rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

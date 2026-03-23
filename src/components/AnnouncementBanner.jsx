import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, CalendarClock, MapPin } from 'lucide-react';

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[70] bg-gradient-to-r from-[#F5A623] via-[#FFBF47] to-[#F5A623] overflow-hidden shadow-lg"
        data-testid="announcement-banner"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(93,58,26,0.2) 10px,
              rgba(93,58,26,0.2) 20px
            )`
          }} />
        </div>

        {/* Laser beam animation */}
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center md:text-left">
            {/* Icon */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 bg-[#5D3A1A]/20 rounded-full">
              <Zap className="w-5 h-5 text-[#5D3A1A]" />
            </div>

            {/* Main text */}
            <div className="flex-1">
              <p className="text-[#5D3A1A] font-bold text-sm md:text-base uppercase tracking-wide">
                <span className="inline-flex items-center gap-2">
                  <Zap className="w-4 h-4 md:hidden" />
                  ¡Tecnología Láser de Vanguardia llega a Perú!
                </span>
              </p>
              <p className="text-[#5D3A1A]/80 text-xs md:text-sm mt-1">
                <span className="inline-flex items-center gap-1 mr-3">
                  <CalendarClock className="w-3 h-3" />
                  Operaciones inician en Mayo 2026
                </span>
                <span className="hidden sm:inline text-[#5D3A1A]/60">•</span>
                <span className="inline-flex items-center gap-1 sm:ml-3">
                  <MapPin className="w-3 h-3" />
                  Recibiendo solicitudes para demostraciones en Lima
                </span>
              </p>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[#5D3A1A] text-[#F5A623] text-xs font-bold uppercase tracking-wider px-4 py-2 whitespace-nowrap rounded-sm">
                Cupos Limitados Q1
              </span>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 md:relative md:top-auto md:right-auto p-1.5 hover:bg-[#5D3A1A]/10 rounded-full transition-colors"
              aria-label="Cerrar anuncio"
              data-testid="close-announcement"
            >
              <X className="w-4 h-4 text-[#5D3A1A]/70" />
            </button>
          </div>
        </div>

        {/* Bottom laser beam */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ComparisonSlider } from './ComparisonSlider';
import { Play, ImageIcon, Video, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

// Configuración de medios - EDITAR AQUÍ PARA AGREGAR TUS IMÁGENES/VIDEOS
const MEDIA_CONFIG = {
  comparisons: [
    {
      id: 1,
      title: 'Eliminación de Óxido en Metal',
      beforeImage: '/images/metal-oxidado.png',
      afterImage: '/images/metal-limpio.png',
      beforeLabel: 'SITUACIÓN INICIAL',
      afterLabel: 'RESULTADO LÁSER PRO'
    },
    {
      id: 2,
      title: 'Remoción de Pintura',
      beforeImage: '', // Pegar URL de imagen ANTES
      afterImage: '',  // Pegar URL de imagen DESPUÉS
      beforeLabel: 'SITUACIÓN INICIAL',
      afterLabel: 'RESULTADO LÁSER PRO'
    },
    {
      id: 3,
      title: 'Limpieza de Motor',
      beforeImage: '', // Pegar URL de imagen ANTES
      afterImage: '',  // Pegar URL de imagen DESPUÉS
      beforeLabel: 'SITUACIÓN INICIAL',
      afterLabel: 'RESULTADO LÁSER PRO'
    }
  ],
  videos: [
    {
      id: 1,
      title: 'Proceso de Limpieza Láser',
      url: '', // Pegar URL de video (YouTube embed o video directo)
      thumbnail: '' // Pegar URL de thumbnail
    },
    {
      id: 2,
      title: 'Resultados en Metal',
      url: '', // Pegar URL de video
      thumbnail: '' // Pegar URL de thumbnail
    }
  ]
};

const VideoPlaceholder = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (video.url && isPlaying) {
    // Si hay URL de video, mostrar el video
    const isYouTube = video.url.includes('youtube') || video.url.includes('youtu.be');
    
    if (isYouTube) {
      return (
        <div className="video-container rounded-lg overflow-hidden">
          <iframe
            src={video.url.replace('watch?v=', 'embed/')}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }
    
    return (
      <div className="video-container rounded-lg overflow-hidden">
        <video
          src={video.url}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div 
      className="aspect-video placeholder-media rounded-lg cursor-pointer group"
      onClick={() => video.url && setIsPlaying(true)}
    >
      {video.thumbnail ? (
        <div className="relative w-full h-full">
          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 bg-[#F7B500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 relative z-10">
          <div className="w-16 h-16 bg-[#F7B500]/20 rounded-full flex items-center justify-center border-2 border-dashed border-[#F7B500]/40">
            <Video className="w-8 h-8 text-[#F7B500]/50" />
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-sm uppercase tracking-wider">{video.title || 'Video'}</p>
            <p className="text-slate-600 text-xs mt-1">Pegar URL del video</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const BeforeAfterSection = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const comparisons = MEDIA_CONFIG.comparisons;
  const videos = MEDIA_CONFIG.videos;

  const nextComparison = () => {
    setActiveComparison((prev) => (prev + 1) % comparisons.length);
  };

  const prevComparison = () => {
    setActiveComparison((prev) => (prev - 1 + comparisons.length) % comparisons.length);
  };

  return (
    <section id="antes-despues" className="py-20 md:py-32 bg-[#0A0A0A]" data-testid="before-after-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm uppercase tracking-widest font-medium">
            Resultados Comprobados
          </span>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mt-4 mb-6">
            El Poder del <span className="text-[#F5A623]">Láser</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Observa la transformación: de superficies deterioradas a acabados impecables sin dañar el material base.
          </p>
        </motion.div>

        {/* Main Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative">
            <ComparisonSlider
              beforeImage={comparisons[activeComparison].beforeImage}
              afterImage={comparisons[activeComparison].afterImage}
              beforeLabel={comparisons[activeComparison].beforeLabel}
              afterLabel={comparisons[activeComparison].afterLabel}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevComparison}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-[#F5A623] text-white hover:text-black rounded-full flex items-center justify-center transition-colors z-30"
              data-testid="prev-comparison"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextComparison}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-[#F5A623] text-white hover:text-black rounded-full flex items-center justify-center transition-colors z-30"
              data-testid="next-comparison"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Comparison Title & Dots */}
          <div className="flex flex-col items-center mt-6 gap-4">
            <h3 className="text-xl font-semibold text-white">
              {comparisons[activeComparison].title}
            </h3>
            <div className="flex gap-2">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveComparison(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeComparison ? 'bg-[#F5A623]' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  data-testid={`comparison-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center font-['Barlow_Condensed'] uppercase tracking-wide">
            Videos de Demostración
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <VideoPlaceholder key={video.id} video={video} />
            ))}
          </div>
        </motion.div>

        {/* Info note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            <span className="text-[#F5A623]">*</span> Las imágenes y videos son editables. Contacta al desarrollador para actualizar el contenido.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// Videos configurados - URLs locales servidas desde public/videos
const VIDEOS_CONFIG = {
  vertical: [
    {
      id: 1,
      title: 'Eliminación de Óxido Instantánea',
      description: 'Láser portátil removiendo óxido en segundos',
      url: '/videos/laser-oxido.mp4'
    },
    {
      id: 4,
      title: 'Limpieza de Paredes y Grafitis',
      description: 'Eliminación de grafitis, mugre y todo tipo de suciedad',
      url: '/videos/laser-paredes.mp4'
    }
  ],
  square: [
    {
      id: 2,
      title: 'Limpieza de Estructuras Metálicas',
      description: 'Remoción de corrosión en vigas y estructuras',
      url: '/videos/laser-estructuras.mp4'
    },
    {
      id: 3,
      title: 'Restaurador de Monumentos',
      description: 'Limpieza delicada de piezas históricas y monumentos',
      url: '/videos/laser-monumentos.mp4'
    }
  ]
};

const VideoCard = ({ video, isVertical = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      // Try to autoplay when video is ready
      videoElement.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);

    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative group overflow-hidden bg-[#111111] border border-white/10 hover:border-[#F5A623]/50 transition-all cursor-pointer ${
        isVertical ? 'aspect-[9/16]' : 'aspect-square'
      }`}
      onClick={togglePlay}
      data-testid={`video-card-${video.id}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video.url}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      />

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#111111]">
          <div className="w-12 h-12 border-4 border-[#F5A623]/30 border-t-[#F5A623] rounded-full animate-spin" />
        </div>
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Play/Pause indicator */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-[#F5A623] rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-black ml-1" />
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-[#F5A623] text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
          data-testid={`mute-btn-${video.id}`}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Title and description */}
        <div className="mt-8">
          <h4 className="text-white font-bold text-lg font-['Barlow_Condensed'] uppercase tracking-wide">
            {video.title}
          </h4>
          <p className="text-gray-400 text-sm mt-1">
            {video.description}
          </p>
        </div>
      </div>

      {/* Laser glow effect on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent" />
      </div>
    </motion.div>
  );
};

export const VideoGallerySection = () => {
  return (
    <section id="galeria-videos" className="py-20 md:py-32 bg-[#050505] relative overflow-hidden" data-testid="video-gallery-section">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5A623]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm uppercase tracking-widest font-medium">
            El Láser en Acción
          </span>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mt-4 mb-6">
            Galería de <span className="text-[#F5A623]">Videos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Observa la potencia y precisión de nuestra tecnología láser en diferentes aplicaciones industriales.
          </p>
        </motion.div>

        {/* Video Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Vertical Videos - Left Column */}
          <div className="lg:col-span-4 space-y-6">
            {VIDEOS_CONFIG.vertical.map((video) => (
              <VideoCard key={video.id} video={video} isVertical={true} />
            ))}
          </div>

          {/* Square Videos - Right Columns */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {VIDEOS_CONFIG.square.map((video) => (
                <VideoCard key={video.id} video={video} isVertical={false} />
              ))}
            </div>

            {/* Feature highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 bg-gradient-to-r from-[#F5A623]/10 to-transparent border border-[#F5A623]/20 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-12 h-12 bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl font-['Barlow_Condensed'] uppercase tracking-wide">
                    Resultados en Tiempo Real
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Los videos muestran el proceso real sin edición ni aceleración. 
                    <span className="text-[#F5A623] font-medium"> La limpieza láser es así de rápida.</span>
                  </p>
                </div>
              </div>
            </motion.div>
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
            ¿Quieres ver el láser en acción sobre tu superficie?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#F5A623] text-black hover:bg-[#FFBF47] font-bold uppercase tracking-wider px-8 py-4 transition-all shadow-[0_0_20px_rgba(245,166,35,0.3)]"
            data-testid="video-gallery-cta"
          >
            Reservar Cupo / Solicitar Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

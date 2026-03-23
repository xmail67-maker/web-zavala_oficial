import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, GripVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export const ComparisonSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'SITUACIÓN INICIAL', 
  afterLabel = 'RESULTADO LÁSER PRO',
  beforePlaceholder = 'Imagen ANTES',
  afterPlaceholder = 'Imagen DESPUÉS'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const PlaceholderBox = ({ text }) => (
    <div className="w-full h-full placeholder-media flex-col gap-4">
      <ImageIcon className="w-12 h-12 text-[#F5A623]/50 relative z-10" />
      <span className="text-gray-500 text-sm uppercase tracking-wider relative z-10">{text}</span>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square md:aspect-[16/10] overflow-hidden cursor-ew-resize select-none bg-[#111111] rounded-lg shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      data-testid="comparison-slider"
    >
      {/* After Image (Bottom layer - RESULTADO) */}
      <div className="absolute inset-0">
        {afterImage ? (
          <img 
            src={afterImage} 
            alt={afterLabel}
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderBox text={afterPlaceholder} />
        )}
      </div>

      {/* Before Image (Top layer with clip - SITUACIÓN INICIAL) */}
      <div 
        className="absolute inset-0 transition-[clip-path] duration-75 ease-out"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {beforeImage ? (
          <img 
            src={beforeImage} 
            alt={beforeLabel}
            className="w-full h-full object-cover"
          />
        ) : (
          <PlaceholderBox text={beforePlaceholder} />
        )}
      </div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-[#F5A623] cursor-ew-resize z-20 transition-[left] duration-75 ease-out"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        data-testid="slider-handle"
      >
        {/* Handle Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#F5A623] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,166,35,0.6)] border-4 border-white/20">
          <div className="flex items-center gap-0.5">
            <ChevronLeft className="w-5 h-5 text-black" />
            <ChevronRight className="w-5 h-5 text-black" />
          </div>
        </div>
        
        {/* Vertical glow line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5A623] to-transparent opacity-60" />
      </motion.div>

      {/* Labels - Updated with new text */}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 z-10 border-l-4 border-red-500">
        <span className="text-xs font-bold uppercase tracking-widest text-red-400">{beforeLabel}</span>
      </div>
      <div className="absolute top-4 right-4 bg-[#F5A623] px-4 py-2 z-10 shadow-[0_0_20px_rgba(245,166,35,0.4)]">
        <span className="text-xs font-bold uppercase tracking-widest text-black">{afterLabel}</span>
      </div>

      {/* Instruction hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full z-10">
        <span className="text-xs text-white/70 uppercase tracking-wider">Desliza para comparar</span>
      </div>
    </div>
  );
};

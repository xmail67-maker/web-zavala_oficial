import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#galeria-videos', label: 'Videos' },
    { href: '#por-que-laser', label: 'Ventajas' },
    { href: '#aplicaciones', label: 'Aplicaciones' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled 
          ? 'top-0 bg-[#0A0A0A]/98 nav-blur border-b border-[#F5A623]/10 shadow-lg' 
          : 'top-[72px] md:top-[76px] bg-[#0A0A0A]/90 nav-blur'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-4" data-testid="logo-link">
            <img 
              src="/images/logo-chz.png" 
              alt="CHZ Logo" 
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
              <p className="company-name text-white text-lg tracking-wider">CONSTRUCCIÓN HZ SAC</p>
              <p className="text-[#F5A623] text-xs tracking-[0.2em] uppercase font-medium">Limpieza con Rayos Láser</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-[#F5A623] transition-colors animated-underline"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:920111060" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">920 111 060</span>
            </a>
            <Button
              onClick={(e) => scrollToSection(e, '#contacto')}
              className="bg-[#F5A623] text-black hover:bg-[#FFBF47] font-bold uppercase tracking-wider px-6 py-2 rounded-none shadow-[0_0_15px_rgba(245,166,35,0.3)] transition-all"
              data-testid="nav-cta-button"
            >
              Reservar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0A]/98 nav-blur border-t border-white/5"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-lg font-medium uppercase tracking-wider text-gray-300 hover:text-[#F5A623] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="tel:920111060" className="flex items-center gap-2 text-[#F5A623] mb-4">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">920 111 060</span>
                </a>
                <Button
                  onClick={(e) => scrollToSection(e, '#contacto')}
                  className="w-full bg-[#F5A623] text-black hover:bg-[#FFBF47] font-bold uppercase tracking-wider py-3 rounded-none"
                >
                  Reservar Cupo / Solicitar Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

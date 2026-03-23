import { motion } from 'framer-motion';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#galeria-videos', label: 'Videos' },
    { href: '#por-que-laser', label: 'Ventajas' },
    { href: '#aplicaciones', label: 'Aplicaciones' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const services = [
    'Eliminación de Óxido',
    'Remoción de Pintura',
    'Limpieza de Motores',
    'Restauración de Fachadas',
    'Preparación de Superficies',
    'Limpieza de Esculturas'
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/images/logo-chz.png" 
                alt="CHZ Logo" 
                className="h-16 w-auto"
              />
              <div>
                <p className="company-name text-white font-bold text-lg">CONSTRUCCIÓN HZ SAC</p>
                <p className="text-[#F5A623] text-xs uppercase tracking-[0.15em]">Limpieza Láser</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Tecnología de pulso láser para limpieza industrial de alta precisión. 
              Sin químicos, sin abrasivos, 100% ecológico.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="tel:920111060"
                className="flex items-center gap-2 text-gray-400 hover:text-[#F5A623] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                920 111 060
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-['Barlow_Condensed']">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-gray-500 hover:text-[#F5A623] transition-colors text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-['Barlow_Condensed']">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-500 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 font-['Barlow_Condensed']">
              Contacto
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:920111060"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">Teléfono</p>
                  <p className="text-white font-medium">920 111 060</p>
                </div>
              </a>
              <a 
                href="mailto:construccionhz@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#F5A623]" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium text-sm">construccionhz@gmail.com</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} CONSTRUCCIÓN HZ SAC. Todos los derechos reservados.
          </p>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-[#F5A623] transition-colors group"
            data-testid="back-to-top"
          >
            <span className="text-sm uppercase tracking-wider">Volver arriba</span>
            <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:border-[#F5A623] group-hover:bg-[#F5A623]/10 transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

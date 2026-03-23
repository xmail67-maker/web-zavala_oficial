import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const WHATSAPP_NUMBER = '51920111060';
const EMAIL = 'construccionhz@gmail.com';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    empresa: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    const message = `*Nueva Solicitud de Demo - Lista de Espera*%0A%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Email:* ${formData.email}%0A*Empresa:* ${formData.empresa}%0A*Mensaje:* ${formData.mensaje}`;
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    
    setIsSubmitted(true);
    
    // Reset después de unos segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        telefono: '',
        email: '',
        empresa: '',
        mensaje: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono / WhatsApp',
      value: '920 111 060',
      href: 'tel:920111060'
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      value: EMAIL,
      href: `mailto:${EMAIL}`
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      value: 'Lun - Sáb: 8:00 - 18:00',
      href: null
    }
  ];

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#0A0A0A] relative overflow-hidden" data-testid="contact-section">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5A623]/20 to-transparent" />
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
            Lista de Espera
          </span>
          <h2 className="font-['Barlow_Condensed'] text-4xl md:text-6xl font-bold uppercase text-white mt-4 mb-6">
            Reserva tu <span className="text-[#F5A623]">Demo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Únete a la lista de espera para demostraciones industriales en Lima. Cupos limitados para el primer trimestre de operaciones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-[#111111] border border-white/5 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-6 font-['Barlow_Condensed'] uppercase tracking-wide gold-border-left pl-4">
                Reserva tu Cupo para Demo
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h4>
                  <p className="text-gray-400">
                    Te contactaremos a la brevedad por WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-gray-300 uppercase text-xs tracking-wider">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className="bg-black/30 border-white/10 focus:border-[#F5A623] text-white placeholder:text-gray-600 rounded-none h-12"
                        data-testid="input-nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-gray-300 uppercase text-xs tracking-wider">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="999 999 999"
                        className="bg-black/30 border-white/10 focus:border-[#F5A623] text-white placeholder:text-gray-600 rounded-none h-12"
                        data-testid="input-telefono"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 uppercase text-xs tracking-wider">
                        Correo Electrónico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className="bg-black/30 border-white/10 focus:border-[#F5A623] text-white placeholder:text-gray-600 rounded-none h-12"
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="text-gray-300 uppercase text-xs tracking-wider">
                        Empresa
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className="bg-black/30 border-white/10 focus:border-[#F5A623] text-white placeholder:text-gray-600 rounded-none h-12"
                        data-testid="input-empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="text-gray-300 uppercase text-xs tracking-wider">
                      Describe tu Proyecto *
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos qué tipo de superficie necesitas limpiar, dimensiones aproximadas, ubicación del trabajo..."
                      className="bg-black/30 border-white/10 focus:border-[#F5A623] text-white placeholder:text-gray-600 rounded-none resize-none"
                      data-testid="input-mensaje"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F5A623] text-black hover:bg-[#FFBF47] font-bold uppercase tracking-wider py-6 text-lg rounded-none shadow-[0_0_20px_rgba(245,166,35,0.3)] transition-all hover:shadow-[0_0_30px_rgba(245,166,35,0.5)]"
                    data-testid="submit-button"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Reservar Cupo / Solicitar Demo
                  </Button>

                  <p className="text-gray-500 text-xs text-center">
                    Al enviar, serás redirigido a WhatsApp para completar tu solicitud.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Company Card */}
            <div className="bg-[#111111] border border-white/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/images/logo-chz.png" 
                  alt="CHZ Logo" 
                  className="h-16 w-auto"
                />
                <div>
                  <h4 className="company-name text-white font-bold text-lg">CONSTRUCCIÓN HZ SAC</h4>
                  <p className="text-[#F5A623] text-sm uppercase tracking-wider">Limpieza con Rayos Láser</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F5A623]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#F5A623]" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{info.title}</p>
                      {info.href ? (
                        <a href={info.href} className="text-white font-medium hover:text-[#F5A623] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] p-6 text-center hover:bg-[#20BD5A] transition-colors group"
              data-testid="whatsapp-quick-link"
            >
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-white font-bold text-lg uppercase tracking-wide">
                  Escríbenos Ahora
                </span>
              </div>
              <p className="text-white/80 text-sm mt-2">Respuesta inmediata</p>
            </a>

            {/* Trust badge */}
            <div className="bg-[#1A1A1A] border border-[#F5A623]/30 p-6 text-center">
              <p className="text-[#F5A623] font-bold uppercase tracking-wider mb-2">
                Lanzamiento Mayo 2026
              </p>
              <p className="text-gray-400 text-sm">
                Sé de los primeros en experimentar la tecnología láser de limpieza industrial en Perú. Demo gratuita para empresas seleccionadas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

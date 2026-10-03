'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-dark)',
        color: '#FFFFFF',
        paddingTop: '70px',
        paddingBottom: '36px',
        borderTop: '3px solid var(--color-gold)',
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '50px',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '50%',
                  padding: '4px',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-gold)',
                }}
              >
                <Image
                  src="/Logo_Inversiones_Campestres_MPR_SVG.svg"
                  alt="Inversiones Campestres MPR"
                  width={40}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                  INVERSIONES CAMPESTRES
                </div>
                <div style={{ fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.18em', color: 'var(--color-gold)' }}>
                  MPR
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.9rem',
                color: '#D1D5DB',
                lineHeight: 1.6,
                marginBottom: '18px',
              }}
            >
              Construyendo sueños, conectando familias con la naturaleza bajo los más altos
              estándares de seguridad y confianza en Tolima, Colombia.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                backgroundColor: 'rgba(32, 74, 49, 0.4)',
                border: '1px solid var(--color-forest)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                color: '#FFFFFF',
              }}
            >
              <ShieldCheck size={16} color="var(--color-gold)" />
              <span>Proyectos 100% Legales y Escriturados</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: 'var(--color-gold)',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '18px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Navegación Rápida
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href="#inicio"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  Sobre Nosotros & Misión
                </a>
              </li>
              <li>
                <a
                  href="#legalidad"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  Legalidad y Transparencia
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  Nuestros Proyectos Campestres
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  Canales de Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Projects Quick List */}
          <div>
            <h4
              style={{
                color: 'var(--color-gold)',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '18px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Proyectos Destacados
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a
                  href="#proyectos"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  🌲 El Jagual Las Delicias (Rovira, Tolima)
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  🏡 La Fortuna de Aparco (Ibagué)
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  style={{ color: '#E5E7EB', fontSize: '0.9rem', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E5E7EB')}
                >
                  ✨ Villa Miriam de Aparco / Villa Gloria (Ibagué)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4
              style={{
                color: 'var(--color-gold)',
                fontSize: '1.05rem',
                fontWeight: 700,
                marginBottom: '18px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Atención y Soporte
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB' }}>
                <Phone size={17} color="var(--color-gold)" />
                <span>+57 310 363 9993</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB' }}>
                <Phone size={17} color="var(--color-gold)" />
                <span>+57 317 578 2791</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB' }}>
                <Mail size={17} color="var(--color-gold)" />
                <span style={{ wordBreak: 'break-all' }}>mpr.inversiones.campestres@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB' }}>
                <MapPin size={17} color="var(--color-gold)" />
                <span>Tolima, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: '#9CA3AF',
          }}
        >
          <div>
            © {new Date().getFullYear()} Inversiones Campestres MPR. Todos los derechos reservados.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-gold)',
              fontSize: '0.82rem',
              fontWeight: 700,
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(194, 149, 90, 0.4)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-gold)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--color-gold)';
            }}
          >
            <span>Subir</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

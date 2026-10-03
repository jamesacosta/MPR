'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? '#FFFFFF' : 'rgba(255, 255, 255, 0.96)',
        boxShadow: isScrolled
          ? '0 4px 20px rgba(43, 45, 47, 0.08)'
          : '0 2px 10px rgba(43, 45, 47, 0.04)',
        borderBottom: '1px solid rgba(194, 149, 90, 0.25)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isScrolled ? '72px' : '82px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Brand Logo & Name */}
        <a
          href="#inicio"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '52px',
              height: '52px',
              flexShrink: 0,
            }}
          >
            <Image
              src="/Logo_Inversiones_Campestres_MPR_SVG.svg"
              alt="Logo Inversiones Campestres MPR"
              width={52}
              height={52}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div>
            <span
              style={{
                display: 'block',
                color: 'var(--color-forest)',
                fontWeight: 800,
                fontSize: '1.05rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              INVERSIONES CAMPESTRES
            </span>
            <span
              style={{
                display: 'block',
                color: 'var(--color-gold)',
                fontWeight: 800,
                fontSize: '0.85rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              MPR
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          <a
            href="#inicio"
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '0.94rem',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-forest)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark)')}
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '0.94rem',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-forest)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark)')}
          >
            Sobre Nosotros
          </a>
          <a
            href="#legalidad"
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '0.94rem',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-forest)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark)')}
          >
            Legalidad
          </a>
          <a
            href="#proyectos"
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '0.94rem',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-forest)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark)')}
          >
            Nuestros Proyectos
          </a>
          <a
            href="#contacto"
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '0.94rem',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-forest)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark)')}
          >
            Contacto
          </a>

          {/* Direct WhatsApp Action Button */}
          <a
            href="https://wa.me/573103639993?text=Quiero%20saber%20mas%20de%20MPR"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              padding: '10px 20px',
              fontSize: '0.88rem',
              gap: '8px',
            }}
          >
            <MessageCircle size={17} />
            <span>+57 310 363 9993</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú de navegación"
          style={{
            display: 'none',
            color: 'var(--color-forest)',
            padding: '8px',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid rgba(194, 149, 90, 0.2)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 12px 24px rgba(43, 45, 47, 0.1)',
          }}
        >
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--color-forest)',
              fontWeight: 700,
              fontSize: '1.05rem',
              padding: '8px 0',
              borderBottom: '1px solid #F4F4F4',
            }}
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '8px 0',
              borderBottom: '1px solid #F4F4F4',
            }}
          >
            Sobre Nosotros
          </a>
          <a
            href="#legalidad"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '8px 0',
              borderBottom: '1px solid #F4F4F4',
            }}
          >
            Legalidad y Transparencia
          </a>
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '8px 0',
              borderBottom: '1px solid #F4F4F4',
            }}
          >
            Nuestros Proyectos
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: 'var(--color-dark)',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '8px 0',
            }}
          >
            Contacto y Redes
          </a>

          <a
            href="https://wa.me/573103639993?text=Quiero%20saber%20mas%20de%20MPR"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '12px',
            }}
          >
            <MessageCircle size={18} />
            <span>Contactar WhatsApp</span>
          </a>
        </div>
      )}

      {/* Responsive media query styling */}
      <style jsx>{`
        @media (max-width: 960px) {
          :global(.desktop-nav) {
            display: none !important;
          }
          :global(.mobile-menu-btn) {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

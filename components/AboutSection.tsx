'use client';

import React from 'react';
import { Users, ShieldCheck, Compass, Eye, CheckCircle2, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      style={{
        padding: '90px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(194, 149, 90, 0.2)',
        borderBottom: '1px solid rgba(194, 149, 90, 0.2)',
      }}
    >
      <div className="container">
        {/* Section Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-title-tag">
            <Award size={15} color="var(--color-forest)" />
            <span>Nuestra Identidad & Principios</span>
          </div>
          <h2 className="section-heading">
            Seguridad, Confianza y Conexión con la Naturaleza
          </h2>
          <p className="section-subtitle">
            En Inversiones Campestres MPR acompañamos cada paso para que tu familia
            tenga la tranquilidad de adquirir un patrimonio campestre sólido y seguro.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* 1. Sobre Nosotros */}
          <div
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 26px',
              border: '1px solid rgba(43, 45, 47, 0.08)',
              transition: 'var(--transition)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 6px 14px rgba(32, 74, 49, 0.25)',
              }}
            >
              <Users size={26} />
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                color: 'var(--color-forest)',
                marginBottom: '12px',
                fontWeight: 800,
              }}
            >
              Sobre Nosotros
            </h3>
            <p
              style={{
                color: 'var(--color-dark)',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                opacity: 0.9,
              }}
            >
              Construyendo sueños, conectando familias con la naturaleza bajo los más altos
              estándares de seguridad y confianza.
            </p>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-gold)',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <CheckCircle2 size={16} />
              <span>Compromiso Familiar</span>
            </div>
          </div>

          {/* 2. Legalidad y Transparencia */}
          <div
            id="legalidad"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 26px',
              border: '2px solid var(--color-gold)',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                right: '24px',
                backgroundColor: 'var(--color-gold)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              Garantía Jurídica
            </div>

            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'rgba(194, 149, 90, 0.15)',
                color: 'var(--color-gold)',
                border: '1px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <ShieldCheck size={28} />
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                color: 'var(--color-forest)',
                marginBottom: '12px',
                fontWeight: 800,
              }}
            >
              Legalidad y Transparencia
            </h3>
            <p
              style={{
                color: 'var(--color-dark)',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                opacity: 0.9,
              }}
            >
              Garantizamos tu inversión. Operamos con total transparencia, contando con todos los
              permisos, licencias y documentación al día para cada uno de nuestros proyectos
              campestres.
            </p>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-forest)',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <CheckCircle2 size={16} />
              <span>Licencias y Permisos al Día</span>
            </div>
          </div>

          {/* 3. Misión */}
          <div
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 26px',
              border: '1px solid rgba(43, 45, 47, 0.08)',
              transition: 'var(--transition)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 6px 14px rgba(32, 74, 49, 0.25)',
              }}
            >
              <Compass size={26} />
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                color: 'var(--color-forest)',
                marginBottom: '12px',
                fontWeight: 800,
              }}
            >
              Misión
            </h3>
            <p
              style={{
                color: 'var(--color-dark)',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                opacity: 0.9,
              }}
            >
              Brindar soluciones inmobiliarias campestres accesibles y de alta calidad, facilitando
              a las familias la adquisición de terrenos para construir su patrimonio en armonía
              con el medio ambiente, con planes de financiamiento justos y escrituras directas.
            </p>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-gold)',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <CheckCircle2 size={16} />
              <span>Acceso y Financiación Justa</span>
            </div>
          </div>

          {/* 4. Visión */}
          <div
            style={{
              backgroundColor: '#F4F4F4',
              borderRadius: 'var(--radius-lg)',
              padding: '32px 26px',
              border: '1px solid rgba(43, 45, 47, 0.08)',
              transition: 'var(--transition)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-forest)',
                color: 'var(--color-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 6px 14px rgba(32, 74, 49, 0.25)',
              }}
            >
              <Eye size={26} />
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                color: 'var(--color-forest)',
                marginBottom: '12px',
                fontWeight: 800,
              }}
            >
              Visión
            </h3>
            <p
              style={{
                color: 'var(--color-dark)',
                fontSize: '0.98rem',
                lineHeight: 1.65,
                opacity: 0.9,
              }}
            >
              Ser la inmobiliaria líder a nivel regional en el desarrollo de proyectos agroturísticos
              y campestres, reconocidos por nuestra integridad, innovación en la urbanización rural
              y nuestro compromiso con la valorización del patrimonio de nuestros clientes.
            </p>
            <div
              style={{
                marginTop: 'auto',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-gold)',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <CheckCircle2 size={16} />
              <span>Liderazgo Regional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

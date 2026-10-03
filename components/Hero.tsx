'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Trees, FileCheck2, Coins, ArrowRight, Play, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative subtle background accents using strict palette */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(194, 149, 90, 0.1) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '-80px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(32, 74, 49, 0.08) 0%, rgba(255,255,255,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headlines & Value Proposition */}
          <div>
            <div className="section-title-tag">
              <ShieldCheck size={16} color="var(--color-forest)" />
              <span>Inversiones Campestres MPR</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.4vw, 3.2rem)',
                fontWeight: 800,
                color: 'var(--color-forest)',
                lineHeight: 1.18,
                marginBottom: '20px',
              }}
            >
              Construyendo sueños, conectando familias con la naturaleza.
            </h1>

            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--color-dark)',
                lineHeight: 1.68,
                marginBottom: '28px',
                opacity: 0.9,
              }}
            >
              Bajo los más altos estándares de <strong>seguridad y confianza</strong>.
              Garantizamos tu patrimonio con proyectos campestres legalmente constituidos,
              escrituras independientes y facilidades de pago directas.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '36px',
              }}
            >
              <a href="#proyectos" className="btn-primary">
                <span>Ver Proyectos Disponibles</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/573103639993?text=Quiero%20saber%20mas%20de%20MPR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle size={18} />
                <span>Hablar con un Asesor</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(43, 45, 47, 0.1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#FFFFFF',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(194, 149, 90, 0.3)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(32, 74, 49, 0.1)',
                    padding: '8px',
                    borderRadius: '8px',
                    color: 'var(--color-forest)',
                    display: 'flex',
                  }}
                >
                  <FileCheck2 size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    Escrituras Directas
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-dark)', opacity: 0.8 }}>
                    100% Legalidad y permisería
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#FFFFFF',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(194, 149, 90, 0.3)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(194, 149, 90, 0.12)',
                    padding: '8px',
                    borderRadius: '8px',
                    color: 'var(--color-gold)',
                    display: 'flex',
                  }}
                >
                  <Coins size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest)' }}>
                    Sin Intereses
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-dark)', opacity: 0.8 }}>
                    Financiación y sin codeudor
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: MPR Presentation Video */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '16px',
                boxShadow: 'var(--shadow-lg)',
                border: '2px solid var(--color-gold)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid rgba(194, 149, 90, 0.25)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Play size={16} color="var(--color-gold)" fill="var(--color-gold)" />
                  <span
                    style={{
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      color: 'var(--color-forest)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Video de Presentación MPR
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    color: 'var(--color-dark)',
                    backgroundColor: 'rgba(32, 74, 49, 0.08)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                  }}
                >
                  Quiénes Somos
                </span>
              </div>

              {/* YouTube Shorts Embed (Aspect ratio 9:16 vertical or flexible) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '135%', // Compact vertical video height
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-dark)',
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/W28sAUxrJfM"
                  title="Presentación Oficial Inversiones Campestres MPR"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div
                style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  fontSize: '0.82rem',
                  color: 'var(--color-dark)',
                  opacity: 0.85,
                  fontWeight: 500,
                }}
              >
                🌲 Te damos la bienvenida a tu próximo espacio en el campo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

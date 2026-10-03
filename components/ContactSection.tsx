'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle2, 
  Handshake, 
  TrendingUp, 
  ExternalLink,
  Share2
} from 'lucide-react';

// Custom SVG Icons for Social Networks to strictly match brand colors
function TikTokIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function InstagramIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill={color} />
    </svg>
  );
}

function FacebookIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function ContactSection() {
  const whatsappUrl = 'https://wa.me/573103639993?text=Quiero%20saber%20mas%20de%20MPR';

  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mpr.inversion.campestre',
      handle: '@mpr.inversion.campestre',
      icon: <TikTokIcon size={22} color="var(--color-forest)" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mpr.inversiones.campestres/',
      handle: '@mpr.inversiones.campestres',
      icon: <InstagramIcon size={22} color="var(--color-forest)" />,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@MPR-inversionescampestres',
      handle: '@MPR-inversionescampestres',
      icon: <YouTubeIcon size={22} color="var(--color-forest)" />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61591986728698',
      handle: 'MPR Inversiones Campestres',
      icon: <FacebookIcon size={22} color="var(--color-forest)" />,
    },
  ];

  return (
    <section
      id="contacto"
      style={{
        padding: '100px 0',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderTop: '1px solid rgba(194, 149, 90, 0.25)',
      }}
    >
      <div className="container">
        {/* Main CTA Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-forest)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '52px 36px',
            marginBottom: '64px',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid var(--color-gold)',
          }}
        >
          {/* Subtle gold decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(194, 149, 90, 0.3) 0%, rgba(32, 74, 49, 0) 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(194, 149, 90, 0.25)',
                color: 'var(--color-gold)',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                border: '1px solid var(--color-gold)',
              }}
            >
              Comienza Tu Inversión Hoy
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.9rem)',
                color: '#FFFFFF',
                fontWeight: 800,
                lineHeight: 1.22,
                marginBottom: '20px',
              }}
            >
              Invierte hoy en el lugar donde construirás tu futuro.
            </h2>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '24px',
                margin: '28px 0 36px',
                fontSize: '1.05rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <TrendingUp size={20} color="var(--color-gold)" />
                <span>Lotes campestres con gran potencial de valorización.</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <Handshake size={20} color="var(--color-gold)" />
                <span>Atención personalizada y acompañamiento en cada paso.</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                fontSize: '1.05rem',
                padding: '16px 36px',
                boxShadow: '0 8px 30px rgba(194, 149, 90, 0.5)',
              }}
            >
              <MessageCircle size={22} />
              <span>Quiero saber más de MPR en WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Contact Details & Social Channels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
          }}
        >
          {/* Direct Communication Channels */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--color-forest)',
                marginBottom: '10px',
              }}
            >
              Líneas Directas de Atención
            </h3>
            <p
              style={{
                color: 'var(--color-dark)',
                fontSize: '0.94rem',
                opacity: 0.88,
                marginBottom: '24px',
              }}
            >
              Nuestro equipo comercial y jurídico está a tu completa disposición para
              resolver tus dudas y coordinar visitas a los proyectos.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Phone 1 */}
              <a
                href="https://wa.me/573103639993?text=Quiero%20saber%20mas%20de%20MPR"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#F4F4F4',
                  border: '1px solid rgba(43, 45, 47, 0.1)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(43, 45, 47, 0.1)';
                  e.currentTarget.style.backgroundColor = '#F4F4F4';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-forest)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-dark)', opacity: 0.7, fontWeight: 600 }}>
                    Línea Principal & WhatsApp
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                    +57 310 363 9993
                  </div>
                </div>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+573175782791"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#F4F4F4',
                  border: '1px solid rgba(43, 45, 47, 0.1)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(43, 45, 47, 0.1)';
                  e.currentTarget.style.backgroundColor = '#F4F4F4';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-dark)', opacity: 0.7, fontWeight: 600 }}>
                    Línea de Asesoría Telefónica
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                    +57 317 578 2791
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mpr.inversiones.campestres@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#F4F4F4',
                  border: '1px solid rgba(43, 45, 47, 0.1)',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(43, 45, 47, 0.1)';
                  e.currentTarget.style.backgroundColor = '#F4F4F4';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-dark)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-dark)', opacity: 0.7, fontWeight: 600 }}>
                    Correo Electrónico Oficial
                  </div>
                  <div
                    style={{
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: 'var(--color-forest)',
                      wordBreak: 'break-word',
                    }}
                  >
                    mpr.inversiones.campestres@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: 'var(--color-forest)',
                marginBottom: '10px',
              }}
            >
              Síguenos en Redes Sociales
            </h3>
            <p
              style={{
                color: 'var(--color-dark)',
                fontSize: '0.94rem',
                opacity: 0.88,
                marginBottom: '24px',
              }}
            >
              Mantente al día con los avances de obra, recorridos en video y testimonios
              de nuestros clientes en todas nuestras plataformas oficiales.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
              }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#F4F4F4',
                    border: '1px solid rgba(43, 45, 47, 0.1)',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-gold)';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(43, 45, 47, 0.1)';
                    e.currentTarget.style.backgroundColor = '#F4F4F4';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(32, 74, 49, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {social.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                      {social.name}
                    </div>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        color: 'var(--color-dark)',
                        opacity: 0.75,
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {social.handle}
                    </div>
                  </div>
                  <ExternalLink size={14} color="var(--color-gold)" style={{ marginLeft: 'auto' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  X, 
  MapPin, 
  CheckCircle2, 
  Coins, 
  Calendar, 
  ShieldCheck, 
  KeyRound, 
  Maximize2, 
  QrCode, 
  MessageCircle, 
  ChevronDown,
  ChevronUp,
  FileSpreadsheet
} from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  location: string;
  pricePerM2: string;
  minArea: string;
  highlights: string[];
  videos: { label: string; videoId: string }[];
  qrImage: string;
  descriptionHeadline: string;
  descriptionParagraph: string;
  detailedSpecs: {
    label: string;
    value: string;
    icon?: string;
  }[];
  concludingText: string;
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const currentVideo = project.videos[activeVideoIndex] || project.videos[0];
  const whatsappUrl = `https://wa.me/573103639993?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20proyecto%20${encodeURIComponent(
    project.title
  )}`;

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        boxShadow: isExpanded ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        border: isExpanded ? '2px solid var(--color-gold)' : '1px solid rgba(43, 45, 47, 0.12)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header with Project Title & Badge */}
      <div
        style={{
          padding: '24px 24px 16px',
          borderBottom: '1px solid rgba(194, 149, 90, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--color-gold)',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '4px',
            }}
          >
            <MapPin size={15} />
            <span>{project.location}</span>
          </div>
          <h3
            style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              color: 'var(--color-forest)',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(32, 74, 49, 0.08)',
            padding: '8px 12px',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(32, 74, 49, 0.2)',
            textAlign: 'right',
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: '0.72rem', color: 'var(--color-dark)', opacity: 0.8, fontWeight: 600 }}>
            Valor por m²
          </div>
          <div style={{ fontSize: '1.05rem', color: 'var(--color-forest)', fontWeight: 800 }}>
            {project.pricePerM2}
          </div>
        </div>
      </div>

      {/* Video Selector Tabs if multiple videos */}
      {project.videos.length > 1 && (
        <div
          style={{
            display: 'flex',
            backgroundColor: '#F4F4F4',
            padding: '8px 16px',
            gap: '8px',
            borderBottom: '1px solid rgba(43, 45, 47, 0.08)',
          }}
        >
          {project.videos.map((vid, idx) => (
            <button
              key={vid.videoId}
              onClick={() => setActiveVideoIndex(idx)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                transition: 'var(--transition)',
                backgroundColor: activeVideoIndex === idx ? 'var(--color-forest)' : '#FFFFFF',
                color: activeVideoIndex === idx ? '#FFFFFF' : 'var(--color-dark)',
                border: activeVideoIndex === idx ? '1px solid var(--color-forest)' : '1px solid rgba(43, 45, 47, 0.15)',
              }}
            >
              {vid.label}
            </button>
          ))}
        </div>
      )}

      {/* Video Embed Player */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'var(--color-dark)',
          paddingBottom: '120%', // Clean vertical shorts display
          overflow: 'hidden',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
          title={`${project.title} - Video`}
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

      {/* Quick Summary Strip */}
      <div
        style={{
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {/* Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.highlights.map((item, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: '#F4F4F4',
                color: 'var(--color-forest)',
                border: '1px solid rgba(194, 149, 90, 0.35)',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '5px 11px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action button to expand or collapse */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={isExpanded ? 'btn-outline' : 'btn-primary'}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 18px',
            fontSize: '0.94rem',
            marginTop: '4px',
          }}
        >
          {isExpanded ? (
            <>
              <X size={18} />
              <span>Ocultar Información</span>
            </>
          ) : (
            <>
              <Maximize2 size={17} />
              <span>Ver Más Información y Planos</span>
            </>
          )}
        </button>
      </div>

      {/* EXPANDABLE SECTION (Directly below video within card) */}
      {isExpanded && (
        <div
          className="animate-fade-in"
          style={{
            padding: '24px',
            backgroundColor: '#F4F4F4',
            borderTop: '2px solid var(--color-gold)',
            position: 'relative',
          }}
        >
          {/* Close 'X' Button at the top of the expanded drawer */}
          <button
            onClick={() => setIsExpanded(false)}
            aria-label="Cerrar detalles del proyecto"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(43, 45, 47, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-dark)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-forest)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = 'var(--color-dark)';
            }}
          >
            <X size={20} />
          </button>

          {/* Headline & Overview */}
          <div style={{ paddingRight: '40px', marginBottom: '18px' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-forest)',
                fontWeight: 800,
                marginBottom: '8px',
              }}
            >
              {project.descriptionHeadline}
            </h4>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-dark)',
                lineHeight: 1.6,
                opacity: 0.92,
              }}
            >
              {project.descriptionParagraph}
            </p>
          </div>

          {/* Detailed Specs List */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              border: '1px solid rgba(194, 149, 90, 0.25)',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--color-forest)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '4px',
                borderBottom: '1px solid #F4F4F4',
                paddingBottom: '6px',
              }}
            >
              Características Principales
            </div>
            {project.detailedSpecs.map((spec, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: 'var(--color-dark)',
                }}
              >
                <div style={{ color: 'var(--color-gold)', flexShrink: 0, display: 'flex' }}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <strong style={{ color: 'var(--color-forest)' }}>{spec.label}: </strong>
                  <span>{spec.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* QR Drive Plans & Licenses Section */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              border: '2px dashed var(--color-gold)',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-forest)',
                fontWeight: 800,
                fontSize: '0.94rem',
              }}
            >
              <FileSpreadsheet size={18} color="var(--color-gold)" />
              <span>Planos y Permisos en Google Drive</span>
            </div>

            <p
              style={{
                fontSize: '0.84rem',
                color: 'var(--color-dark)',
                maxWidth: '340px',
                lineHeight: 1.45,
                opacity: 0.88,
              }}
            >
              Escanea el siguiente código QR con la cámara de tu teléfono para acceder a la carpeta
              oficial en la nube con planos detallados y documentación legal:
            </p>

            {/* QR Image Container */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid rgba(43, 45, 47, 0.12)',
                boxShadow: 'var(--shadow-sm)',
                display: 'inline-block',
              }}
            >
              <Image
                src={project.qrImage}
                alt={`Código QR Planos y Licencias - ${project.title}`}
                width={160}
                height={160}
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--color-gold)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Acceso Inmediato y Transparente
            </div>
          </div>

          {/* Conclusion Text */}
          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--color-forest)',
              fontWeight: 600,
              fontStyle: 'italic',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {project.concludingText}
          </p>

          {/* Action CTAs: WhatsApp & Close 'X' */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.92rem',
              }}
            >
              <MessageCircle size={18} />
              <span>Preguntar por disponibilidad en WhatsApp</span>
            </a>

            <button
              onClick={() => setIsExpanded(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px',
                color: 'var(--color-dark)',
                fontSize: '0.85rem',
                fontWeight: 700,
                opacity: 0.8,
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-forest)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-dark)')}
            >
              <X size={16} />
              <span>Cerrar y seguir explorando la web</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

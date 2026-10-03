'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = 'https://wa.me/573103639993?text=Quiero%20saber%20mas%20de%20MPR';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div
          className="animate-fade-in"
          style={{
            backgroundColor: '#FFFFFF',
            color: 'var(--color-dark)',
            padding: '10px 14px',
            borderRadius: '16px 16px 4px 16px',
            boxShadow: '0 8px 24px rgba(43, 45, 47, 0.16)',
            border: '1px solid rgba(194, 149, 90, 0.35)',
            fontSize: '0.84rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            maxWidth: '240px',
            lineHeight: 1.35,
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            👋 ¿Tienes dudas? <br />
            <strong style={{ color: 'var(--color-forest)' }}>Quiero saber más de MPR</strong>
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar mensaje emergente"
            style={{
              color: 'var(--color-dark)',
              opacity: 0.6,
              cursor: 'pointer',
              padding: '2px',
            }}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Circular Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con Inversiones Campestres MPR"
        style={{
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          backgroundColor: '#25D366', // Standard vibrant WhatsApp recognized green, with gold shadow
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(32, 74, 49, 0.4), 0 0 0 3px rgba(194, 149, 90, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(32, 74, 49, 0.5), 0 0 0 4px var(--color-gold)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(32, 74, 49, 0.4), 0 0 0 3px rgba(194, 149, 90, 0.4)';
        }}
      >
        <MessageCircle size={32} />

        {/* Pulse ring notification dot */}
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-gold)',
            border: '2px solid #FFFFFF',
          }}
        />
      </a>
    </div>
  );
}

'use client';

import React from 'react';
import ProjectCard, { ProjectData } from './ProjectCard';
import { Compass, Sparkles } from 'lucide-react';

const projectsData: ProjectData[] = [
  {
    id: 'el-jagual',
    title: 'El Jagual Las Delicias',
    location: 'Rovira, Tolima',
    pricePerM2: '$110.000',
    minArea: 'Desde 400 m²',
    highlights: [
      'Lotes desde 400 m²',
      'Hasta 36 meses sin intereses',
      'Sin codeudor',
      '30% cuota inicial',
    ],
    videos: [
      { label: '🎬 Video 1', videoId: 'qQO_TbmJ_Pk' },
      { label: '🎬 Video 2', videoId: 'dge-5MkgB4k' },
    ],
    qrImage: '/qrjagualdrive.png',
    descriptionHeadline: '🌿 ¡Invierte en tierra y construye el lugar que siempre has querido! 🏡',
    descriptionParagraph:
      'Conoce nuestro proyecto campestre El Jagual Las Delicias, ubicado en Rovira, Tolima, una excelente oportunidad para invertir en finca raíz, disfrutar de la naturaleza y hacer realidad tu proyecto de vivienda o descanso.',
    detailedSpecs: [
      { label: 'Ubicación exacta', value: 'Proyecto El Jagual Las Delicias – Rovira, Tolima' },
      { label: 'Dimensión de lotes', value: 'Desde 400 m²' },
      { label: 'Valor por metro cuadrado', value: 'Desde $110.000 por m²' },
      { label: 'Plazo de Financiación', value: 'Hasta 36 meses sin intereses' },
      { label: 'Condiciones crediticias', value: 'Sin codeudor' },
      { label: 'Enganche inicial', value: '30% de cuota inicial' },
    ],
    concludingText:
      '🌳 Más espacio, tranquilidad y naturaleza para construir tu futuro. Haz parte de este proyecto y asegura tu lote con facilidades de pago pensadas para ti.',
  },
  {
    id: 'la-fortuna',
    title: 'La Fortuna de Aparco',
    location: 'Aparco • Ibagué, Tolima',
    pricePerM2: '$320.000',
    minArea: 'Lotes Campestres',
    highlights: [
      'A 10 min de Ibagué',
      'Escritura individual',
      'Financiación 36 meses',
      'Sin intereses ni codeudor',
    ],
    videos: [
      { label: '🎬 Video Oficial', videoId: 'fmvjLNwOqvg' },
    ],
    qrImage: '/qrfortunadrive.png',
    descriptionHeadline: '🌿 ¡Invierte cerca de Ibagué y asegura tu lote con financiación directa! 🏡',
    descriptionParagraph:
      'Conoce La Fortuna de Aparco, un proyecto ideal para quienes buscan invertir en finca raíz, construir su vivienda o adquirir un terreno con excelente proyección de valorización.',
    detailedSpecs: [
      { label: 'Ubicación estratégica', value: 'La Fortuna de Aparco (A solo 10 minutos de la zona urbana de Ibagué)' },
      { label: 'Valor por metro cuadrado', value: '$320.000 por m²' },
      { label: 'Régimen de propiedad', value: 'Escritura individual garantizada' },
      { label: 'Financiación', value: 'Financiación directa hasta 36 meses' },
      { label: 'Tasa de interés', value: '0% de interés' },
      { label: 'Garantías', value: 'Sin codeudor' },
    ],
    concludingText:
      'Una excelente oportunidad para tener tu propio lote con facilidades de pago y muy cerca de la ciudad.',
  },
  {
    id: 'villa-miriam',
    title: 'Villa Miriam de Aparco',
    location: 'Aparco • Ibagué, Tolima',
    pricePerM2: '$250.000',
    minArea: 'Desde 500 m²',
    highlights: [
      'Lotes desde 500 m²',
      'A 5 min de la ciudad',
      'Topografía 100% plana',
      'Servicios públicos',
      'Financiación hasta 48 meses',
    ],
    videos: [
      { label: '🎬 Video Oficial', videoId: '4aMPx9cAdUE' },
    ],
    qrImage: '/qrmiriamdrive.png',
    descriptionHeadline: '🌿 ¡Vive cerca de la ciudad, rodeado de tranquilidad y con espacio para construir a tu manera! 🏡',
    descriptionParagraph:
      'Conoce nuestro proyecto Villa Gloria / Villa Miriam de Aparco, una excelente oportunidad para invertir en finca raíz y adquirir un lote campestre con excelente ubicación y todas las condiciones para construir.',
    detailedSpecs: [
      { label: 'Ubicación privilegiada', value: 'Villa Gloria de Aparco (A tan solo 5 minutos de la ciudad)' },
      { label: 'Metraje', value: 'Lotes desde 500 m²' },
      { label: 'Precio por m²', value: '$250.000 por m²' },
      { label: 'Características del terreno', value: 'Topografía 100% plana' },
      { label: 'Infraestructura', value: 'Cuenta con servicios públicos' },
      { label: 'Titulación', value: 'Escritura independiente' },
      { label: 'Plazo extendido', value: 'Financiación hasta 48 meses' },
      { label: 'Cuota inicial', value: '40% de cuota inicial' },
    ],
    concludingText:
      'Un proyecto ideal para quienes buscan amplitud, valorización, fácil acceso y la tranquilidad de tener su propiedad con escritura independiente.',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      style={{
        padding: '100px 0',
        backgroundColor: '#F4F4F4',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-title-tag">
            <Sparkles size={15} color="var(--color-forest)" />
            <span>Oportunidades de Inversión</span>
          </div>
          <h2 className="section-heading">Nuestros Proyectos Campestres</h2>
          <p className="section-subtitle">
            Explora cada proyecto a través de sus videos, conoce sus características exclusivas y
            escanea el código QR de cada uno para consultar planos y licencias directamente en
            Google Drive.
          </p>
        </div>

        {/* 3 Columns Grid for the Projects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

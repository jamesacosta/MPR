import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Fixed Luxury Navigation Bar */}
      <Navbar />

      {/* Hero Section with Presentation Video */}
      <Hero />

      {/* Sobre Nosotros, Legalidad, Misión y Visión */}
      <AboutSection />

      {/* Nuestros Proyectos con Videos, Tarjetas Interactivas y Códigos QR */}
      <ProjectsSection />

      {/* Información de Contacto, Valor de la Empresa y Redes Sociales */}
      <ContactSection />

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante Oficial de WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}

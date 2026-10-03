import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://inversionescampestresmpr.com'),
  title: 'Inversiones Campestres MPR | Lotes y Terrenos Campestres',
  description: 'Inversiones Campestres MPR. Proyectos campestres legales, transparentes y con alta valorización en Rovira e Ibagué, Tolima. Financiación sin intereses y escrituras directas.',
  keywords: 'lotes campestres tolima, terrenos ibague, proyectos campestres rovira, el jagual las delicias, la fortuna de aparco, villa miriam de aparco, inversiones campestres mpr, compra de lotes tolima',
  authors: [{ name: 'Inversiones Campestres MPR' }],
  icons: {
    icon: '/Logo_Inversiones_Campestres_MPR_SVG.svg',
    shortcut: '/Logo_Inversiones_Campestres_MPR_SVG.svg',
    apple: '/Logo_Inversiones_Campestres_MPR_SVG.svg',
  },
  openGraph: {
    title: 'Inversiones Campestres MPR | Construyendo Sueños',
    description: 'Conoce nuestros proyectos campestres con escrituras independientes, financiación sin intereses y la máxima seguridad jurídica.',
    url: 'https://inversionescampestresmpr.com',
    siteName: 'Inversiones Campestres MPR',
    images: [
      {
        url: '/Logo_Inversiones_Campestres_MPR_SVG.svg',
        width: 800,
        height: 600,
        alt: 'Logo Inversiones Campestres MPR',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

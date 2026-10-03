# Inversiones Campestres MPR - Sitio Web Oficial

Sitio web corporativo oficial para **Inversiones Campestres MPR**, desarrollado con **Next.js**, diseño responsivo de alto impacto visual y estricta fidelidad a la identidad de marca institucional.

---

## 🎨 Paleta de Colores Oficial (Estricta)

Los colores fueron extraídos directamente de la imagen de perfil oficial de la empresa (`Logo_Inversiones_Campestres_MPR_SVG.svg`):

| Color | Hex | Uso en la Web |
| :--- | :--- | :--- |
| **Verde oscuro / Bosque** | `#204A31` | Títulos principales, botones primarios, círculos de iconos, acentos de bosque |
| **Dorado / Café claro** | `#C2955A` | Detalles de lujo, bordes destacados, badges, botón WhatsApp, detalles de caminos |
| **Gris muy oscuro / Casi negro** | `#2B2D2F` | Tipografía principal, fondo del pie de página, aros de contraste |
| **Blanco puro** | `#FFFFFF` | Fondos de tarjetas de proyectos, contenedores de contenido, contraste limpio |
| **Gris claro de fondo general** | `#F4F4F4` | Fondo exterior general, secciones alternadas y badges sutiles |

---

## 🌟 Características de la Plataforma

1. **Sección Inicial (Hero & Presentación)**:
   - Video de bienvenida oficial de MPR insertado mediante YouTube Shorts (`W28sAUxrJfM`).
   - Declaración de confianza y seguridad jurídica.
   - Puntos clave: Escrituras independientes, sin codeudor, 0% intereses.

2. **Sección "Sobre Nosotros", Misión, Visión & Legalidad**:
   - **Sobre Nosotros**: *"Construyendo sueños, conectando familias con la naturaleza bajo los más altos estándares de seguridad y confianza."*
   - **Legalidad y Transparencia**: *"Garantizamos tu inversión. Operamos con total transparencia, contando con todos los permisos, licencias y documentación al día para cada uno de nuestros proyectos campestres."*
   - **Misión**: Soluciones inmobiliarias campestres accesibles, sostenibles y con escrituras directas.
   - **Visión**: Liderazgo regional en parcelaciones campestres y agroturismo.

3. **Sección "Nuestros Proyectos" (Tarjetas Interactivas con Video & Expansión)**:
   - **El Jagual Las Delicias (Rovira, Tolima)**:
     - Lotes desde 400 m², desde $110.000/m², financiación hasta 36 meses sin intereses, 30% cuota inicial.
     - Reproductor para los 2 videos oficiales del proyecto.
     - Código QR oficial (`qrjagualdrive.png`) para consultar planos y licencias en Google Drive.
     - Botón de cierre (`✕`) en la tarjeta para replegar la información y continuar explorando.
   - **La Fortuna de Aparco (Ibagué, Tolima)**:
     - A 10 minutos de Ibagué, $320.000/m², escritura individual, financiación directa 36 meses sin intereses ni codeudor.
     - Video oficial del proyecto y código QR (`qrfortunadrive.png`).
     - Botón de cierre (`✕`) interactivo.
   - **Villa Miriam de Aparco / Villa Gloria (Ibagué, Tolima)**:
     - Lotes desde 500 m², $250.000/m², a 5 minutos de la ciudad, topografía plana, servicios públicos, escritura independiente, financiación hasta 48 meses.
     - Video oficial del proyecto y código QR (`qrmiriamdrive.png`).
     - Botón de cierre (`✕`) interactivo.

4. **Botón Flotante de WhatsApp**:
   - Burbuja flotante con notificación y mensaje predeterminado: *"Quiero saber mas de MPR"* dirigido a `+57 310 363 9993`.

5. **Canales de Contacto & Redes Sociales**:
   - Teléfonos: `+57 310 363 9993` y `+57 317 578 2791`
   - Correo electrónico: `mpr.inversiones.campestres@gmail.com`
   - Enlaces oficiales a TikTok, Instagram, YouTube y Facebook.

---

## 💻 Tecnologías Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Biblioteca UI**: [React 18](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: CSS puro modular con variables personalizadas para rendimiento óptimo
- **Iconografía**: [Lucide React](https://lucide.dev/)

---

## 🚀 Instrucciones para Ejecución Local

### Prerrequisitos
- Node.js versión 18.17 o superior.
- npm versión 9 o superior.

### Instalación y Puesta en Marcha

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Iniciar el servidor de producción**:
   ```bash
   npm run start
   ```

---

## ☁️ Guía Completa de Despliegue en Netlify

Este proyecto ya incluye el archivo `netlify.toml` preconfigurado para que el despliegue en **Netlify** sea automático y sin complicaciones.

### Método 1: Despliegue Automático mediante Git (Recomendado)

1. **Sube este proyecto a tu cuenta de GitHub, GitLab o Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "Inicializar sitio web Inversiones Campestres MPR"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Inicia sesión en [Netlify](https://www.netlify.com/)**:
   - Haz clic en el botón **"Add new site"** > **"Import an existing project"**.
   - Selecciona tu proveedor (ej. **GitHub**).
   - Elige el repositorio de `MPRWEB`.

3. **Verificar Configuración de Build**:
   Netlify detectará automáticamente el archivo `netlify.toml` con los siguientes parámetros:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Plugin**: `@netlify/plugin-nextjs` (se instala automáticamente para soportar Next.js App Router).

4. **Haz clic en "Deploy Site"**:
   - Netlify compilará el sitio en menos de 2 minutos y te asignará una URL pública (ejemplo: `https://inversiones-campestres-mpr.netlify.app`).

---

### Método 2: Despliegue Manual con Netlify CLI

Si prefieres desplegar directamente desde tu terminal sin vincular Git:

1. **Instala Netlify CLI de forma global**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Inicia sesión en Netlify**:
   ```bash
   netlify login
   ```

3. **Construye y Despliega**:
   ```bash
   npm run build
   netlify deploy --prod
   ```
   Sigue las instrucciones en consola para asociar o crear el sitio.

---

### Método 3: Exportación Estática Pura en Netlify (Opcional)

Si deseas alojar el sitio 100% estático (HTML/CSS/JS puros en la CDN global de Netlify):

1. En `next.config.mjs`, añade la propiedad `output: 'export'`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   export default nextConfig;
   ```
2. Modifica `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "out"
   ```
3. Ejecuta `npm run build` y sube la carpeta `out/` a Netlify mediante "Drag and Drop" en la sección de sitios.

---

## 📁 Estructura del Proyecto

```
MPRWEB/
├── app/
│   ├── globals.css           # Paleta estricta, tokens CSS y utilidades
│   ├── layout.tsx            # Metadatos SEO, favicon y estructura raíz
│   └── page.tsx              # Ensamblado de todas las secciones
├── components/
│   ├── AboutSection.tsx      # Sobre Nosotros, Legalidad, Misión y Visión
│   ├── ContactSection.tsx    # Líneas telefónicas, correo y redes sociales
│   ├── FloatingWhatsApp.tsx  # Botón flotante interactivo de WhatsApp
│   ├── Footer.tsx            # Pie de página corporativo
│   ├── Hero.tsx              # Portada con video de presentación MPR
│   ├── Navbar.tsx            # Barra de navegación adaptable móvil/PC
│   ├── ProjectCard.tsx       # Tarjeta de proyecto con videos, QR y botón X
│   └── ProjectsSection.tsx   # Grid con El Jagual, La Fortuna y Villa Miriam
├── public/
│   ├── Logo_Inversiones_Campestres_MPR_SVG.svg # Logotipo oficial vectorial
│   ├── qrfortunadrive.png    # QR de Google Drive para La Fortuna
│   ├── qrjagualdrive.png     # QR de Google Drive para El Jagual
│   └── qrmiriamdrive.png     # QR de Google Drive para Villa Miriam
├── netlify.toml              # Configuración de despliegue para Netlify
├── next.config.mjs           # Ajustes de compilación de Next.js
├── package.json              # Scripts y dependencias
├── tsconfig.json             # Configuración TypeScript
└── README.md                 # Documentación completa del proyecto
```

---

## 📞 Contacto Corporativo MPR

- **Línea Principal & WhatsApp**: `+57 310 363 9993`
- **Línea Asesoría**: `+57 317 578 2791`
- **Correo Electrónico**: `mpr.inversiones.campestres@gmail.com`
- **Redes Sociales**:
  - TikTok: [@mpr.inversion.campestre](https://www.tiktok.com/@mpr.inversion.campestre)
  - Instagram: [@mpr.inversiones.campestres](https://www.instagram.com/mpr.inversiones.campestres/)
  - YouTube: [@MPR-inversionescampestres](https://www.youtube.com/@MPR-inversionescampestres)
  - Facebook: [MPR Inversiones Campestres](https://www.facebook.com/profile.php?id=61591986728698)

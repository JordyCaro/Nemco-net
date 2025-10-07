# Nemco-Net - Desarrollo Web y Soluciones Digitales

🚀 **Nemco-Net** es una empresa especializada en desarrollo web, móvil, soluciones cloud e inteligencia artificial. Transformamos ideas en soluciones digitales innovadoras.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y responsiva con modo oscuro
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- 🔍 **SEO Avanzado**: Meta tags, structured data y sitemap
- 📱 **PWA Ready**: Manifest y capacidades de aplicación web
- 🌐 **Multiidioma**: Soporte para español e inglés
- 🎯 **Accesibilidad**: Cumple estándares de accesibilidad web

## 🛠️ Tecnologías

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Componentes**: React + Headless UI
- **Build**: Vite con optimizaciones avanzadas
- **Deployment**: Vercel/Netlify ready

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/nemco-net/website.git
cd website

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run astro    # CLI de Astro
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── layouts/        # Layouts de página
├── pages/          # Páginas y rutas
├── assets/         # Imágenes y recursos
└── styles/         # Estilos globales

public/
├── favicon.png     # Favicon de la marca
├── logo.png        # Logo principal
├── manifest.json   # PWA manifest
└── robots.txt      # SEO robots
```

## 🎨 Personalización

### Colores de Marca

```css
:root {
  --primary: #FF5F15;
  --secondary: #your-secondary-color;
  --accent: #your-accent-color;
}
```

### Configuración SEO

Edita `src/layouts/Layout.astro` para personalizar:
- Meta tags
- Open Graph
- Structured data
- Canonical URLs

## 📈 Optimizaciones de Rendimiento

- ✅ **Lazy Loading**: Imágenes optimizadas con Astro Image
- ✅ **Code Splitting**: Chunks optimizados por vendor
- ✅ **Minificación**: CSS y JS minificados
- ✅ **Preloading**: Recursos críticos precargados
- ✅ **Compresión**: HTML comprimido

## 🔍 SEO Implementado

- ✅ **Meta Tags**: Títulos, descripciones y keywords
- ✅ **Open Graph**: Compartir en redes sociales
- ✅ **Structured Data**: Schema.org para buscadores
- ✅ **Sitemap**: XML sitemap automático
- ✅ **Robots.txt**: Directivas para crawlers
- ✅ **Canonical URLs**: Evitar contenido duplicado

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Deploy a Netlify
# Subir carpeta dist/ a Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📊 Métricas de Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Excelentes
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Website**: [nemco-net.com](https://nemco-net.com)
- **Email**: contacto@nemco-net.com
- **LinkedIn**: [Nemco-Net](https://linkedin.com/company/nemco-net)

---

Desarrollado con ❤️ por el equipo de **Nemco-Net**
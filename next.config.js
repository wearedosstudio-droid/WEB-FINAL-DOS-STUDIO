/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // El lint sigue disponible en local con `npm run lint`.
    // Se desactiva en el build de producción para que un aviso de estilo
    // no bloquee el despliegue en Vercel.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

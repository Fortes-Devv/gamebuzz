// =============================================================
// next.config.ts
// Configurações do Next.js.
// Adicione aqui domínios de imagens externas, variáveis de ambiente etc.
// =============================================================

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Lista de domínios externos permitidos para o componente <Image />
    // Adicione novos domínios aqui quando usar outras fontes de imagem
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Imagens de capa dos artigos
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",    // Avatares dos autores
      },
    ],
  },
};

export default nextConfig;

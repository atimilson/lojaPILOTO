import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.tcdn.com.br', 'via.placeholder.com'], // Adicione os domínios permitidos aqui
  },
};

export default nextConfig;
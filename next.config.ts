import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Permet à Next.js de reconnaître les fichiers .mdx comme des pages/composants
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Export statique pour GitHub Pages
  output: "export",
  // Remplace "next-formation" par le nom de ton repo GitHub
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
  // Nécessaire pour les images avec l'export statique
  images: { unoptimized: true },
};

export default withMDX(nextConfig);

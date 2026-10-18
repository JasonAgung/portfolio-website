import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Education now lives on the About page.
      { source: "/education", destination: "/about#education", permanent: true },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make sure the OG-image fonts are bundled into that route's serverless function.
  outputFileTracingIncludes: {
    "/opengraph-image": ["./assets/fonts/**"],
  },
  async redirects() {
    return [
      // Education now lives on the About page.
      { source: "/education", destination: "/about#education", permanent: true },
    ];
  },
};

export default nextConfig;

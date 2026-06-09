import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/datacant',
  images: { unoptimized: true },
};

export default nextConfig;

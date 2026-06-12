

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images : {
    remotePatterns: [],
    // allows images from the public folder
    unoptimized: true,
  },
};

export default nextConfig;


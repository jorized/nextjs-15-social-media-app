import type { NextConfig } from "next";
// This is to set up client-side caching for next JS. (For 30 seconds)
const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30
    }
  }
};

export default nextConfig;

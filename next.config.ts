import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "5tl0en88ttluwtv1.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

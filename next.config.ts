import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e1ukie7zfbuybyek.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

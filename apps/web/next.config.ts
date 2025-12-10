import { withPayload } from "@payloadcms/next/withPayload";
import { NextConfig } from "next";

const remotePatterns = process.env.NEXT_IMAGE_DOMAINS?.split(',').map((domain) => ({
  hostname: domain,
}));

const nextConfig = {
  images: {
    remotePatterns,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} as NextConfig;

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig);

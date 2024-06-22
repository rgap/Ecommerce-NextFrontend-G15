/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Disable React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["127.0.0.1"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "127.0.0.1",
    //     pathname: "**",
    //   },
    // ],
  },
};

module.exports = nextConfig;

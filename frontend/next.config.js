/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','randomuser.me'],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.sanity.io",
    //     port: "",
    //   },
    // ],
  },
};

module.exports = nextConfig;

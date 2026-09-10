/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      // Secret path → serves admin page without changing URL to /admin
      {
        source: "/portal",
        destination: "/admin",
      },
      {
        source: '/api/:path*',
        destination: 'http://187.124.35.84:5002/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      // Block direct access to /admin — redirect to home
      {
        source: "/admin",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

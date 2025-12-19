/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hospedage.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hospedandodnv.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

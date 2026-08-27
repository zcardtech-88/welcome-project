/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/welcome-project',
  assetPrefix: '/welcome-project/',
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'public-cdn.growthx.club',
        port: '',
        pathname: '/**',
      },
            {
        protocol: 'https',
        hostname: 'du2l2d5icvsbf.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
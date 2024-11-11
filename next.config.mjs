/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      }
    ]
  },

  assetPrefix: isProd ? null : `http://${internalHost}:3000`,

  // redirects: async () => [
  //   {
  //     source: '/',
  //     destination: '/app', // Change this to your desired destination
  //     permanent: false, // Set to true for permanent redirect (301)
  //   }
  // ],


  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false
        }
      }
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

export default nextConfig;

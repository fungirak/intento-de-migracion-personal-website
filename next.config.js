const disableSSR = process.env.NEXT_PUBLIC_DISABLE_SSR === 'true';

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configuración del lado del cliente
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
 
};

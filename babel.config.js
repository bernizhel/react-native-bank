module.exports = (api) => {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@shared': './src/shared',
            '@atoms': './src/shared/ui/core/atoms',
            '@molecules': './src/shared/ui/core/molecules',
            '@organisms': './src/shared/ui/core/organisms',
            '@theme': './src/shared/ui/theme',
            '@entities': './src/entities',
            '@features': './src/features',
            '@widgets': './src/widgets',
            '@pages': './src/pages',
            '@processes': './src/processes',
            '@app': './src/app',
          },
        },
      ],
    ],
  };
};

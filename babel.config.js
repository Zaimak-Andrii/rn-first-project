const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@assets': './assets',
        '@images': './assets/images',
        '@fonts': './assets/fonts',
      },
    },
  ],
];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  plugins: [
    [
      '@snowpack/plugin-webpack',
    ],
  ],
  packageOptions: {
    knownEntrypoints: [ 'assets/fonts/KoreanKRSM.woff2', 'assets/fonts/OptimaNovaLT-Black.woff2']
  }
};
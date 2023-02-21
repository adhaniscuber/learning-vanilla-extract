const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
// const withPlugins = require('next-compose-plugins')
// const nextTranspile = require('next-transpile-modules');

// // you must compose the ui library with nextTranspile
// const withTranspileModule = nextTranspile(['@ctlyst-test/voila-ui']);

/** @type {import('next').NextConfig} */
const nextConfig = {};

// const plugins = [withVanillaExtract, withTranspileModule];

module.exports = withVanillaExtract(nextConfig);

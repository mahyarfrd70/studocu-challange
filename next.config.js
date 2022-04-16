/** @type {import('next').NextConfig} */

const bundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig);

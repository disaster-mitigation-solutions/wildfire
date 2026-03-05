const withBundleAnalyzer = require('@next/bundle-analyzer')({
 enabled: process.env.ANALYZE === 'true',
});

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
 output: 'export',
 /* config options here */

 // Optional: Change the output directory `out` -> `dist`
 distDir: './dist',

 //basePath: "",
 typescript: {
  ignoreBuildErrors: true,
 },
 eslint: {
  ignoreDuringBuilds: true,
 },
 images: {
  unoptimized: true,
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'placehold.co',
    port: '',
    pathname: '/**',
   },
   {
    protocol: 'https',
    hostname: 'images.unsplash.com',
    port: '',
    pathname: '/**',
   },
   {
    protocol: 'https',
    hostname: 'picsum.photos',
    port: '',
    pathname: '/**',
   },
  ],
 },
};

export default withBundleAnalyzer(nextConfig);

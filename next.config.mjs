/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for development mode
  // output: 'export', // Uncomment this line only when building for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

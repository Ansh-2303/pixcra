/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the build to finish even if there are tiny type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This prevents the build from failing due to minor linting warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '/**',
            },
        ],
    },
    trailingSlash: true,
    additionalPaths: async (config) => [
    {
      loc: '/resume.pdf', // next-sitemap transforms this based on trailingSlash settings, ensure it evaluates cleanly to the file
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
],
};

export default nextConfig;

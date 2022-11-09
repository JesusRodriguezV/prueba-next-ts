/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'en-GB', 'es-ES', 'es-MX', 'de-DE', 'fr-FR','ja-JP','zh-CN', 'ar-SA', 'th-TH', 'ko-KR', 'hi-IN'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
}

module.exports = nextConfig

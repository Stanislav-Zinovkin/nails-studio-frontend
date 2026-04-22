import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error'] }
      : false,
  },

  async headers() {
    return [
      {
        //all pages
        source: '/(/*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', //refusing iframe(guard from Clickjacking)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',// browser can't guess type of content
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()', //no access for devices
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self' https://api.telegram.org;",
            //CSP: approved request only by self
          },
        ],
      },
    ];
  },
};

export default nextConfig;

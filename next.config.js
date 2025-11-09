/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "deshit-seven.vercel.app",
      "leox-multi.vercel.app",
      "spectum-dapp.vercel.app",
    ],
  },
}

module.exports = nextConfig

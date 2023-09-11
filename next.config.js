/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [
      "i.pravatar.cc",
      "m.media-amazon.com",
      "m.media-amazon.com",
      "N/A",
      "img.freepik.com",
      "www.google.com",
      "static.vecteezy.com",
    ],
  },
};

module.exports = nextConfig

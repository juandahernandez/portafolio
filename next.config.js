const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tse3.mm.bing.net",
      "tse1.mm.bing.net",
      "tse2.mm.bing.net",
      "www.geekalerts.com",
      "images.theinformr.com",
      "pluspng.com",
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "./*");
    return config;
  },
};

module.exports = nextConfig;

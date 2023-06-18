/** @type {import('next').NextConfig} */

module.exports = {
    env: {
        HYGRAPH_API_URL: process.env.HYGRAPH_API_URL,
    },
    images: {
        domains: ["media.graphassets.com"],
      },
  };
  
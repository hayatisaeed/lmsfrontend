// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sssc.carleton.ca",
      },
      {
        protocol: "https",
        hostname: "foundr.com",
      },
    ],
  },
};

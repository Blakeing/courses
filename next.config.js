module.exports = {
  images: {
    domains: ['images.ctfassets.net', 'images.unsplash.com'],
  },
  webpack: (config) => {
    config.node = {
      child_process: 'empty',
    }
    return config
  },
}

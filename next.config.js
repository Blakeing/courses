module.exports = {
    future: {
        webpack5: true,
      },
    webpack: config => {
      config.resolve.fallback = {
        child_process: 'empty',
        "crypto": false 
      };
      return config;
    },
  };
module.exports = function (context, options) {
  return {
    name: 'katex-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            'react-katex': 'react-katex',
          },
        },
      };
    },
  };
};

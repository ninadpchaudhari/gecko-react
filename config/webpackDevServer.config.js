'use strict';

const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    allowedHosts: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true' ? 'all' : [allowedHost],
    compress: true,
    client: {
      logging: 'none',
      overlay: false,
    },
    static: {
      directory: paths.appPublic,
      publicPath: [paths.servedPath || '/'],
      watch: {
        ignored: /node_modules/,
      },
    },
    hot: true,
    server: protocol,
    host: host,
    historyApiFallback: {
      disableDotRule: true,
    },
    proxy,
  };
};

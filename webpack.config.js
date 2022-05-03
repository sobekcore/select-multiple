const { join } = require('path');
const ROOT_PATH = __dirname;

module.exports = {
  mode: 'production',
  entry: join(ROOT_PATH, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: ROOT_PATH,
  },
  resolve: {
    alias: {
      '@': join(ROOT_PATH, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};

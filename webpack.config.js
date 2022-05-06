const { join } = require('path');
const ROOT_PATH = __dirname;

module.exports = {
  mode: 'production',
  entry: join(ROOT_PATH, 'src/index.js'),
  output: {
    path: ROOT_PATH,
    filename: 'index.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@': join(ROOT_PATH, 'src'),
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

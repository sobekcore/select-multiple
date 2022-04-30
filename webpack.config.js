const { join } = require('path');
const ROOT_PATH = __dirname;

module.exports = {
  mode: 'production',
  entry: join(ROOT_PATH, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: ROOT_PATH,
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

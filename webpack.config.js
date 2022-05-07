const TerserPlugin = require('terser-webpack-plugin');
const { join } = require('path');

const ROOT_PATH = __dirname;

module.exports = {
  mode: 'production',
  entry: join(ROOT_PATH, 'src/index.js'),
  output: {
    path: ROOT_PATH,
    filename: 'index.js',
    library: 'SelectMultiple',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@': join(ROOT_PATH, 'src'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: { exportType: 'string' },
      },
    ],
  },
};

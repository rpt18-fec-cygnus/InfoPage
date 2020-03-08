const path = require('path');
const src_dir = path.join(__dirname, '/public', '/src');
const dist_dir = path.join(__dirname, 'public', 'dist');
var webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(src_dir, 'index.jsx'),
  output: {
    path: dist_dir,
    filename: 'miniBundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: src_dir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  plugins: [new CompressionPlugin()]
}
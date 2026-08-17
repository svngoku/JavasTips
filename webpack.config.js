const { resolve } = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'production';

module.exports = {
  entry: {
    "index": "./library/bundle.js",
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'es2020'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};

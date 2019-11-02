let { resolve } = require('path');
let webpack = require('webpack');
let env = process.env.NODE_ENV;

module.exports = {
  entry: {
    "index": "./library/bundle.js",
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ],
  resolve: {
    extensions: [".js"]
  }
};

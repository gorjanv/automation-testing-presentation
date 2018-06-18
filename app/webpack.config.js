const path = require('path');

const ENV = process.env.TARGET_ENV;

const client = {
  mode: ENV,
  target: 'web',  
  entry: ["whatwg-fetch", "./web/index.js"],
  output: {
    path: path.resolve(__dirname, "dist/static"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "web")
        ],
        loader: "babel-loader"
      },
    ],
  },
};

const server = {
  mode: ENV,
  target: 'node',  
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          path.resolve(__dirname, "server")
        ],
        loader: "babel-loader"
      },
    ],
  },
};

module.exports = [client, server];
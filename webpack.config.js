const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: ["./main.js"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx?)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  
};

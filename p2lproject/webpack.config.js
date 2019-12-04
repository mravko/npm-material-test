const path = require("path");

// variables
var isProduction =
  process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";
var outPath = path.join(__dirname, "./build");

//plugins
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["@babel/polyfill", "react-hot-loader/patch", "./src/index.tsx"]
  },
  module: {
    rules: [{ test: /\.tsx$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: outPath,
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ["module", "browser", "main"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: -10,
          filename: "vendor.js"
        }
      }
    },
    runtimeChunk: false
  }
};

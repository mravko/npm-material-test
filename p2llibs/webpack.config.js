const path = require("path");

// variables
var isProduction =
  process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";
var outPath = path.join(__dirname, "./build");

console.log("isProduction", isProduction);

//plugins
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: [
      "@babel/polyfill",
      "react-hot-loader/patch",
      isProduction ? "./index.tsx" : "./src/index.tsx"
    ]
  },
  module: {
    rules: [{ test: /\.tsx$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: outPath,
    filename: "index.js",
    libraryTarget: "commonjs2"
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
  ]
};

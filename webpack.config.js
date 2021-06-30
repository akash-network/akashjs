const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx", ".ts"],
    fallback: {
      http: require.resolve("stream-http"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [new NodePolyfillPlugin()],
  output: {
    filename: "akashjs.js",
    path: path.resolve(__dirname, "umd"),
    library: {
      type: "umd",
      name: "akashjs",
    },
    // prevent error: `Uncaught ReferenceError: self is not define`
    globalObject: "this",
  },
};

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  externals: {
    "node:crypto": "src/webpack/crypto"
  },
  resolve: {
    alias: {
      // add as many aliases as you like!
      keytar: path.resolve(__dirname, "src/wallet/storage.ts"),
      perf_hooks: path.resolve(__dirname, "src/webpack/perf_hooks.ts"),
    },
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
      name: "akjs",
    },
    // prevent error: `Uncaught ReferenceError: self is not define`
    globalObject: "this",
  },
};

module.exports = {
  entry: {
    bundle: "./src/ts/app.ts",
  },
  output: {
    path: `${__dirname}/dist/common/ts`,
    filename: "[bundle.js]",
  },
  mode: "development",
  // mode: "production",
  resolve: {
    ectensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`
    },
    open: true,
  },
  module: {
    rules: [
      {
      test: /\.ts$/,
      loader: "ts-loader",
      },
    ],
  },
};

// webpack.config.js

module.exports = {
  entry: {
    bundle: "./src/ts/app.ts",
  },
  output: {
    path: `${__dirname}/dist/common/js`,
    filename: "bundle.js",
  },
  mode: "development",
  // mode: "production",
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.json'],
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true, // 自動的にindexファイルを開く
    hot: true, //変更したファイルに関連する部品のみを読み込む
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

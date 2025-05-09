import { resolve } from "path";
import CopyPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  mode: "development",
  entry: {
    background: "./src/background.ts",
    choosemodel: "./src/choosemodel.ts",
    quickedit: "./src/quickedit.ts",
    quickinsert: "./src/quickinsert.ts",
    quicksend: "./src/quicksend.ts",
    quickcancel: "./src/quickcancel.ts",
  },
  output: {
    path: resolve(process.cwd(), "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*"], // Remove everything in dist before
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/manifest.json", to: "." },
        { from: "src/icons", to: "icons" },
      ],
    }),
  ],
  devtool: "source-map",
  mode: "development",
};

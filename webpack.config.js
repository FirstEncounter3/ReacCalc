const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {template: path.join(__dirname, "public", "index.html")}
        )
    ],
};
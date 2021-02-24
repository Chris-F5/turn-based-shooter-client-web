const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
    mode: "development",
    entry: "./src/bootstrap.ts",
    output: {
        path: dist,
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new CopyPlugin([
            path.resolve(__dirname, "src/html")
        ]),

        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "wasm"),
        }),
    ],
};
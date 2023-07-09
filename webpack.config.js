const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
    entry: ["./src/index.css", "./src/script.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [new CssMinimizerPlugin()],
    },    
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
        ],
    },
};

module.exports = () => {
    return config;
};

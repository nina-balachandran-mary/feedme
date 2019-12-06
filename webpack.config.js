const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/client/index.tsx'
    ],
    devServer: {
        contentBase: './dist',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'feedmebundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "src/client/index.html",
            filename: "./index.html"
        })
    ],
    resolve: {
        extensions: ['.html','.wasm', '.mjs', '.json', '.js', '.jsx', '.ts', '.tsx']
    }
};

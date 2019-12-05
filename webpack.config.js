const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/client/index.tsx'
    ],
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
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.wasm', '.mjs', '.json', '.js', '.jsx', '.ts', '.tsx']
    }
};

const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    //watch: true,
    devtool: "source-map",
    mode: "development",
    //mode: 'production',
    entry: [
        "./src/app.ts"
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [
                    path.resolve(__dirname, "src")
                ],
                sideEffects: true
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader', options: { minimize: false } }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    optimization: {
 
    },
    target: 'web',

    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}
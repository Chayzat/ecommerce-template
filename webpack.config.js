const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: "./src/assets/js/index.js"
    },
    output: {
        clean: true,
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devServer: {
        static: "./src",
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
                exclude: /(node_modules)/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Meubel House",
            template: "./src/index.pug"
        })
    ]
}
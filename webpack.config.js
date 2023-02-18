const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const globule = require("globule");

const paths = globule.find(["src/pug/pages/**/*.pug"]);


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
        open: true,
        static: {
            directory: './src',
            watch: true
        },
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
        ...paths.map((path) => {
            return new HtmlWebpackPlugin({
                template:`${path}`,
                filename: `${path.split(/\/|.pug/).splice(-2, 1)}.html`,
            });
        })
    ]
}
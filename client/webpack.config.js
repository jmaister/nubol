const packageJSON = require('./package.json');
const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const PATHS = {
    //build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
    build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars')
};


const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    output: {
        path: PATHS.build,
        filename: 'index.js'
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
};

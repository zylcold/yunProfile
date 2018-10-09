var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.md$/, loader: 'babel-loader!react-markdown-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "yunlong",
            template: "index.html",
            hash: true
            })
    ]
};

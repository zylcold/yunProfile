module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.md$/, loader: 'babel-loader!react-markdown-loader' }
        ]
    }
};

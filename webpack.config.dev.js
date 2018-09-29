module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
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
            { test: /\.md$/, loader: 'babel-loader!react-markdown-loader' }
        ]
    }
};

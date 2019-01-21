const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        index: './js/index.js'
    },

    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        port: 8080
    },
    node: {
        fs: "empty"
    },
    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        })
    ],
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"}
                ]
            }
        ]
    }
};
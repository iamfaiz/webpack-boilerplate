var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./src/js/main.js', './src/sass/main.sass'],

    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },

            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            }
        ],
    },

    plugins:[
        new ExtractTextPlugin('../css/bundle.css')
    ]
};
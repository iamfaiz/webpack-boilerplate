var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/main.js', './src/sass/main.sass'],

    output: {
        path: __dirname + '/dist',
        filename: 'js/bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [{
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
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }]
            },

            {
                test: /\.hbs$/,
                use: "handlebars-loader"
            }
        ],
    },

    plugins: [
        new ExtractTextPlugin('css/bundle.css'),

        new HtmlWebpackPlugin({
            template: 'src/index.hbs',
            title: 'Home Page',
            filename: 'index.html'
        }),
    ]
};
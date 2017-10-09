var webpack = require('webpack');

module.exports = {
    entry: './src/js/main.js',

    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js'
    }
};
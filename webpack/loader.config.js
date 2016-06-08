var path = require('path');

var CONF = require('../config');

var baseDir = path.join(CONF.basePath, '/app');

module.exports = function () {

    var config = {
        entry: Object.assign({
            core: [
                'react-router'
            ]
        },{
            app: path.join(baseDir, '/app.js')
        }),
        output: {
            path: CONF.devPath + '/js',
            publicPath: CONF.devPathPublic,
            filename: '[name].min.js',
            chunkFilename: '[id].chunk.js'
        },
        devtool: 'inline-source-map',
        resolve: {
            modulesDirectories: [
                'src',
                'node_modules'
            ]
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.less$/i,
                    loader: 'style-loader!css-loader!less-loader'
                }
            ]
        }
    };

    return config;

}
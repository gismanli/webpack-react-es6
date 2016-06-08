var express = require('express');
var rewrite = require('express-urlrewrite');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

var app = express();

var CONF = require('./config');
var WebpackConfig = require('./webpack/webpack.config');

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
    publicPath: CONF.devPathPublic,
    stats: {
        colors: true
    }
}))

app.use(rewrite('', '/index.html'));
app.use(rewrite('/page/*', '/index.html'));

app.use(express.static(CONF.basePath));

app.listen(8000, function () {
    console.log('Server listening on http://localhost:8000, Ctrl+C to stop')
});
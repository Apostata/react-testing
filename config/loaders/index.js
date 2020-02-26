const jsLoader = require('./jsLoader');
const cssLoader = require('./cssLoader');
const imageLoader= require('./imageLoader');

const loaders = [];
loaders.push(cssLoader);
loaders.push(imageLoader);
loaders.push(jsLoader);
loaders.push({
    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader",
    options: {
        limit: 100000,
        mimetype: 'application/font-woff',
        name: 'fonts/[name].[ext]',
        publicPath: '../',
    },
});
loaders.push({
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: "url-loader",
    options: {
        limit: 100000,
        mimetype: 'application/octet-stream',
        name: 'fonts/[name].[ext]',
        publicPath: '../',
    },
});
loaders.push({
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: "file-loader",
    options: {
        name: 'fonts/[name].[ext]',
        publicPath: '../',
    },
});
loaders.push({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
    loader: "url-loader",
    options: {
        limit: 100000,
        mimetype: 'image/svg+xml',
        name: 'fonts/[name].[ext]',
        publicPath: '../',
    },
});

module.exports = loaders;

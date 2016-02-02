var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      historyApiFallback: true
    }).listen(8080, 'localhost');

var path = require('path'),
    webpack = require('webpack');


module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/components/main.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        loader: 'style!css!sass'
      }
    ]
  }
};

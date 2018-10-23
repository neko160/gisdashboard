const path = require('path');
//const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(path.join(__dirname, 'dist'), 'js'),
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: "amd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }


    ]
  },
  externals: [
    function (context, request, callback) {
      if (/^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request)
      ) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],
  devServer: {
    inline: true,
    port: 443,
    host: "127.0.0.1",
    hot: true
  },
  plugins: [
    /*  new HTMLWebpackPlugin({
       inject: false,
       template: 'index.html',
       filename: 'index.html',
       chunks: ['personas']
     }),
 
     new HTMLWebpackPlugin({
       inject: false,
       template: 'empresas.html',
       filename: 'empresas.html',
       chunks: ['empresas']
     }),
     */
    new ExtractTextPlugin('css/myStyles.css')

  ]
};

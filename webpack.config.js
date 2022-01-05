const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',  // new line
  devServer: {                 // new line
    contentBase: './dist'      // new line
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(), // new line
    new HtmlWebpackPlugin({
      title: 'giphy-API',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'json', //asset/resource
        //configuration.module.rules[2].type should be one of these:
        //"javascript/auto" | "javascript/dynamic" | "javascript/esm" | "json" | "webassembly/experimental"
      },
      
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  }
};
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const base = require('./webpack.config.base.js')

module.exports = {
  ...base, //把base的所有属性植入
  mode: 'production',
  plugins: [
    ...base.plugins, //把base.plugins的所有属性植入
    new MiniCssExtractPlugin({
      //生成css文件
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false
    })
  ],
  module: {
    //打包css文件
    rules: [
      {
        test: /\.css$/i,
        use: [
          //抽成css文件
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
}

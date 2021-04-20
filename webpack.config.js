const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js', //输入
  output: {
    //输出
    // filename: 'index.js',
    filename: '[name].[contenthash].js', //如果内容有更新，就会重新打包，产生一个新的hash，文件名会不同，[name]可以替换成自定义文件名，默认是main
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      //生成html文件
      title: 'qianyu', //生成的html标题，如果有html模板，则此标题不生效，除非html模板内title标签内写入<%= htmlWebpackPlugin.options.title %>
      template: 'src/assets/index.html' //需要生成html的模板
    })
  ],
  module: {
    //打包css文件
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] //css-loader把css内容读到js里面，style-loader把css-loader读到的css字符串内容放到html里面的style标签内
      }
    ]
  }
}

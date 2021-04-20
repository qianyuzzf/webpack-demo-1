const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js', //输入
  output: {
    //输出
    // filename: 'index.js',
    filename: '[name].[contenthash].js', //如果内容有更新，就会重新打包，产生一个新的hash，文件名会不同
    path: path.resolve(__dirname, 'dist')
  }
}

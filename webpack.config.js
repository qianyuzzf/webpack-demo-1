const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'] //css-loader把css内容读到js里面，style-loader把css-loader读到的css字符串内容放到html里面的style标签内
      }
    ]
  }
}

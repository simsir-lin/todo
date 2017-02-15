var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATH = {
  ROOT: __dirname,
  APP: __dirname + '/app',
  BUILD: __dirname + '/dist'
};

module.exports = {
  entry: [
    './app/app.jsx'
  ],

  output: {
    path: PATH.BUILD + '/',  // 打包文件存放的绝对路径
    // publicPath: './src/assets/',  // index中js的引用路径
    filename: 'app.js'  // 打包后的文件名称
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss?$/,
        loaders: ['style', 'css', 'sass']  // 处理顺序从右至左
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
        loader: 'file'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: '../dist/index.html', //生成的html存放路径，相对于 path
      template: './index.html', //html模板路径
      inject: false,
      hash: true,
    })
  ],

  // 把jsx这种扩展名添加进去，这样就可以在js中import加载jsx这种扩展名的脚本
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
};

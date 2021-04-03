const path = require('path');

module.exports = {
  
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    devServer: {
      publicPath: '/build',
      compress: true,
      port: 8080,
      proxy: {
        '/': 'http://localhost:3000'
        },
    },
    module: {
      rules:[
        {
          test:/\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader" ,
          options: {presets: ["@babel/preset-env", "@babel/preset-react"]}
        },
        {
          test:/\.s[ac]ss$/,
          use:['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test:/\.(png|svg|jpg|gif$)/,
          use: ["file-loader"],
        }
      ]
    },
     
}
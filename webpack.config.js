const path = require('path')
const HTMLwpp = require('html-webpack-plugin')

module.exports = {
 entry: './src/index.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
 },
 module: {
  rules: [
   {test: /\.(js)$/, use: 'babel-loader'},
   {test: /\.css$/, use: ['style-loader', 'css-loader']}
  ]
 },
 mode: 'development',
 plugins: [
  new HTMLwpp({
   template: 'src/index.html'
  })
 ]
}
import path from 'path'

export default {
 entry: path.join(__dirname, 'client/index.js'),
 output: {
  path: '/'
 },
 mode: 'development',
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    include: path.join(__dirname, 'client'),
    loaders: ['babel-loader']
   }
  ]
 },
 resolve: {
  extensions: ['.js']
 }
}
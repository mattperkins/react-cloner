import path from 'path'

export default {
 entry: path.join(__dirname, 'client/index.js'),
 output: {
  path: '/'
 },
 mode: 'development',
 module: {
  loaders: [
   {
    test: /\.js$/,
    include: path.join(__dirname, 'client'),
    loaders: ['babel']
   }
  ]
 },
 resolve: {
  extensions: ['', '.js']
 }
}
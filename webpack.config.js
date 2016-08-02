module.exports = {
  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + "/public/",
    publicPath: "/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
const path = require('path');

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: 'handler.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/
  }
};
var path = require('path');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

// The renderer can also include css and images. We don't need these for the main process
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})
rules.push({
  test: /\.(png|jpg)$/,
  loader: 'url-loader'
})

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    // Allowed file extensions
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    // Add import aliases. Also add these to tsconfig to  prevent linter errors
    alias: {
      rendererUtils: path.resolve(__dirname, 'src/renderer/utils'),
      shared: path.resolve(__dirname, 'src/shared'),
      sharedUtils: path.resolve(__dirname, 'src/shared/utils'),
      css: path.resolve(__dirname, 'src/css'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
}

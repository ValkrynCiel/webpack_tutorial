/**
 * webpack's entry point usually imports all other dependencies - webpack will start from this file
 * output - specify the name of the file that will be generated and path to the directory where the file will be generated
 * webpack will automatically create the folder if it doesn't exist
 * webpack will check rules to import different types of files -- for jpg and png we will use file-loader
 * webpack can load .js files automatically
 * publicPath tells Webpack where all generated files are located
 */

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
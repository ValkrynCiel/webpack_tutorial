/**
 * webpack's entry point usually imports all other dependencies - webpack will start from this file
 * output - specify the name of the file that will be generated and path to the directory where the file will be generated
 * webpack will automatically create the folder if it doesn't exist
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filname: 'bundle.js',
    path: './dist',
    mode: 'none'
  }
}
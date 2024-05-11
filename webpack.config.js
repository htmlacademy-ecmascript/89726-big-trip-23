const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [
      new CopyWebpackPlugin({
          patterns: [
              { from: 'public', to: '.' }
          ]
      })
  ],
    devtool: 'source-map',
    mode: 'development',
};

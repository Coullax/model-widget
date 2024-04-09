const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
 // ...
 plugins: [
    new CleanWebpackPlugin(),
 ],
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
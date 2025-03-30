const webpack = require('webpack');

module.exports = {
  // ... other configurations ...
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  resolve: {
    fallback: {
      process: require.resolve('process/browser'),
    },
  },
};

const apiUrl = process.env.REACT_APP_API_URL; // For Create React App
console.log('API URL:', apiUrl); 
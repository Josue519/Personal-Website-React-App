module.exports = {
  style: {
    modules: {
      auto: true,
      localIdentName: '[name]__[local]--[hash:base64:5]'
    },
    postcss: {
      plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009'
          },
          stage: 3
        })
      ]
    }
  },
  babel: {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: ['@babel/plugin-transform-runtime']
  },
  eslint: {
    enable: true,
    mode: 'file'
  },
  webpack: {
    configure: {
      output: {
        publicPath: '/'
      },
      devServer: {
        historyApiFallback: true,
        allowedHosts: 'all'
      }
    }
  }
}; 
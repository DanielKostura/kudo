// @ts-check
const path = require('path');
const webpack = require('webpack');

/**
 * @type { import('webpack').Configuration }
 */
module.exports = {
  entry: {
    // 'client/js/main': './src/client/client.ts'
    // 'client/js/main': './src/client/Index.tsx'
    // 'client/js/vendor': ['react', 'react-dom']
    main: './src/client/Index.tsx'
  },
  output: {
    filename: '[name].js',
    jsonpFunction: 'webpackJsonpKudoz',
    path: path.join(__dirname, 'dist/client/js')
    // chunkFilename: 'client/js/[name].js'
  },
  mode: 'none',
  devtool: 'source-map',
  watch: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  stats: {
    colors: true,
    entrypoints: true
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  optimization: {
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true
        },
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    },
    runtimeChunk: 'single'
  }
  /*,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }*/
};

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const nodeExternals = require('webpack-node-externals');

const path = require('path');

module.exports = [
  {
    entry: './src/client/index.js',
    output: {
      path: './build/client',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css?importLoaders=1!postcss'
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.svg$/,
          loader: 'file',
          query: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    plugins: [
      new InterpolateHtmlPlugin({
        PUBLIC_URL: ''
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: './src/client/public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: { warnings: false },
      //   mangle: true,
      //   sourcemap: false,
      //   beautify: false,
      //   dead_code: true
      // })
    ],
    postcss: function() {
      return [
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ]
        }),
      ];
    }
  },
  // {
  //   target: 'node',
  //   entry: './src/server/index.js',
  //   output: {
  //     path: './build/server',
  //     filename: 'bundle.js'
  //   },
  //   externals: [nodeExternals()],
  //   module: {
  //     loaders: [
  //       {
  //         test: /\.(js|jsx)$/,
  //         exclude: /node_modules/,
  //         loader: 'babel'
  //       }
  //     ]
  //   },
  // }
];

var path = require('path')
var webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // entry: './src/main.js',
	entry: {
		bundle: [
				'./src/main.scss',
				'./src/main.js',
			],
	},
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'vue-style-loader',
					use: ['css-loader','sass-loader'],
					publicPath: '/dist'
				})
			},
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '/fonts/[name].[ext]',
					},
				},
				exclude: [
					'./src/assets/svgs/',
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '/assets/[name].[ext]?[hash]'
				}
			}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
	plugins: [
		new ExtractTextPlugin({
			filename: "main.css",
			disable: false,
			allChunks: true
		}),
	],
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

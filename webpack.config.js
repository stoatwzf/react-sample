const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
	entry: './src/index.js',
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
						plugins: ['transform-class-properties']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new CleanWebpackPlugin(['./dist'])
	],
	devServer: {
		contentBase: './dist',
		port: '8181'
	},
	mode: 'production'
};

module.exports = config;
var webpack = require('webpack');
module.exports = {
	devtool:'source-map',
	entry :['./src/index.js'],
	output :{
		path:__dirname,
		filename:'bundle.js'
	},
	module :{
		loaders :[{
				exclude: /node_modules/,
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			},{ 
				test: /\.less$/,
				loader: 'style!css!less'
			},
		]
	},
	plugins :[
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer:{
        colors:true,
        historyApiFallback:true,
        inline:true,
        hot:true
    }
}
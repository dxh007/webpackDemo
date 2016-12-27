var webpack=require('webpack');
module.exports={
	entry:{
		app:'./main.js',
		//vendor:['jquery']
	},
	output:{
		filename:'bundle.js'
	},
	plugins:[
		//new webpack.optimize.CommonsChunkPlugin(/* chunkname= */'vendor',/* filename */'vendor.js') 
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery:'jquery',
			'window.jQuery':'jquery'
		})
	]
};


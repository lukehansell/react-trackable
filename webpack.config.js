module.exports = {
	entry: "./demo/demo.js",
	output: {
		path: __dirname + "/demo",
		filename: "built.js"
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
	  ]
	}
}
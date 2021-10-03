module.exports = {
    entry: {
        index: './src/app/index.js',
        listar: './src/app/list.js',
      },
    output: {
        path: __dirname + '/src/public',
        filename: '[name].bundle.js'
    },
    module:{
        rules: [
            {
                use: {
                    loader: "babel-loader"
                  },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};

var config = {
    entry: './main.js',

    output: {
        path: '/dist',
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        port: 8888
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['react']
                }
            }
        ]
    }
}

module.exports = config;
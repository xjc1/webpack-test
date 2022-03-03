const path = require('path')
module.exports = {
    entry: './src/main.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css|less$/i,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath:'img',
                        name:'[name]_[hash:8].[ext]'
                    }
                }
            },
        ]
    }
}

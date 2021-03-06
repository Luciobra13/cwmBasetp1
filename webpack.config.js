const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
         template: 'public/index.html',
         title: 'titulo', 
        }),
        new VueLoaderPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }
        ]
    }

}
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports={
    resolve:{
        extensions:['.vue','.js'],
        alias:{
            '~':path.resolve(__dirname,'src')
        }
    },
    entry: './src/main.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        publicPath:'/',
        clean: true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },

            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.s?css$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]

    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template:'./src/index.html'
        }),
        new CopyPlugin({
            patterns:[
                { from:'static' }
            ]
        }),
        new Dotenv({
            systemvars: true,

        })

    ],
    devServer:{
         //port: 1234 기본이 8080
         historyApiFallback:true
    }
}
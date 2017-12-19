/**
 * 项目开发环境配置文件
 */
var path = require('path')
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // entry:path.resolve(__dirname,'src/js/app.js'),
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
    },

    module: {
        loaders: [
            // 处理jsx语法和ES6语法
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
                query: {
                    presets: ['es2015', 'react','stage-0','stage-1','stage-2','stage-3']
                }
            },

            // 处理在js中引用css
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // 如果有多个加载器，中间作用感叹号隔开，多个加载器是从右往左去执行
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // 1kb=1024b 1b=8bit   25000bit~3kb
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=25000'
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url'
            }
        ]
    },
        // webpack-dev-server的一些配置信息
        devtool: 'eval',
        devServer: {
            contentBase: __dirname + '/src', // 当前服务器监听的路径
            hot: true,  // 热更新
            port:8080,  // 定义端口号
            host: 'localhost',
            open:true,    // 是否自动打开浏览器
            openPage:''
        },

    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]

}




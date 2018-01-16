/*
* @Author: Administrator
* @Date:   2018-01-16 14:33:45
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-16 14:48:44
*/

var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//环境变量的配置，dev / online
var WEBPACK_ENV        = process.env.WEBPACK_ENV || 'dev';

//获取HtmlWebpackPlugin参数的方法
var getHtmlPlugin = function(name, title){
    return {
        template: './src/view/'+ name +'.html',    //html原始的模板
        filename: 'view/'+ name +'.html',    //目标文件的位置，以output中的path作为相对路径,也就是打包之后存放的路径和文件名
        title: title,
        inject: true,   //自动添加js和css
        hash: true, //给css加版本号
        chunks: ['common', name] //需要打包的模块，对应的是entry中的js模块
    };
};

//webpack config
var config =  {
     entry: {
        'common':               ['./src/page/common/index.js'],
        'simditor':                ['./src/page/simditor/index.js'],
     },
     output: {
         path: './dist',    //存放文件的路径，最终生成文件的目录
         // publicPath: '/cfmall-frontend/dist/',    //访问文件所用的路径
         // publicPath: '/',    //访问文件所用的路径，这里改变的是打包后加载资源的路径，如果改成这样，就相当于把所有资源放到了根目录下，html会直接从/css/下进行访问
         publicPath: '/dist/',    //访问文件所用的路径，测试的时候放在dist目录下，打包的时候放在/下
         filename: 'js/[name].js'
     },
     externals: {
        'jquery': 'window.jQuery'
     },
     plugins: [
        //独立通用模块到dist/js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common', //对应入口中的common
            filename: 'js/base.js'   //输出的name
        }),
        //打包css到单独文件
        new ExtractTextPlugin("css/[name].css"),
        //处理html模板
        new HtmlWebpackPlugin(getHtmlPlugin('simditor', 'simditor测试')),
     ],
    module: {  
        loaders: [  
            {  
                test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader")  //样式的处理
            },  
            {  
                test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: "url-loader?limit=100&name=resource/[name].[ext]"
                //图片和字体文件的处理，字体文件放在node_modules中
            },
            {
                test: /\.string$/, 
                loader: 'html-loader'
            }
        ]  
    },
    resolve: {
        alias: {
            node_modules: __dirname + '/node_modules',
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/images'
        }
    } 
 };

 if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8066/');
 }
 module.exports = config;
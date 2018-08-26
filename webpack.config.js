//引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
const path = require('path')
//生成html模板
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
//    入口    4.x中默认的entry是src/index.js
//     entry:{
//         app:path.join(__dirname,'../src/index.js')        //index.js作为打包的入口
//     },
    mode:'development',     //development  开发环境     production  生产环境
//    输出目录      4.x中默认输出目录是dist/main.js，打包好的main.js托管到内存中，在项目根目录中看不到
//     output:{
//         filename:'[name].[hash].js',    //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
//         path:path.join(__dirname,'../dist'),    //打包好的输出路径
//         publicPath:''   // 静态资源文件引用时的路径（加在引用静态资源前面的）
//     },
    //第三方模块匹配规则
    module:{
        rules:[
            {
              test:/.(js|jsx)$/,
              loader:'babel-loader',
              exclude:/node_modules/,
              query:{
                presets:['env','stage-0','react'],
                plugins:['transform-decorators-legacy','transform-decorators']
              }
            },{
                test:/.css$/,
                use:['style-loader','css-loader']
            },{
                test:/.(jpg|png|svg)$/,
                use:'url-loader'
            },{
                test:/.scss$/,
                use:['style-loader','css-loader','sass-loader']      //从右往左调用，modules表示为css启用模块化，css模块化只对id，类选择器生效
            },{
                test:/.less$/,
                use:['style-loader','css-loader','less-loader']      //从右往左调用，modules表示为css启用模块化，css模块化只对id，类选择器生效
            }
        ]
    },
//    插件
    plugins:[
        new HTMLPlugin({
            template: path.join(__dirname,"./src/index.html"),      //源文件
            filename:"index.html"         //生成的内存中首页名称
        }),
    ],
    resolve:{
        extensions:['.js','.jsx','.json'],   //这几类文件后缀可省略，默认从左到右补全
        alias:{
            '@':path.join(__dirname,'./src')        //@符号表示项目根目录中src目录
        }
    }
}
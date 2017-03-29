'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:' + defaultSettings.port,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        })
    ],
    module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loader: 'react-hot!babel-loader',
    include: [].concat(
        config.additionalPaths, [path.join(__dirname, '/../src')]
    ),

});
// 设置 antd-mobile 按需加载--->没有成功
// config.babel.plugins.push(["import", { "libraryName": "antd-mobile" }])
    // 设置 成功的是：.babelrc文件添加以下配置
    // {"plugins": [["import", { "libraryName": "antd-mobile" }]]}

// 添加代理
// config.devServer = {
//     proxy: {  
//         '/test': {  
//             target: '0.0.0.0',  
//             secure: false
//         }  
//     }
// }

// config.devServer = {  
//     contentBase: './src/',
//     publicPath: '/assets/',
//     historyApiFallback: true,
//     hot: true,
//     inline: true,
//     port: 8000,
//     host: '0.0.0.0'
// } 



module.exports = config;
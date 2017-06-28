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
        './src/index',
    ],
    cache: true,
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        }),
        // 添加全局变量:变量未被赋值的话，就会自动加载该设置的模块来赋值到变量
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            Map: 'immutable',
            // browserHistory: 'react-router' //不能使用包内的对象
        })
    ],
    module: defaultSettings.getDefaultModules(),

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



module.exports = config;
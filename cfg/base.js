'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

require('react')

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];

// let additionalPaths = [path.join(__dirname, '../node_modules')];
let additionalPaths = [];

module.exports = {
    additionalPaths: additionalPaths,
    port: defaultSettings.port,
    debug: true,
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/../dist/assets'),
        filename: 'app.js',
        publicPath: defaultSettings.publicPath
    },
    devServer: {
        contentBase: './src/',
        historyApiFallback: true,
        hot: true,
        port: defaultSettings.port,
        publicPath: defaultSettings.publicPath,
        noInfo: false,
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:9999',
                pathRewrite: { "^/api": "" }
            },
            '/zhenai/*': {
                // target: 'http://m.zhenai.com/v2/personal/getRecommandUserInfos.do?pageNo=3&pageSize=10',
                target: 'http://m.zhenai.com',
                pathRewrite: { "^/zhenai": "" }
            },
        }
    },
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.jsx', '.json'],
        alias: {
            actions: `${defaultSettings.srcPath}/actions/`,
            components: `${defaultSettings.srcPath}/components/`,
            sources: `${defaultSettings.srcPath}/sources/`,
            stores: `${defaultSettings.srcPath}/stores/`,
            styles: `${defaultSettings.srcPath}/styles/`,
            config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
            'react/lib/ReactMount': 'react-dom/lib/ReactMount',
            // 'antd-mobile': `../node_modules/antd-mobile`
        }
    },
    module: {},
    // 从外部引入JS <script>。。。</script> 后，为该外部库设置变量；
    // externals: {
    //     'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'three': 'THREE' //TODO 解决 公共的库作为外部库引入 来读取一次
    // },
    // externals: [{
    //     react: 'React'
    // }]
    externals: {
        '../src/js/libs/react.min.js': 'React',
        '../src/js/libs/react-dom.min.js': 'ReactDOM',
        // '../src/js/build/three.js': 'THREE'
    }
};
const { resolve } = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ServerConfig = require('./server/config.js');
module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './src/index.jsx'
    ],
    output: {
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    // devtool: 'inline-source-map',
    devtool: 'eval',
    devServer: {
        port: 9001,
        hot: true,
        historyApiFallback: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        proxy: {
            '/interface/*': {
                target: 'http://localhost:' + ServerConfig.web_default_port,
                secure: false
            },
            '/api/*': {
                target: 'http://127.0.0.1:4000',
                // pathRewrite: { "^/api": "" } // 此处不能重置API，因为真实的API 也是有 api 字段的
            }
        }
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: resolve(__dirname, 'src')
            },
            {
                test: /\.(jsx|js)$/,
                enforce: 'pre',
                loader: 'eslint-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                    publicPath: '/'
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                    publicPath: '/'
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192&name=[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            test: /(\.jsx|\.js)$/,
            compress: { warnings: false },
            minimize: true,
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            moment: 'moment',
            reqwest: 'reqwest',
            echarts: 'echarts',
            $: 'n-zepto',
            Mock: 'mockjs',
            _: 'lodash'
        }),
        // new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.DefinePlugin({
            //'process.env.NODE_ENV': '"production"'
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({
            filename: 'styles.[hash:8].css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            title: '功率预测监测管理系统',
            template: resolve(__dirname, 'src', 'index.html'),
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunksSortMode: 'dependency'
        }),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        echarts: 'echarts'
    },
    resolve: {
        extensions: ['.js', '.css', '.jsx']
    }
};
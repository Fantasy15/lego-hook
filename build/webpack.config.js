/**
 * @file webpack.config.js
 * @description webpack 基础配置
 */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('./babel.config');
const WebpackBar = require('webpackbar');

module.exports = (env) => {

    let isDev = env === 'dev';

    return {
        context: path.resolve(__dirname, '../'),
        output: {
            publicPath: '/',
            path: path.resolve(`dist`),
            filename: `[name].js`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: babelConfig
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')]
                            }
                        },
                        'less-loader',
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [{
                        loader: 'svg-sprite-loader',
                    }],
                },
                {
                    test: /\.(jpeg|jpg|png|gif|woff|ttf)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: `images/[name].${isDev ? '' : '.[hash:8]'}.[ext]`,
                    }
                }
            ]
        },
        plugins: [
            new WebpackBar()
        ],
        resolve: {
            // 配置别名，在项目中可缩减引用路径，大写防止混淆
            alias: {
                Packages: path.resolve('./packages'),
            }
        },
        stats: {
            children: false,
            modules: false
        }

    }
}
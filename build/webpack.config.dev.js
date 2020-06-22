/**
 * @file webpack.config.dev.js
 * @description webpack 开发环境配置文件, 启动了devServer
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const WebpackBar = require('webpackbar');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return merge(baseConfig('dev'), {
        mode: 'development',
        entry: {
            'lego-hooks': './examples/index.js',
        },
        devtool: 'inline-source-map',
        plugins: [
            new HtmlWebPackPlugin({
                filename: `./index.html`,
                template: path.resolve(`./examples/index.html`),
            })
        ],
        performance: {
            hints: false
        }
    });
};
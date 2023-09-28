const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    module: {
        rules: [
            {test: /\.ts$/i, use: 'ts-loader'},
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.html$/i,
              use: 'html-loader',
          },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new MiniCssExtractPlugin({
          filename: 'style.[contenthash].css',
        }),
        new EslingPlugin({
          extensions: 'ts',
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};

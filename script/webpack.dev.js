const webpackBase = require('./webpack.base.conf');

module.exports = {
    // 配置源码显示方式
    devtool: 'eval-source-map',
    mode: 'development',
    resolve: webpackBase.resolve,
    module: webpackBase.module,
    stats: webpackBase.stats,
    // cache: webpackBase.cache,
    optimization: webpackBase.optimization,
    plugins: [
        webpackBase.plugins.cleanWebpack,
        webpackBase.plugins.html,
        webpackBase.plugins.miniCssExtract,
        webpackBase.plugins.esLint,
        webpackBase.plugins.ContextReplacementPlugin,
        webpackBase.plugins.DefinePlugin,
        webpackBase.plugins.AntdDayjsWebpackPlugin,
        webpackBase.plugins.HotModuleReplacementPlugin
        // webpackBase.plugins.bundleAnalyzer
    ],
    devServer: webpackBase.devServer,
    watchOptions: webpackBase.watchOptions
    // externals: webpackBase.externals
};

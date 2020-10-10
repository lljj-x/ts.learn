/**
 * Created by Liu.Jun on 2019/10/25 15:42.
 */

module.exports = {
    configureWebpack: (config) => {
        debugger;
    },

    // webpack 链接 API，用于生成和修改 webpack 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: (config) => {
        debugger;
        // 添加runtime
        // config.optimization.runtimeChunk({
        //     name: 'user-runtime'
        // });

        // 指定文件提取
        // const splitConfig = {
        //     cacheGroups: {
        //         vendors: {
        //             name: 'user-vendors-polyfill',
        //             chunks: 'initial',
        //             priority: 12,
        //             test: module => /[\\/]node_modules[\\/]/.test(module.context) && /@gb|vue|vuex|vue-router/.test(module.context),
        //         },
        //         elementUi: {
        //             name: 'user-element-ui',
        //             chunks: 'initial',
        //             priority: 10,
        //             test: module => /[\\/]node_modules[\\/]/.test(module.context) && /element-ui/.test(module.context),
        //         },
        //         asyncVendor: {
        //             name: 'chunk-vendors-async',
        //             chunks: 'async',
        //             priority: 8,
        //             minChunks: 5,
        //         }
        //     }
        // };
    },
};

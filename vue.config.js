const path = require("path")

module.exports = {
    // 打包路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        port: 1028,
        proxy: {
            '/api': {
                target: 'http://172.16.6.130:8080/oxer',
                pathRewrite: {'^/api': ''},
            }
        }
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    
}
// 全局加载less 文件
function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/lessConfig.less'),
            ],
        })
}
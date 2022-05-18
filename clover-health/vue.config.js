const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://gamematrix.qq.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo':{
        target:'http://apis.juhe.cn',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/foo':''
        }
      },
      // http://pv.sohu.com
      '/api':{
        target:'http://pv.sohu.com',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
    }

  }
})

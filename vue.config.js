const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// 定义页面title
const name = 'study-arcgis'

module.exports = {

  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/study-arcgis/' : '',

  lintOnSave: false,

  outputDir: 'docs',
  productionSourceMap: false,

  devServer: {
    port: 9090,
    proxy: {
      '/mock': {
        target: `http://localhost:3000`,
        changeOrigin: true,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  },

  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  css: {
  },

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },

  },

}

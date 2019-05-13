module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://127.0.0.1:7001/',
        target: 'http://www.alfxjx.club/api-blog/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

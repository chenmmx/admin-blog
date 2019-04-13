module.exports = {
  devServer: {
    proxy: {
      '/v2': {
        target: 'http://192.168.1.213:20000',
        changeOrigin: true,
        pathRewrite: {
          '^/v2': '/v2'
        }
      },
      '/cos': {
        target: 'http://192.168.1.213:10099/test.php',
        changeOrigin: true,
        pathRewrite: {
          '^/cos': ''
        }
      },
      '/upload': {
        target: 'https://chobits-maintain-1258572138.cos.ap-chengdu.myqcloud.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': '/'
        }
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? 'https://chobits-maintain-1258572138.cos.ap-chengdu.myqcloud.com/'
    : '/'
}

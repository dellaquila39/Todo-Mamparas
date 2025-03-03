module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
  chainWebpack: (config) => {
    // optimiza las imagenes para mejorar el rendimiento
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({
        ...options,
        limit: 4096, 
        name: 'img/[name].[hash:8].[ext]', 
        esModule: false 
      }))
      .end()
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        disable: process.env.NODE_ENV !== 'production',
        webp: {
          quality: 75
        },
        mozjpeg: {
          quality: 75
        }
      });
  }
}
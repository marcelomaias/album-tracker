// vue.config.js
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/vue-album-tracker-prod/' : '/',
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => Object.assign(options, {
              transformAssetUrls: {
                 'v-img': ['src', 'lazy-src'],
                 'v-card': 'src',
                 'v-card-media': 'src',
                 'v-responsive': 'src',
                 'v-parallax': 'src',
                  //...
              }
              }))
    }
      //...
   }
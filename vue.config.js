
/**
 * Vue library can be external only when it's not development mode
 * To use hot-reload for development, Vue has to be a part of chunk-vendors, but not externals
 */
const externals = ['single-spa-vue', 'single-spa']
if (process.env.NODE_ENV !== 'development') {
  externals.push('vue')
}

module.exports = {
  configureWebpack: {
    externals: externals,
    output: {
      libraryTarget: 'system'
    }
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
}

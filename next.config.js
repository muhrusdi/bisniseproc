const withCss = require('@zeit/next-css')
const withImages = require('next-images')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss(
  withImages(
    {
      exportPathMap: function(defaultPathMap) {
        return {
          '/': { page: '/' },
          '/blog': { page: '/blog' },
          '/post': { page: '/post' }
        }
      }
    }
  )
)
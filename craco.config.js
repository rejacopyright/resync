const path = require('path')
module.exports = {
  style: {
    modules: {
      localIdentName: '[path][name]__REJAJAMIL__[hash:base64:5]',
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/_components'),
      '@layouts': path.resolve(__dirname, 'src/_layouts'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@helpers': path.resolve(__dirname, 'src/_helpers'),
      '@api': path.resolve(__dirname, 'src/_api'),
      '@images': path.resolve(__dirname, 'src/_assets/images'),
      '@font-icon': path.resolve(__dirname, 'src/_assets/font-icon'),
      crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'),
      stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
    },
    fallback: {
      crypto: false,
    },
  },
}

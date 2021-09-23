const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
     .set('@', resolve('src'))
     .set('asstes', resolve('src/asstes'))
     .set('components', resolve('src/components'))
     .set('view', resolve('src/view'))
  },
  publicPath:'/',
  outputDir:'dist',
  lintOnSave : true,
}
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/minecraft_project2/'
    : '/',
    filenameHashing: false,
}
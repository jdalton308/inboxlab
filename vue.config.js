
const path = require('path');


module.exports = {
  // devServer: {
  //   https: true,
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/scss/variables";',
      }
    }
  }
};

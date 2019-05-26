const path = require('path')

module.exports = {
  plugins: ['@vuepress/register-components', {
    componentsDir: [
      path.resolve(__dirname, 'components')
    ]
  }]
}

// import Vue from 'vue'
// import VueAnalytics from 'vue-analytics'

// Vue.use(VueAnalytics, {
//   id: 'UA-133170751-8'
// })

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,

  // This function expects a template as a parameter to be compiled, in this case 'App'.
  // The Vue instance is being built on an element with 'app' id in the index.html.
  render: h => h(App)
}).$mount('#app')

// VUE
import Vue    from 'vue'
import App    from '@/App.vue'
import router from '@/router'
import store  from '@/store'

// BULMA CSS
import 'bulma/css/bulma.css'

// CONFIG
Vue.config.productionTip = false

// APP
new Vue({
  router,
  store,
  render: h => h( App )
}).$mount( '#app' )

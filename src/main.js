// VUE
import Vue    from 'vue'
import App    from '@/App'
import router from '@/router'
import store  from '@/store'

// BULMA CSS
import 'bulma/css/bulma.css'

// UTILS
import directives from '@/directives.js'

// CONFIG
Vue.config.productionTip = false

// APP
new Vue({
  router,
  store,
  render: h => h( App ),
  created() {
    this.$store.dispatch( 'snippets' )
  }
}).$mount( '#app' )

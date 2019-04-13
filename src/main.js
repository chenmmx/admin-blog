import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import service from '@/service'
import ElementUI from 'element-ui'

import ChControlbar from './components/common/ChControlbar'
import ChTitle from './components/common/ChTitle'
import ChSearch from './components/common/ChSearch'
import ChContainer from './components/common/ChContainer'
import ChForm from './components/common/ChForm'
import ChOperate from './components/common/ChOperate'
import ChButtongroup from './components/common/ChButtongroup'

Vue.prototype.$http = service
Vue.use(ElementUI)

Vue.component(ChControlbar.name, ChControlbar)
Vue.component(ChTitle.name, ChTitle)
Vue.component(ChSearch.name, ChSearch)
Vue.component(ChContainer.name, ChContainer)
Vue.component(ChForm.name, ChForm)
Vue.component(ChOperate.name, ChOperate)
Vue.component('ch-button-group', ChButtongroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

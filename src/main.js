import 'es6-promise/auto'
import { createApp } from 'vue'
import router from './router'
import store from 'store'
import elementui from 'components/elementui'
import { commonInfoMixin } from 'common/js/mixin'
import App from './App.vue'
import 'common/stylus/index.styl'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(elementui)
app.mixin(commonInfoMixin)
app.mount('#app')

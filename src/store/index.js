import { createStore, createLogger } from 'vuex'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import user from './modules/user'

const debug = !import.meta.env.PROD

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
import * as types from './mutation-types'

const mutations = {
  [types.TOGGLE_MENU_COLLAPSE] (state) {
    state.isCollapse = !state.isCollapse
  },
  [types.TOGGLE_REQUEST_STATUS] (state, status) {
    state.isRequesting = status
  }
}

export default mutations
import * as types from './mutation-types'

export const oneAction = ({ commit }, { data }) => {
  commit(types.AAA, data)
}
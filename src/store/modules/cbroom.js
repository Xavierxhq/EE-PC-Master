import types from '@/store/types'

const state = {
  cbcourses: [],
  cbroomState: 1
}

const getters = {
  cbcourses: state => state.cbcourses,
  cbroomState: state => state.cbroomState
}

const actions = {

}

const mutations = {
  //给数组添加元素
  [types.ADD_CBROOM_MICROLECTURE](state, courses) {
    courses.forEach(item => {
      state.cbcourses.push(Object.freeze(item))
    })
  },
  //更新课程类别
  [types.UPDATE_CBROOM_ISDONE](state, cbroomState) {
    state.cbroomState = cbroomState;
  },
  //清空数组
  [types.CLEAR_CBROOM_CBROOM](state) {
    state.cbcourses.splice(0,state.cbcourses.length)
    state.cbroomState = 1
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
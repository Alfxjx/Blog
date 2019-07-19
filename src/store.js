import Vue from 'vue'
import Vuex from 'vuex'
import { getCategory, getList, getTag, top } from './api/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogList: [],
    topCount: [],
    topLike: [],
    topComment: [],
    categoryList: [],
    tagList: [],
    username: '',
    avatar: '',
    _id: '',
    isLogin: false,
    showLoading: false
  },
  mutations: {
    getBlogList(state, list) {
      state.blogList = list
    },
    getTopCount(state, list) {
      state.topCount = list
    },
    getTopLike(state, list) {
      state.topLike = list
    },
    getTopComment(state, list) {
      state.topComment = list
    },
    getCategoryList(state, list) {
      state.categoryList = list
    },
    getTagList(state, list) {
      state.tagList = list
    },
    userInfo(state, payload) {
      Object.assign(state, payload)
    },
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    }
  },
  actions: {
    async getBlogList({ commit }) {
      const list = await getList()
      commit('getBlogList', list)
    },
    async getTopCount({ commit }, payload) {
      const list = await top(payload)
      commit('getTopCount', list)
    },
    async getTopLike({ commit }, payload) {
      const list = await top(payload)
      commit('getTopLike', list)
    },
    async getTopComment({ commit }, payload) {
      const list = await top(payload)
      commit('getTopComment', list)
    },
    async getCategoryList({ commit }) {
      const list = await getCategory()
      commit('getCategoryList', list)
    },
    async getTagList({ commit }) {
      const list = await getTag()
      commit('getTagList', list)
    },
    userInfo({ commit }, payload) {
      commit('userInfo', payload)
    }
  }
})

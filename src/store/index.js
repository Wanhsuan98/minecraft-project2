import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    token: null,
    texts: []
  },
  getters: {
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setTexts(state, payload) {
      state.texts = payload
    }
  },
  actions: {
    async Login({ commit }, user) {
      console.log(user)
      try {
        const res = await fetch('http://localhost:5002/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        const resDB = await res.json()
        console.log(resDB.token);
        commit('setToken', resDB.token)
        localStorage.setItem('token', resDB.token)

        return router.push({ path: '/' })
      } catch (error) {
        console.log(error);

      }
    },
    readToken({ commit }) {
      if (localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    },
    async logout({ commit }) {
      try {
        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:5002/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        const clear = await res.json()
        localStorage.removeItem('token')
        console.log(clear);
        return router.push({ path: '/' })

      } catch (error) {
        console.log("error")
      }
    },
    async getTexts({ commit }) {
      try {
        const res = await fetch('http://localhost:5002/api/latestnews')
        const data = await res.json()
        commit('setTexts', data)
      } catch (error) {
        console.log("error");
      }
    }
  },
  modules: {
  }
})

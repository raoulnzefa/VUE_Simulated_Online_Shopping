import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

const state = {
    flag:'Vuex flag'
};

const actions = {
    action1 : ({commit, state}) => { commit('mutationMethod1')}
}

const mutations = {
    mutationMethod1 : (state) => {
        state.flag = 'mutations flag'
    }
}

const store =  new vuex.Store({
    state,
    mutations,
    actions
})

export default store;
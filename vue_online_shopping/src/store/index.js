import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

const state = {
    //Data for test
    flag:'Vuex flag',
    count:1,
    isShowNav: true,
    menu: ['File', 'Edit', 'Debug', 'Run'],
    x:0,
    y:0
};

//Computed attribute
var getters = {
    multiple () {
        return state.x * state.y;
    },
    devide(){
        let r = null;
        if (state.y !=0 ) r = state.x/state.y;
        return r;
    }
};

//Manage mutation
const actions = {
    action1 : ({commit, state}) => { 
        commit('mutationMethod1')
    },

    add : ({commit, state}) => {
        commit('add');
        state.isShowNav = true;
    },

    minus: ({commit, state}) => {
        state.isShowNav=false;
        if(state.count > 2) {
            commit('minus')
        }else{
            state.isShowNav = true;
        }
    },

    hideNav: ({commit, state}) => {
        commit ('hideNav')
    },

    showNav:  ({commit, state}) => {
        commit ('showNav')
    }
}

//Changing state
const mutations = {
    mutationMethod1 : (state) => {
        state.flag = 'mutations flag'
    },

    add:(state) => {
        state.count++
    },
    
    minus: (state) => {
        state.count--;        
    },

    hideNav: (state) => {
        state.isShowNav = true;
    },

    showNav: (state) => {
        state.isShowNav = false;
    }


}

const store =  new vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;
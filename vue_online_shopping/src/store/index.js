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
    y:0,
    //Data for Cart
    addCartData:[]

};

//Computed attribute
var getters = {
    //For vuex exercise
    multiple () {
        return state.x * state.y;
    },
    devide(){
        let r = null;
        if (state.y !=0 ) r = state.x/state.y;
        return r;
    },

    //For cart
    cartData(state){
        // cache:false;
        return state.addCartData;
    }
};

//Manage mutation
const actions = {
    //Actions for exercise
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
    },

    //Actions for cart management
    
    cartAdd : ({commit, state}, data) => {
            commit('cartAdd', data)
    }

}

//Changing state
const mutations = {
    //Mutations for exercise
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
    },

    
    //Mutations for Cartmanagement
    cartAdd:(state,data) => {
        console.log('length of AddCartData: ',state.addCartData.length)
        if (state.addCartData.length.length > 0){
            let item = state.addCartData.filter(function(item){return item.product_id == data.product_id})[0];
            if (item){
                item.item_num++
            } else {
                state.addCartData.push(data);
            }
        } else {
            state.addCartData.push(data);
        }

        // state.addCartData.push(data);

        console.log('Mutation say: ',state.addCartData);
    }


}

const store =  new vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;
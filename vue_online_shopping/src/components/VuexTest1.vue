<template>
    <div>
        <div>
            <button @click="() => this.$router.push('/vuexTest2')">Go to Vuex test2</button>
        </div>

        <p>Category flag：{{$store.state.flag}}</p>
        <p>hello</p>
    
        <button @click="change()">click</button>
        <button @click="$store.commit('mutationMethod1')">Mutation</button>
        <button @click="$store.dispatch('action1')">Action Mutation</button>

        <div>======Add and Minus 1========</div>
        <div>
            <button @click="this.add">Add 1</button>
            <p>--</p>
            <button @click="this.minus">Minus 1</button>
            <div>Count: {{$store.state.count}}</div>
            <div v-show="$store.state.isShowNav">Can not less than 2</div>
        </div>

        <div>====Multiple x and y by getter========</div>
        <input v-model="$store.state.x" placeholder="Input x"> 
        <span> and y: </span>
        <input v-model="$store.state.y" placeholder="Input y"> 
        <br>
        <span>Multiple: {{multiple}} , devide: {{devide}}</span>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    components: {
        
    },
    methods:{
        change(){
            this.$store.state.flag = 'changed flag';
        },

        add(){
            this.$store.dispatch('add');
        },
        minus(){
            this.$store.dispatch('minus');
        }
    },

    computed:{
        ...mapGetters(['multiple','devide'])
    }
}
</script>
<template>
    <div>
        <p>Category flag：{{$store.state.flag}}</p>
        <p>hello</p>
    
        <button @click="change()">click</button>
        <button @click="$store.commit('mutationMethod1')">Mutation</button>
        
        <button @click="$store.dispatch('action1')">Action Mutation</button>
    </div>
</template>

<script>

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
        }
    }
}
</script>
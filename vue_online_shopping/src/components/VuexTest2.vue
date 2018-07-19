<template>
    <div>
        <div>{{$store.state}}</div>
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
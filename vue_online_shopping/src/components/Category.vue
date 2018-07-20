<template>
    <div>        
        <!-- this button is for exercising for vuex -->
        <!-- <button @click="() => this.$router.push('/vuexTest1')">click</button> -->
        <CategoryHead></CategoryHead>
        <CategoryMain></CategoryMain>

        
        
    </div>
</template>

<script>
import CategoryHead from './CategoryHead';
import CategoryMain from './CategoryMain'
export default {
    data() {
        return {
            
        }
    },
    components: {
        CategoryHead,
        CategoryMain
    },
    methods:{
       
    }
}
</script>
<style>
    @import '../assets/css/category.css';
</style>

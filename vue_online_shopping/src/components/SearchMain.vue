<template>
    <div class="search_page">
        <div class="h_layout">
            <div class="search_ma">
                <header class="top_bar">
                    <a href="window.history.go(-1)" class="icon_back"></a>
                    <form class="goods_search">
                        <input type="search" class="goods_search_content" 
                               placeholder="Search" v-model="keyword" @input="goSearch()">
                    </form>
                    <a href="#" class="icon_menu"></a>
                </header>

            </div>

        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            mDatas:[]           
        }
    },

    methods:{
        goSearch (type){

        }
    }

}
</script>

<style scoped>
    @import '../assets/css/searchpage.css';
</style>

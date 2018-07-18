<template>
    <div class='home_h'>
        <header class='m_header'>
            <div class="m_header_box" id="my_search">
                <a href="#" class="icon_logo"></a>
                <form action="#">
                    <span class="icon_search"></span>
                    <input type="search" class="search" placeholder="Search" @click="goSearch($event)" >
                </form>
                <router-link to="/login" class="logo_btn">Login</router-link>
            </div>

        </header>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },

    methods: {
        goSearch(){
            this.$router.push('/search');
        }
    }
}
</script>
<style>
    /* Style could be put in homeheader.css, or home.css, or index.css */
</style>

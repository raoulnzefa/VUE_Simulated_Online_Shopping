<template>
    <div>
        Mine Main
    </div>
</template>

<script>

export default {
    data() {
        return {
          info:{}  
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            if (window.sessionStorage.userInfo){

            }else{
                this.$router.push('/login');
            }
        }
    }
}
</script>
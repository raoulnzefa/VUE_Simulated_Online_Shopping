<template>
    <div id="cate_left">
        <div class="category_left">
            <ul class="childbox">
                <li :class="{active: item.flag}" v-for="(item, i) in leftData" @click="change(item, i)">
                    <router-link :to="'/category/' + item.category_id">
                    {{item.category_name}}
                    </router-link>
                </li>

            </ul>

        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            leftData: []
        }
    },

    mounted(){
        this.getData();
    },

    methods:{
        getData(){
            this.$http.get('/category').then((res) => {
                console.log(res);
                this.leftData = res.data;

                //Add a flag field for each category item, default set to false.
                for (let i =0; i<this.leftData.length; i++){
                    this.$set(this.leftData[i] , 'flag', false);
                }
            }, 
            (err) => {
                console.log(err);
            })
        },

        change(item, i){
            //debugger;
            for (let j=0; j<this.leftData.length; j++){
                this.$set(this.leftData[j], 'flag', false);
                if (j==i){
                    item.flag = true;
                }
            }
        }
    }
}
</script>
<style>
    .category_content .category_left ul li.active {
        background: #f60;
        text-align: center;
    }
</style>

<template>
    <div id="cate_right">
        <div class="category_right">
            <div class="category_banner">
                <a href="#">
                    <img src="../assets/images/banner_1.png" alt="">
                </a>
            </div>
            <div class="category_detail">
                <h3 class="category_n">Hot Category Goods</h3>
                <ul>
                    <li class="category_detail_item" v-for="item in RightData" :key="item.product_id">
                        <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
                            <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
                            <p class="category_detail_item_name">{{item.product_name}}</p>
                        </router-link>

                    </li>
                </ul>

            </div>

        </div>
        
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            RightData:[]
        }
    },

    mounted(){
        let id = this.$route.params.id;
        console.log(id);
        if (id) {
            this.getData(id);
        }
    },

    watch:{
        $route(to){
            console.log("watch",to.path);
            // this.getData(this.$route.params.id);
            let reg = /\/category\/\d+/;
            let regTest = reg.test(to.path);
            // debugger;
            if(regTest){
                let id= this.$route.params.id;
                this.getData(id);
            }
        }
    },

    methods:{
        getData(id){
            this.$http.get('/categorygoods', {
                params :{
                    mId:id
                }
            }).then((res) => {
                console.log(res);
                this.RightData = res.data;
            },
            (err) => {
                console.log(err);
            })
        }
    }
}


</script>

b- http://127.0.0.1:3333/categorygoods?mId=32
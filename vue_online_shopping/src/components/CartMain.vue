<template>


    <main class="cart_box">         
        <div class="cart_tip clearfix">
            <span>After logging in, you can synchronize your shopping cart with your computer</span>
            <a href="#" class="login">Login</a>
        </div>

        <div class="cart_content clearfix" v-for="item in cartData">
            <div class="cart_shop clearfix">
                <div class="cart_check_box">
                    <div class="check_ox">
                    </div>
                </div>
                <div class="shop_info clearfix">
                    <img src="../assets/images/buy-logo.png" alt="" class="shop_icon"> 
                    <span class="shop_name">{{item.shop_name}}</span>
                </div>

                <div class="cart_free clearfix">
                    <span class="check_tip">Coupon</span>
                </div>
            </div>
            <div class="cart_item">
                <div class="cart_item_box">
                    <div class="check_box">
                    </div>
                </div>
                <div class="cart_detail_box clearfix">
                    <a href="#" class="cart_product_link">
                        <img v-lazy='item.product_img_url' alt="">
                    </a>
                </div>

                <div class="item_names">
                    <a href="#">
                       <span>{{item.product_name}}</span>
                    </a>
		        </div>

            </div>

        </div>

               
    </main> 
</template>

<script>

// import {mapGetters, mapActions} from 'vuex';
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            

        }
    },

    mounted(){
        
    },
    components: {
        
    },

    // computed: {
    //     ...mapGetters(['cartData', 'multiple'])
    // },

    computed:{
        ...mapGetters(['multiple','cartData'])
    },

    methods:{
        mul(){
            this.$store.state.x =10;
        this.$store.state.y =2;
        // console.log('cart data: ', cartData);
        // console.log(multiple);
        }

    }
}
</script>

<style>
    @import '../assets/css/cart.css';
    

</style>

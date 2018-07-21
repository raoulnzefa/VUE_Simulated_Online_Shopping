<template>
		<main class="cart_box">
		    <div class="cart_tip clearfix" >
		        <span>Synchrise with computer after login</span>
		        <a href="#" class="login" >Login</a>
		    </div>
		    <div class="cart_content clearfix" v-for="item in cartData" >
		        <div class="cart_shop clearfix">
		            <div class="cart_check_box">
		                <div class="check_box"> 

		                </div>
		            </div>
		            <div class="shop_info clearfix">
		                <img src="../assets/images/buy-logo.png" alt="" class="shop_icon">
		                <span class="shop_name">{{item.shop_name}}</span>
		            </div>
		            <div class="cart_free clearfix">
		                <span class="free_tip">Coupons></span>
		            </div>
		        </div>
		        <div class="cart_item">
		            <div class="cart_item_box">
		                <div class="check_box">

		                </div>
		            </div>
		            <div class="cart_detial_box clearfix">
		                <a href="#" class="cart_product_link">
		                    <img v-lazy="item.product_img_url" alt="">
		                </a>
		                <div class="item_names">
		                    <a href="#">
		                        <span>{{item.product_name}}</span>
		                    </a>
		                </div>
		                <div class="cart_weight">
		                    <i class="my_weigth">weight:0.45kg</i>
		                    <span class="my_color">Color: AT800/16</span>
		                </div>
		                <div class="cart_product_sell">
		                    <span class="product_money">￥<strong class="real_money">{{item.product_uprice}}</strong>.00</span>
		                    <div class="cart_add clearfix">
		                        <span class="my_add" @click="numAddOne(item.product_id)">+</span>
		                        <input type="tel" class="my_count" v-model="item.item_num">
		                        <span class="my_jian" @click="numMinusOne(item.product_id)">-</span>
		                    </div>
		                </div>
		                <div class="cart_del clearfix" @click="showPop(item.product_id)">
		                    <div class="del_top" >
		                    </div>
		                    <div class="del_bottom">
		                    </div>
		                </div>
		            </div>
		        </div>
		      
		    </div>

		    <div class="pop" v-show="popStatus">
		    <div class="pop_box">
		        <div class="del_info">
		           Are you sure to delete the item？ 
		        </div>
		        <div class="del_cancel" @click="delCancel">
		            Cancel
		        </div>
		        <div class="del_ok" @click="delOk">
		            Ok
		        </div>
		    </div>
		</div>

		</main>
</template>

<script>
// import {mapGetters, mapActions} from 'vuex';
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
        popStatus: false,
        curId: null
    };
  },

  mounted() {},
  components: {},

  // computed: {
  //     ...mapGetters(['cartData', 'multiple'])
  // },

  computed: {
    ...mapGetters(["multiple", "cartData"])
  },

  methods: {
    mul() {
      this.$store.state.x = 10;
      this.$store.state.y = 2;
      // console.log('cart data: ', cartData);
      // console.log(multiple);
    },
    showPop(pruduct_id){
        this.popStatus =  true;
        this.curId =  pruduct_id;

    },

    ...mapActions(['numAddOne','numMinusOne', 'delAnItem']),
    goodIncrement(){

    },
    goodDecrement(){

    },
    delCancel(){
        this.popStatus =false;
    },
    delOk(){
        this.popStatus = false;
        this.delAnItem(this.curId);
    }

  }
};
</script>

<style>
@import "../assets/css/cart.css";
</style>

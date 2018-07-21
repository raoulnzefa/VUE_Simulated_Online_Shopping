<template>
    <div id="my_cart">
        <CartHeaderView></CartHeaderView>
        <CartMainView></CartMainView>
        <CartFooterView></CartFooterView>
    </div>
</template>

<script>

import CartHeaderView from './CartHeader.vue';
import CartMainView from './CartMain.vue';
import CartFooterView from './CartFooter.vue';
import {mapActions} from 'vuex';

export default {
    
    components: {
        CartHeaderView,
        CartMainView,
        CartFooterView
    },
    
    mounted(){
        // debugger;
        this.hideNav();
        console.log('show nav',this.$store.state.isShowNav);
    },
    
    

	destroyed(){
		this.showNav();
	},

	methods:{
		...mapActions(['hideNav','showNav']),
	}
}
</script>
<style>
    /* @import '../assets/css/detail.css'; */
    @import '../assets/css/cart.css';
</style>

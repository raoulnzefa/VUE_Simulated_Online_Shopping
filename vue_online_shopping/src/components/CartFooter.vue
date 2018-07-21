<template>
    <div class="car_fo">
        <footer class="cart_footer">
		    <div class="all_check_box">
		        <div class="check_box">

		        </div>
		        <span>Select All</span>
		    </div>
		    <div class="count_money_box">
		        <div class="heji">
		            <strong>Total:</strong> 
		            <strong>$</strong>
					<strong>{{cartTotal}}</strong>
		        </div>
		        <div class="total_money clearfix">
		            <span>Total amount:</span>
		            <i>$</i>
		            <span>{{cartTotal}}</span>
		            <span>Discount:</span>
		            <i>$</i>
		            <span>0.00</span>
		        </div>>
		            <a href="#" class="go_pay">
		                <span>To Check Out</span>
		            </a>
		    </div>
		</footer>
        
    </div>
</template>

<script>
import {mapGetters}  from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    components: {
        
    },
    computed: mapGetters(['cartTotal']),
}
</script>
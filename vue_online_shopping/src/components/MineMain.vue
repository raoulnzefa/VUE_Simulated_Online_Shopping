<template>
    <div class="mine_mm">
        <main class="mine_layout">
            <section class="mine_infos clearfix">
                <div class="mmm_info">
                    <div class="user_icon">
	                <img src="../assets/images/my_icon.jpg" alt="">
                    </div>
                    <div class="user_detal">
                        <p class="user_name">{{info.user_name}}</p>
                        <div class="reg">
                            <a href="#" class="reg_link">Register</a>
                            <div class="vip">
                            <span class="vip_icon">
                                <img src="../assets/images/vip.png" alt="">
                            </span>
                                <a href="#">
                                    Get PLUS client privilege >
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="manage_account">
                        <span>
                        Manage my account >
                        </span>
                    </div>
                </div>
                <div class="yguanzhu_box">
	            <ul class="gunzhuf">
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>0</span>
	                        <span>WatchingList</span>
	                    </a>
	                </li>
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>0</span>
	                        <span>WatchingStores</span>
	                    </a>
	                </li>
	                <li class="item">
	                    <a href="" class="item_link">
	                        <span>8</span>
	                        <span>Browsing Records</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
            </section>
            <section class="my_order_box">
                <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/my_order_icon.png" alt="">
	                <span>My orders</span>
	            </div>
	            <div class="order_right">
	                <span>All orders></span>
	            </div>
                <div class="order_bottom_box">
	            <ul>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <img src="../assets/images/waitpay.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">pending</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <img src="../assets/images/wuliu.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">Delievring</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <img src="../assets/images/tuihuan.png" alt="" class="order_item_pic">
	                        <span class="order_item_pay">Return</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	        </div>
            </section>
            <section class="my_order_box">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/mypackage.png" alt="">
	                <span>My account</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	        <div class="order_bottom_box">
	            <ul>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -5px;display: block">$200</span>
	                        <span class="order_item_pay">Balance</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -6px;display: block">0</span>
	                        <span class="order_item_pay">Coupons</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -6px;display: block">0</span>
	                        <span class="order_item_pay">Loan</span>
	                    </a>
	                </li>
	                <li class="order_item">
	                    <a href="#" class="order_item_link">
	                        <span style="margin-top: -6px;display: block">0</span>
	                        <span class="order_item_pay">JD Card</span>
	                    </a>
	                </li>
	            </ul>
	        </div>
	    </section>
         <section class="my_order_box my_b_info">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/baitiao1.png" alt="">
	                <span>JD Loan</span>
	            </div>
	            <div class="order_right">
	                <span>Loan repayment></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/baitiao2.png" alt="">
	                <span>Customer service</span>
	            </div>
	            <div class="order_right">
	                <span>Return/Repairment></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/bai3.png" alt="">
	                <span></span>
	            </div>
	            <div class="order_right">
	                <span>PLUS tactics></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/bai4.png" alt="">
	                <span>JD Member</span>
	            </div>
	            <div class="order_right">
	                <span>JD Club></span>
	            </div>
	        </div>
	    </section>
        <section class="my_order_box my_b_info">
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo1.png" alt="">
	                <span>Train Ticket</span>
	            </div>
	            <div class="order_right">
	                <span>Snap up tickets></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo2.png" alt="">
	                <span>1 dollar supprise</span>
	            </div>
	            <div class="order_right">
	                <span>1 dollar real dream></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo3.png" alt="">
	                <span></span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo4.png" alt="">
	                <span>My purchasing code</span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	        <div class="order_top_box">
	            <div class="order_left">
	                <img src="../assets/images/huo5.jpg" alt="">
	                <span></span>
	            </div>
	            <div class="order_right">
	                <span>></span>
	            </div>
	        </div>
	    </section>

        </main>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (window.sessionStorage.userInfo) {
        let userInfo = JSON.parse(window.sessionStorage.userInfo);
        this.$http
          .get("userinfo", {
            params: {
              uId: userInfo.user_id
            }
          })
          .then(
            res => {
              this.info = res.data;
              // console.log(this.info);
            },
            err => {
              console.log("Get user info: ", err);
            }
          );
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>
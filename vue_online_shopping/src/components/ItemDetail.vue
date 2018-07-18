<template>
    <div class="goods_detail">
        <header class="top_bar">
            <a href="goBack()" class="icon_back"></a>
            <h3 class="cartname">Item Details</h3>
            <a href="#" class="icon_menu"></a>
        </header>

        <main class="detail_box">
            <section class="banner_box">
                <ul class="banner_child_box">
                    <li class="banner_item" v-for="(item,i) in goodsImages" v-show="i==num">
                        <img :src="item.image_url" alt="" class="banner_pic">
                    </li>
                </ul>

                <div class="banner_count">
                    <em id="slide-up" class="fz18">{{num+1}}</em>
                    <em class="nub-bg">/</em>
                    <em id="slide-sum">{{goodsImages.length}}</em>
                </div>
            </section>
            <section class="product_info clearfix">
                <div class="product_left">
                    <p class="p_name">{{goodsData[0] ? goodsData[0].product_name : ''}}</p>
                    <div class="product_pric">
                        <span>$</span>
                        <span class="rel_price">{{goodsData[0]?goodsData[0].product_price : ''}}</span>
                        <span>.00</span>
                    </div>
                    <div class="product_right">On Sale</div>
                </div>
            </section>
            <section class="product_intro">
                <p class="pro_det">
                    {{goodsData[0] ? goodsData[0].product_detail : ''}}
                </p>
            </section>
        </main>
        <footer class="cart_d_footer">
            <div class='m'>
                <ul class="m_box">
                    <li class="m_item">
                        <a href="" class="m_item_link">
                            <em class="m_item_pic"></em>
                            <span class="m_item_name">Seller</span>
                        </a>
                         <a href="" class="m_item_link">
                            <em class="m_item_pic two"></em>
                            <span class="m_item_name">HOT POT</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic three"></em>
                            <span class="m_item_name">cART</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix">
                    <a href="#" class="buy_now" @click="addToCart()">Add to Cart</a>
                    <a href="#" class="buybuy">Buy Now</a>
                </div>

            </div>

        </footer>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            goodsImages:[],
            goodsData: [],
            num:0
            
        }
    },
    mounted(){
        this.getDetail(this.$route.params.id);
    },
    methods: {

        goBack(){
            this.$router.push('/home');
        },

        getDetail(id){
            let _this = this;
            _this.$http.get('/detail', {
                params:{
                    mId : id
                }
            }).then((res) =>{
                console.log("An item",res);
                _this.arr = res;
                _this.goodsImages = res.data[0];
                console.log('goods images: ',_this.goodsImages);
                _this.goodsData = res.data[1];
                _this.play();
            }, (err) =>{
                console.log(err);
            })
        },

        //  //轮播
        // autoPlay:function(){
        //     this.num ++;
        //     if(this.num == this.goodsImages.length){   //已经是最后一张
        //         this.num = 0;
        //     }
        // },
        // play:function(){
        //     setInterval(this.autoPlay,2000)
        // }

        

        autoPlay: function(){
            this.num++;
            if(this.num == this.goodsImages.length){ //When come to the last pics
                this.num =0;
            }
        },

        play: function(){
            setInterval(this.autoPlay,2000)
        }

    }
}
</script>

<style>
@import '../assets/css/detail.css';
</style>

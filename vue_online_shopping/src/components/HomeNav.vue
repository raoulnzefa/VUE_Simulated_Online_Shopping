<template>
    <div class="home_n">
        <nav class="m_nav">
            <ul>
                <li class="nav_item" v-for="v in categories">
                    <a href="#" class="nav_item_link">
                        <i class="iconfont" v-bind:class="v.icon"></i>
                        <span>{{v.title}}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
     
</template>

<script>
export default {
    data(){
        return {
            categories: [
                {'icon': 'icon-shenghuo', 'title': 'Consulation'},
                {'icon': 'icon-jiaoyu', 'title': 'Pruducts'},
                {'icon': 'icon-l1', 'title': 'Activities'},
                {'icon': 'icon-jiajujiafang', 'title': 'Seckill'},
                {'icon': 'icon-licai', 'title': 'Coupon'}
                ]
        }
    }
    
    
}
</script>

<style>

.m_nav .iconfont {
    border-radius: 50%;
    border: 3px solid #f9f9f9;
    box-shadow: 0px 0px 6px rgba(0,0,0,.5);
    color: #fff;
    background: #f60;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
}
.m_nav span {
    display:block;
}

.index-category {
    margin-top: 5%;
}

.share_text {
    color: rgb(250, 247, 245);
    background: #f60;
    font-size: 2em;
}

</style>



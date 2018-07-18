<template>
    <div>
        <HomeHeaderView></HomeHeaderView>
        <banner></banner>
        <HomeNav></HomeNav>
        <HomeMain></HomeMain>
    </div>
</template>

<script>

import banner from './banner'
// import list from './list'
import HomeHeaderView from './HomeHeader'
import HomeNav from './HomeNav'
import HomeMain from './HomeMain'

export default {
    data() {
        return {
            
        }
    },
    components: {
        // list,
        banner,
        HomeHeaderView,
        HomeNav,
        HomeMain
    }
}
</script>
<template>
    <div>
        SideBar {{ $site.title }}
        <NavBar></NavBar>
        <FooterBar></FooterBar>
        <SubNav></SubNav>
    </div>
</template>

<script>
import FooterBar from './FooterBar.vue';
import NavBar from './NavBar.vue';
import SubNav from './SubNav.vue';
export default {
    components: { FooterBar, NavBar, SubNav },
    created() {
        console.log('test $site', this.$site)
    }
}
</script>
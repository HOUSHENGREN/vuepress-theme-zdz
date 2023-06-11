<template>
    <div>
        SideBar {{ $site.title }}
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import FooterBar from './FooterBar.vue';

export default {
    components: { FooterBar },
    created() {
        console.log('test $site', this.$site)
    }
}
</script>
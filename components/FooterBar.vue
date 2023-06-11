<template>
    <div>FooterBar
        <p class="copyright" v-html="$themeConfig.copyright"></p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('test themeConfig', this.$themeConfig)
    }
}
</script>
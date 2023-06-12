<template>
    <div class="theme-footer">
        <div class="social-links">
            <template v-for="(item, idx) in $themeConfig.social">
                <a 
                    target="_blank"
                    v-if="item.type ==='email'"
                    rel="external nofollow noopener"
                    :href="`mailto:${item.link}`" 
                    :title="item.type"
                    :key="idx"
                >
                    <Icon :icon="item.type"></Icon>
                </a>
                <a 
                    v-else-if="item.type ==='github'"
                    target="_blank"
                    rel="external nofollow noopener"
                    :href="`http://github.com/${item.link}`" 
                    :title="item.type"
                    :key="idx"
                >
                    <Icon :icon="item.type"></Icon>
                </a>
                <a 
                    v-else
                    target="_blank"
                    rel="external nofollow noopener"
                    :href="`mailto:${item.link}`" 
                    :title="item.type"
                    :key="idx"
                >
                    <Icon :icon="item.type"></Icon>
                </a>
            </template>
        </div>
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
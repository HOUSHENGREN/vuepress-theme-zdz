<template>
    <div class="theme-main__inner theme-tag">
        <div class="theme-tag__list">
            <h2 class="theme-tag__title">{{ $tag.list.length }} tags in total</h2>
            <router-link class="theme-tag__link" 
                v-for="tag in $tag.list" 
                :key="tag.path" 
                :to="tag.path"
            >
            # {{ tag.name }} {{ tag.pages.length }}
            </router-link>
        </div>
    </div>
</template>

<script>
// todo 进入页面报错
export default {
    name: 'Tag',
    created() {
        console.log('test-this.$tag', this.$tag)
    }
}
</script>

<style lang="stylus" scoped>
.theme-tag
    border-radius: 6px
    padding: 2.15rem
    &__title
        margin: 0 0 1.5rem 0
        font-size: 1.785rem
        font-weight normal
    &__link
        display inline-block
        padding: 0 1em
        border-radius: 3px
        &:hover
            color: #333
</style>
<template>
    <div class="theme-main__inner theme-category">
        <div class="theme-category__list">
            <h1 class="theme-category__title">{{ $category.list.length }} categories in total</h1>
            <router-link 
                class="theme-category__link" 
                v-for="item in $category.list"
                :key="item.name"
                :to="item.path"
            >
                {{ item.name }}[{{ item.path.length }}]
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Category',
    created() {
        console.log('Category', this.$category)
    }
}
</script>

<style lang="stylus" scoped>
.theme-category
    border-radius: 6px
    padding: 2.16rem
    &__title
        margin: 00 1.5rem 0
        font-size: 1.766rem
        font-weight: normal
    &__link
        display: inline-block
        padding: 0 1em
        border-radius: 3px
        line-height: 2.4em
        transition: background-color .15s
        margin: 0 1rem 1rem 0
</style>
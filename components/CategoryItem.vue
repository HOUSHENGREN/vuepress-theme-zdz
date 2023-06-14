<template>
    <div class="theme-main__inner">
        <div class="category-item">
            <h1 class="category__title">* {{ $currentCategory.key }}</h1>
            <div class="post-list">
                <a class="post-list__item" :href="item.path" v-for="item in postList" :key="item.path">
                    <span class="post-list__date">{{ item.date }}</span>
                    <span class="post-list__title">{{ item.title }}</span>
                </a>
            </div>
            <Pagination v-if="$pagination.length > 1"></Pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '@vuepress/plugin-blog/lib/client/pagination'
export default {
    name: 'CategoryItem',
    components: {
        Pagination
    },
    created() {
        console.log('test categoryItem', this.$pagination.pages)
    },
    computed: {
        postList() {
            let list = []
            this.$pagination.pages.map(item => {
                const date = new Date(item.frontmatter.date)
                list.push({
                    ...item,
                    date: `${date.toLocaleDateString()}`
                })
            })
            // reorder
            list.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })
            return list
        }
    }
}
</script>

<style lang="stylus" scoped>
.category-item
    border-radius: 6px
    padding: 2.15rem
    .post-list__item 
        display: block
</style>
<template>
    <div class="theme-main__inner tag-item">
        <h1 class="tag__title"># {{ $currentTag.key }}</h1>
        <div class="post-list">
            <a class="post-list__item" 
                v-for="(item, idx) in postList" 
                :href="item.path" 
                :key="idx"
            >
                <span class="post-list__date">{{ item.date }}</span>
                <span class="post-list__title">{{ item.title }}</span>
            </a>
        </div>
        <Pagination v-if="$pagination.length > 1"></Pagination>
    </div>
</template>

<script>
import Pagination from '@vuepress/plugin-blog/lib/client/pagination'

export default {
    name: 'TagItem',
    components: {
        Pagination
    },
    created() {
        console.log('test-tag-item', this.$tag, this.postList,  this.$pagination.pages)
    },
    computed: {
        postList() {
            let list = []
            this.$pagination.pages.map(item => {
                const date = new Date(item.frontmatter.date)
                console.log('test tagItem date', item.frontmatter)
                list.push({
                    ...item,
                    date: date.toLocaleDateString()
                })
            })
            list.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })
            return list
        }
    }
}
</script>

<style lang="stylus" scoped>
.tag-item
    border-radius: 6px
    padding 2.15rem
</style>
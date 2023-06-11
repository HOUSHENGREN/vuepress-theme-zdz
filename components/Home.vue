<template>
    <div>
        <ul v-for="(item, idx) in pages" :key="idx">
            <li>
                <router-link :to="item.path">{{ item.title }}</router-link>
            </li>
        </ul>
        <Pagination></Pagination>
        <!-- <Pagination v-if="$pagination.length > 1"></Pagination> -->
    </div>
</template>

<script>
import Pagination from '@vuepress/plugin-blog/lib/client/components/Pagination'  
console.log('pagination', Pagination)
export default {
    components: { Pagination },
    created() {
        console.log('test pagination', this.$pagination, this.pages)
    },
    computed: {
        pages() {
            // 点击li时，this.$pagination会变成null？why
            return this.$pagination && this.$pagination.pages || []
        }
    }

}
</script>
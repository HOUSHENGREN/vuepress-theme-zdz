<template>
    <div>
        <ul id="default-layout" v-for="(page, index) in $pagination.pages" :key="index">
            <li>
                <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
            </li>
        </ul>
        <div id="pagination">
            <router-link v-if="$pagination.hasPrev">Prev</router-link>
            <router-link v-if="$pagination.hasNext">Next</router-link>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        console.log('test--layout.vue', this.$pagination)
    }
}
</script>
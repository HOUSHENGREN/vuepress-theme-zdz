<template>
    <!-- articles meta -->
    <div class="post-meta">
        <a href="#">author: {{ $frontmatter.author }}</a>
        <a href="#">date: {{ date }}</a>
        <a href="#">author: {{ $frontmatter.category }}</a>
        <p>tag:</p>
        <ul>
            <li v-for="(item, idx) in tags" :key="idx">
                <a href="#">#{{ item }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        date() {
            return new Date(this.$frontmatter.date).toLocaleDateString()
        },
        tags() {
            return this.$frontmatter.tag || []
        }
    },
    created() {
        console.log('test-tags', this.$frontmatter)
    }
}
</script>
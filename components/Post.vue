<template>
    <!-- articles -->
    <div class="post">
        <h1 class="title">{{ $frontmatter.title }}</h1>
        <PostMeta></PostMeta>
        <Content></Content>
        <PostNav></PostNav>
    </div>
</template>

<script>
import PostMeta from './PostMeta.vue'
import PostNav from './PostNav.vue';
export default {
    components: { PostMeta, PostNav }
}
</script>
<template>
    <div class="theme-container">
        <SideBar></SideBar>
        <Post v-if="$page.pid === 'post'"></Post>
        <Archive v-else-if="$page.pageType === 'archive'"></Archive>
        <Category v-else-if="$page.pageType === 'category'"></Category>
        <CategoryItem v-else-if="$page.pageType === 'categoryItem'"></CategoryItem>
        <Tag v-else-if="$page.pageType === 'tag'"></Tag>
        <TagItem v-else-if="$page.pageType === 'tagItem'"></TagItem>
        <Home v-else></Home>
        <SvgSprite></SvgSprite>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import Home from '../components/Home.vue';
import Post from '../components/Post.vue';
import SvgSprite from '../components/SvgSprite.vue';
import Archive from '../components/Archive.vue';
import Category from '../components/Category.vue';
import CategoryItem from '../components/CategoryItem.vue';
import Tag from '../components/Tag.vue';
import TagItem from '../components/TagItem.vue';
export default {
    components: { SideBar, Home, Post, SvgSprite, Archive,Category, CategoryItem, Tag, TagItem },
    created() {
        console.log('test home')
    }
}
</script>
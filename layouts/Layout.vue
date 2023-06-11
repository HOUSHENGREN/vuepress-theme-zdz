<template>
    <div class="theme-container">
        <SideBar></SideBar>
        <Post v-if="$page.pid === 'post'"></Post>
        <Home v-else></Home>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import Home from '../components/Home.vue';
import Post from '../components/Post.vue';
export default {
    components: { SideBar, Home, Post },
    created() {
        console.log('test home')
    }
}
</script>
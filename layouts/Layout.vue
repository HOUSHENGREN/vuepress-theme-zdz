<template>
    <div class="theme-container">
        <SideBar></SideBar>
        <Home></Home>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
import Home from '../components/Home.vue';
export default {
    components: { SideBar, Home },
    created() {
        console.log('test home')
    }
}
</script>
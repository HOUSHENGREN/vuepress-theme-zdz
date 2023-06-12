<template>
    <nav>
        <NavLink v-for="(item, idx) in $themeConfig.nav" :key="idx" :item="item"></NavLink>
    </nav>
</template>

<script>
import NavLink from './NavLink.vue'
export default {
    name: 'NavBar',
    components: {
        NavLink
    }
}
</script>
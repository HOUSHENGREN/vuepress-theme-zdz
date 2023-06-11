<template>
    <div id="global-layout">
        <header>
            <router-link to="/">{{ $site.title }}</router-link> . <router-link to="/tag/">Tag</router-link>
        </header> <br>
        <GlobalLayout></GlobalLayout>
    </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
export default {
    components: { GlobalLayout }
}
</script>
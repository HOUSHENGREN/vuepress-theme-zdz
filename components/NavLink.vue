<template>
    <a 
        v-if="isExternal"
        :href="item.link"
        class="nav-link external"
        :target="target"
        :rel="rel"
    >
        {{ item.text }}
        <!-- inner component -->
        <OutboundLink v-if="isBlankTarget"></OutboundLink>
    </a>
    <router-link v-else class="nav-link" :to="item.link">{{ item.text }}</router-link>
</template>

<script>
import { isExternal } from '../utils/help'
export default {
    props: {
        item: {
            required: true
        }
    },
    computed: {
        isExternal() {
            return isExternal(this.item.link)
        },
        isBlankTarget() {
            return this.target === '_blank'
        },
        target() {
            if(this.item.target) {
                return this.item.target
            }
            return isExternal(this.item.link) ? '_blank' : ''
        },
        rel() {
            if(this.item.rel) {
                return this.item.rel
            }
            return this.isBlankTarget ? 'noopener noreferred' : null
        }
    }
}
</script>

<style lang="stylus" scoped>
.nav-link
    // inner class
    &.router-link-exact-active
        background-color: yellow
        color: red
</style>
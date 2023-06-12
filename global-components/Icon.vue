<template>
    <svg class="theme-icon" :class="`theme-icon-${icon}`">
        <use :xlink:href="`#theme-icon-${icon}`"></use>
    </svg>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        icon: {
            type: String
        }
    }
}
</script>

<style lang="stylus" scoped>
// todo
$currentColor: red
.theme-icon
    display inline-block
    width: 1em
    stroke-width: 0
    stroke: $currentColor
    fill: $currentColor
</style>
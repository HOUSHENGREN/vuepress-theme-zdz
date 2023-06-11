<template>
    <ul id="default-layout">
        <li v-for="(tag, index) in $tag.list" :key="index">
            <router-link class="page-link" :to="tag.path">{{ tag.name }}</router-link>
        </li>
    </ul>
</template>
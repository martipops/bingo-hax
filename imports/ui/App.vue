<script setup>
import AppMenu from './AppMenu.vue'
</script>

<template>
  <div class="p-8 dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 min-h-screen">
    <AppMenu class="pb-8"/>
    <router-view />
  </div>
</template>

<template>
  <nav class="flex items-center">
    <router-link :to="{ name: 'home' }" class="mr-4 text-blue-700 dark:text-blue-300 hover:underline">Home</router-link>
    <router-link :to="{ name: 'bingo' }" class="mr-4 text-blue-700 dark:text-blue-300 hover:underline">Bingo</router-link>
    <router-link :to="{ name: 'win-conditions' }" class="mr-4 text-blue-700 dark:text-blue-300 hover:underline">Win Conditions</router-link>
  </nav>
</template>

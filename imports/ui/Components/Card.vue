<template>
  <div class="grid grid-cols-5 w-60 h-60">
    <div
      v-for="index in 25" 
      :key="index-1"
      class="border border-solid w-12 h-12 flex justify-center"
    >
      <slot name="cell" :index="index-1">
        <!-- Default content if no slot is provided -->
        <div class="flex items-center justify-center w-full h-full">
          {{ index-1 }}
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Card'
};
</script>
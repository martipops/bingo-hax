<template>
  <input 
    class="p-2 w-full rounded-md shadow-inner border-2 border-gray-800 focus:border-blue-600 select-none focus:outline-none dark:bg-gray-700"
    :value="modelValue" 
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    @keyup.enter="handleEnter" />
</template>

<script lang="ts">

export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Type here...',
    }
  },
  emits: ['update:modelValue', 'onEnter'],
  methods: {
    handleEnter(event: KeyboardEvent) {
      const value = (event.target as HTMLInputElement)?.value;
      this.$emit('onEnter', value);
    }
  }
}

</script>

<style>

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

</style>
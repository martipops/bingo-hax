<template>
  <div class="flex items-center">
    <label for="toggle" class="cursor-pointer flex items-center" @click.prevent="toggle">
      <div
        class="relative"
      >
        <input
          id="toggle"
          type="checkbox"
          class="sr-only"
          :checked="modelValue"
          @change="toggle"
        />
        <div
          class="w-10 h-5 rounded-full transition-colors duration-300 ease-in-out"
          :class="modelValue ? 'bg-blue-500' : 'bg-gray-300'"
        ></div>
        <div
          class="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ease-in-out shadow-md"
          :class="{ 'translate-x-5': modelValue }"
        ></div>
      </div>
      <span v-if="label" class="ml-2 text-sm">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Toggle',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Edit',
    },
  },
  emits: ['update:modelValue'],
  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.modelValue);
    },
  },
}
</script>
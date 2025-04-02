<template>
  <button
    class=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    :class="buttonClass"
  >
    {{ label }}
  </button>

</template>


<script lang="ts">
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    },
    severity: {
      type: String,
      default: 'primary',
      validator: (value: string) => {
        return ['primary', 'secondary', 'success', 'danger'].includes(value);
      }
    },
  },
  computed: {
    buttonClass() {
      return {
        'bg-blue-500 hover:bg-blue-700': this.severity === 'primary',
        'bg-gray-500 hover:bg-gray-700': this.severity === 'secondary',
        'bg-green-500 hover:bg-green-700': this.severity === 'success',
        'bg-red-500 hover:bg-red-700': this.severity === 'danger',
      };
    }
  }
};
</script>
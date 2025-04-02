<template>
  <div>
    <Card>
      <template #cell="{ index }">
        <div class="w-full h-full flex items-center justify-center cursor-pointer"
          :class="modelValue[index] ? 'bg-green-500' : 'bg-red-500'" @click="editMode && toggleCell(index)">
          <div class="flex items-center justify-center w-full h-full">
            <span v-if="editMode">{{ modelValue[index] ? '✓' : '✗' }}</span>
          </div>
        </div>
      </template>
    </Card>
    <div class="flex justify-between mt-4">
      <Button @click="toggleEditMode" :severity="editMode ? 'success' : 'primary'"
        :label="editMode ? 'Done' : 'Edit'" />
      <Button @click="$emit('delete')" label="Delete" severity="danger" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';
import Card from './Card.vue';


export default {
  components: {
    Card,
    Button
  },
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      editMode: false
    };
  },
  methods: {
    toggleCell(index: number) {
      this.$emit('update:modelValue', this.modelValue.map((val, i) => (i === index ? !val : val)));
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
    }
  }
};
</script>
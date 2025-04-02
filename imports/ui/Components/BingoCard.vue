<template>
  <Card>
    <template #cell="{ index }">
      <div 
        class="w-full h-full flex items-center justify-center"
        :class="selectedNumbers.includes(modelValue.numbers[index]) ? 'bg-blue-500' : 'bg-white dark:bg-gray-800'"
      >
        <input v-model="modelValue.numbers[index]" @input="changed" class="w-full text-center bg-transparent h-full"/>
      </div>
    </template>
  </Card>
  <pre>
    {{ modelValue.winner }}
  </pre>
</template>

<script lang="ts">
import Card from './Card.vue';
import { BingoCardType, globalsSingleton } from '/imports/api/globals';

export default {
  components: {
    Card
  },
  props: {
    modelValue: {
      type: Object as () => BingoCardType,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
    };
  },
  setup() {
    const globals = globalsSingleton();
    return {
      bingoCards: globals.bingoCards,
      selectedNumbers: globals.selectedNumbers,
      conditions: globals.winConditions,
      determineWinner: globals.determineWinner,
    };
  },
  methods: {
    changed() {
      this.determineWinner(this.modelValue);
      this.$emit('update:modelValue', this.modelValue);
    }
  },
};
</script>
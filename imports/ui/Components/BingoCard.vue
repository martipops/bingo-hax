<template>
  <div :class="modelValue.winner ? 'border-4 border-green-500' : 'border-4 border-transparent'">
    <Card>
      <template #cell="{ index }">
        <div class="w-full h-full flex items-center justify-center"
          :class="classDetermine(index)">
          <input v-model="modelValue.numbers[index]" @input="changed" class="w-full text-center bg-transparent h-full" />
        </div>
      </template>
    </Card>
  </div>
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
      this.$emit('update:modelValue', this.modelValue);
    },
    classDetermine(index: number) {
      if (this.selectedNumbers.includes(this.modelValue.numbers[index])) {
        if (this.modelValue.winner && this.modelValue.winCondition && this.modelValue.winCondition[index]) {
          return 'bg-green-500';
        }
        return 'bg-blue-500';
      }
      return 'bg-white dark:bg-gray-800';
    },
  },
  watch: {
    modelValue: {
      deep: true,
      immediate: true,
      handler(val: any) {
        console.log('Model value changed:', val);
        this.determineWinner(this.modelValue);
      },
    },
    selectedNumbers: {
      immediate: true,
      deep: true,
      handler(val: any) {
        console.log('Selected numbers changed:', val);
        this.determineWinner(this.modelValue);
      },
    },
    conditions: {
      immediate: true,
      deep: true,
      handler(val: any) {
        console.log('Conditions changed:', val);
        this.determineWinner(this.modelValue);
      }
    }
  }
};
</script>
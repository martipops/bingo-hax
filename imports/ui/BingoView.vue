<template>
  <Button
    label="Add Bingo Card"
    @click="addBingoCard()"
    class="mb-4 px-4 py-2"/>
  <div class="flex flex-wrap gap-4 z-10">
    <BingoCard v-for="(_, index) in bingoCards" v-model="bingoCards[index]"/>
  </div>
  <div class="w-full fixed bottom-0 left-0 p-2">
    <div class="w-full flex justify-left gap-2 m-2 flex-wrap">
      <div v-for="number in selectedNumbers" class="flex justify-center items-center text-xl rounded-full aspect-square h-12 w-12 bg-blue-500">
        {{ number }}
      </div>
    </div>
    <div>
      <InputText 
        v-model="terminalNumber"
        @on-enter="onEnter"
        >
      </InputText>
    </div>
  </div>
  <pre>
    {{ conditions }}
  </pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BingoCard from './Components/BingoCard.vue';
import InputText from './Components/InputText.vue';
import { globalsSingleton } from '../api/globals';
import Button from './Components/Button.vue';


export default defineComponent({
  components: {
    BingoCard,
    InputText,
    Button
  },
  data() {
    return {
      terminalNumber: '',
    };
  },
  setup() {
    const globals = globalsSingleton();
    return {
      bingoCards: globals.bingoCards,
      selectedNumbers: globals.selectedNumbers,
      conditions: globals.winConditions,
      addBingoCard: globals.addBingoCard
    };
  },
  methods: {
    onEnter(value: string) {
      if (value === '') {
        return;
      }
      else if (['clear', 'reset', 'rst', 'clr'].includes(value)) {
        this.selectedNumbers.splice(0);
      }
      else if (value[0] === '-') {
        this.selectedNumbers = this.selectedNumbers.filter((number) => number !== value.slice(1));
      } else {
        const num = parseInt(value);
        if (!isNaN(num)) {
          this.selectedNumbers.push(value);
        }
      }
      this.terminalNumber = '';
    },
  },
});
</script>
<template>
  <div class="flex flex-wrap gap-4 z-10">
    <BingoCard :selected-numbers="selectedNumbers"/>
    <BingoCard :selected-numbers="selectedNumbers"/>
    <BingoCard :selected-numbers="selectedNumbers"/>
  </div>
  <div class="w-full h-12 self-baseline fixed bottom-0 left-0 flex justify-center">
    <InputText 
      v-model="terminalNumber"
      @on-enter="onEnter"
      >
    </InputText>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BingoCard from './BingoCard.vue';
import InputText from './Components/InputText.vue';


export default defineComponent({
  components: {
    BingoCard,
    InputText
  },
  data() {
    return {
      terminalNumber: '',
      selectedNumbers: [] as string[],
    };
  },
  mounted() {
    
  },
  methods: {
    onEnter(value: string) {
      if (value[0] === '-') {
        console.log('removing', value.slice(1));
        this.selectedNumbers = this.selectedNumbers.filter((number) => number !== value.slice(1));
      } else {
        this.selectedNumbers.push(value);
      }
      this.terminalNumber = '';
    },
  },
});
</script>
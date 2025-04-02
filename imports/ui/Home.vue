

<template>
  <h1 class="text-3xl font-bold my-6">Welcome to Meteor!</h1>
  {{ isWinner }}

  <Toggle v-model="test"></Toggle>
  {{ test }}
</template>



<script lang="ts">
import Toggle from './Components/Toggle.vue';

export default {
  components: {
    Toggle
  },
  data() {
    return {
      test: false,
      card: [
        '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25',
      ],
      selectedNumbers: ['1', '2', '3', '4', '5', '6', '10', '11', '15', '16', '20', '21', '22', '23', '24', '25'],
      winCondition: [
        true, true, true, true, true,
        true, false, false, false, true,
        true, false, false, false, true,
        true, false, false, false, true,
        true, true, true, true, true,
      ]
    }
  },
  computed: {
    isWinner() {
      return this.isBingoWinner(this.card, this.selectedNumbers, this.winCondition);
    }
  },
  methods: {
    isBingoWinner(card: string[], selectedNumbers: string[], winCondition: boolean[]) {
      return card.every((number, index) => winCondition[index] && !selectedNumbers.includes(number));
    }
  }
}
</script>
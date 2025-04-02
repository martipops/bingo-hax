<template>
  <Button
    label="Add Win Condition"
    @click="addWinCondition"
    class="mb-4 px-4 py-2"/>

  <div class="flex flex-wrap gap-4">
    <WinCondition 
      v-for="(_, index) in conditions" 
      v-model="conditions[index]"
      @delete="deleteWinCondition(index)"
    />
  </div>

  <pre>
    {{ conditions }}
  </pre>

  <p v-if="conditions.length === 0" class="text-gray-500 italic mt-4">
    No win conditions added yet. Click the button above to add one.
  </p>
</template>

<script lang="ts">
import { globalsSingleton } from '../api/globals';
import Button from './Components/Button.vue';
import WinCondition from './Components/WinCondition.vue';


export default {
  components: {
    WinCondition,
    Button
  },
  data() {
    return {
      conditions: globalsSingleton().winConditions
    };
  },
  methods: {
    addWinCondition() {
      this.conditions.push(Array(25).fill(false));
    },
    deleteWinCondition(index: number) {
      this.conditions.splice(index, 1);
    }
  }
}
</script>
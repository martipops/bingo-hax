<template>
  <div class="p-8">
    <div class="grid grid-cols-5 w-60 h-60">
      <div
        v-for="(number, index) in myCard" 
        :key="index"
        class="border border-solid w-12 h-12 flex justify-center"
        :class="selectedNumbers.includes(number) ? 'bg-blue-500' : 'bg-white'"
      >
        <div v-if="editMode" class="flex justify-center">
          <input v-model="myCard[index]" @input="changed" class="w-full text-center bg-transparent"/>
        </div>
        <div v-else>
          <!-- {{ number.number }} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

export default {
  components: {
  },
  props: {
    selectedNumbers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      myCard: [
        '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25',
      ],
      editMode: true,
    };
  },
  mounted() {
  },
  methods: {
    changed(inp: any) {
      console.log(inp);
    }
  },
  
};
</script>
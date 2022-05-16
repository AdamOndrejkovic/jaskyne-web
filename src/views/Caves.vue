<template>
  <div class="caves-container">
    <button @click="isAdding">Pridat jaskynu</button>
    <h2>Jaskyne {{ region }} kraj</h2>
    <cave :caves="caves" />
  </div>
  <add-cave v-if="adding" @close="isAdding" />
</template>
<script lang="ts">
import AddCave from "@/components/modals/AddCave.vue";
import { useCavesActions, useCavesState } from "@/store/caves";
import { Cave as caveType } from "@/types/types";
import { defineComponent, ref } from "vue";
import Cave from "@/components/Cave.vue";

export default defineComponent({
  components: { AddCave, Cave },
  emits: ['close'],
  setup() {
    const adding = ref<boolean>(false);
    const { getFilteredCaves } = useCavesActions()
    const { region } = useCavesState()

    const caves = ref<caveType[]>([])
    caves.value = getFilteredCaves()

    const isAdding = () => {
      adding.value = !adding.value;
    };

    return {
      adding,
      isAdding,
      caves,
      region,
    };
  },
});
</script>
<style scoped>
.caves-container {
  min-height: 75vh;
}

h2, h3 {
  font-family: "Permanent Marker", cursive;
}

h2 {
  font-size: 28px;
  margin: 5px 10px;
}
</style>

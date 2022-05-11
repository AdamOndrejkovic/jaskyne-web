<template>
  <div class="caves-container">
    <button @click="isAdding">Pridat jaskynu</button>
    <h2>Jaskyne {{ region }} kraj</h2>
    <div>
      <div v-for="cave in caves" :key="cave.id" class="cave-box">
        <h3>{{ cave.title }}</h3>
        <div>
          <p class="w-5/6 mx-auto text-justify my-4">{{ cave.description }}</p>
        </div>
        <div class="flex flex-row gap-6 w-5/6 mx-auto">
          <blockquote> Miesto : {{ cave.location }}</blockquote>
          <blockquote> Náročnosť : {{ cave.difficulty }}</blockquote>
          <blockquote> Trvanie : {{ cave.duration }}</blockquote>
        </div>
      </div>
    </div>
  </div>
  <add-cave v-if="adding" @close="isAdding" />
</template>
<script lang="ts">
import AddCave from "@/components/modals/AddCave.vue";
import { useCavesActions, useCavesState } from "@/store/caves";
import { Cave } from "@/types/types";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { AddCave },
  emits: ['close'],
  setup() {
    const adding = ref<boolean>(false);
    const { getFilteredCaves } = useCavesActions()
    const { region } = useCavesState()

    const caves = ref<Cave[]>([])
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

h3 {
  font-size: 22px;
  margin: -20px 0px 0 20px;
  background: white;
  width: fit-content;
  padding: 0 10px;
}

.cave-box {
  border-top: 2px solid gray;
  @apply my-6;
}
</style>

<template>
    <div>
        <button @click="isAdding">Pridat jaskynu</button>
        <h2>Caves</h2>
    </div>
    <add-cave v-if="adding"/>
</template>
<script lang="ts">
import AddCave from '@/components/modals/AddCave.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: { AddCave },
    setup() {
        const adding = ref<boolean>(false)

        const isAdding = () => {
            adding.value = !adding.value
        }
        

        return {
            adding,
            isAdding,
        }
    },
})
</script>
<style scoped>

</style>

<template>
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
          <img v-if="can()" src="../../public/icons/edit.png" class="w-8 h-8" alt="Edit">
          <img v-if="can()" src="../../public/icons/delete.png" class="w-8 h-8" alt="Delete" @click="deleteCave(cave._id)">
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import router from '@/router'
import api from '@/services/api'
import { useUserActions, useUserGetters } from '@/store/user'
import { Cave } from '@/types/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
      caves: Array as PropType<Cave[]> ,
      default: null,
    },
    setup() {
        const { can } = useUserActions()
        const deleteCave = async (id: string) => {
            await api.deleteCave(id)
            router.push(`/jaskyne/`);        
        }

        const editCave = () => {
            console.log("edit")
        }

        return {
            deleteCave,
            editCave,
            can,
        }
    },
})
</script>
<style scoped>
h3 {
  font-size: 22px;
  margin: -20px 0px 0 20px;
  background: white;
  width: fit-content;
  padding: 0 10px;
  font-family: "Permanent Marker", cursive;
}

.cave-box {
  border-top: 2px solid gray;
  @apply my-6;
}
</style>
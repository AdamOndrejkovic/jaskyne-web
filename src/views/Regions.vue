<template>
  <div>
    <div class="region-wrapper">
      <div v-for="region in regions" :key="region.key" class="region-card" @click="redirect(region.parameter)">
        <div class="w-64 h-44 lg:w-96 lg:h-80 overflow-hidden flex items-center">
        <img
        :src="`/images/regions/${region.image}`"
        :alt="region.title"
        class="h-full w-4/5 mx-auto rounded"
      />
      </div>
      <h2 class="bg-white w-52 text-center -mt-6">{{ region.title }}</h2>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const route = useRoute
    const router = useRouter()

    const regions: { key: number; title: string; parameter: string, image: string }[] = [
      {
        key: 1,
        title: "Bratislavský kraj",
        parameter: "bratislava",
        image: "bratislava.jpg",
      },
      {
        key: 2,
        title: "Trnavský kraj",
        parameter: "trnava",
        image: "trnava.jpg",
      },
      {
        key: 3,
        title: "Trenčiansky kraj",
        parameter: "trencin",
        image: "trencin.jpg",
      },
      {
        key: 4,
        title: "Nitriansky kraj",
        parameter: "nitra",
        image: "nitra.jpg",
      },
      {
        key: 5,
        title: "Žilinský kraj",
        parameter: "zilina",
        image: "zilina.jpg",
      },
      {
        key: 6,
        title: "Banskobystrický kraj",
        parameter: "banskabystrica",
        image: "banskabystrica.jpg",
      },
      {
        key: 7,
        title: "Prešovský kraj",
        parameter: "presov",
        image: "presov.jpg",
      },
      {
        key: 8,
        title: "Košický kraj",
        parameter: "kosice",
        image: "kosice.jpg",
      },
    ];

    const redirect = (parameter: string) => {
      router.push(`/jaskyne/${parameter}`)
    }

    return {
      regions,
      redirect,
    };
  },
});
</script>

<style scoped>
.region-wrapper{ 
  @apply grid grid-flow-row  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-4 xl:grid-cols-4 gap-4 overflow-hidden;
}

.region-card {
  @apply mx-6 my-4 flex flex-col items-center;
}

.region-card:hover {
  animation: zoom-in 0.5s linear forwards;
}

@keyframes zoom-in {
  0% {
    transform: scale(1,1);
  }
  100% {
    transform: scale(1.25, 1.25);
  }
}
</style>

<template>
  <div class="home">
    <InteractiveImage
      class=""
      url="https://view.genial.ly/626fae3bc195720011b819f4"
      width="w-screen"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InteractiveImage from "@/components/common/InteractiveImage.vue";

export default defineComponent({
  name: "Home",
  components: { InteractiveImage },
});
</script>
<style scoped>
.home {
  background-color: rebeccapurple;
}
</style>

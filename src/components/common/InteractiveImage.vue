<template>
  <div :class="[width, height]">
    <div class="inner-box">
      <iframe
        :src="url"
        frameborder="0"
        type="text/html"
        allowscriptaccess="always"
        allowfullscreen="true"
        scrolling="yes"
        allownetworking="all"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "w-20",
    },
    height: {
      type: String,
      default: "w-20",
    },
  },
  setup() {
    const name = "test";

    return {
      name,
    };
  },
});
</script>

<style scoped>
.inner-box {
  @apply relative;
}

iframe {
  @apply w-full;
}
</style>

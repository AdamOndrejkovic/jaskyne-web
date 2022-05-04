<template>
<div style="width: 100%;">
  <div class="inner-box">
    <iframe 
    height="350"
    :src="url" 
    type="text/html" 
    frameborder="0"
    allowscriptaccess="always" 
    allowfullscreen="true" 
    scrolling="yes" 
    allownetworking="all">
    </iframe> 
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
      default: "h-20",
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
  @apply relative pt-0 h-96;
  height: 60vh;
}

iframe {
  @apply w-full h-full absolute top-0 left-0;
}
</style>

<template>
  <div class="outer-box">
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
.outer-box {
  width: 100%;
}


</style>

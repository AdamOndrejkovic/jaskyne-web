<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from "./components/common/Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Header,
  },
});
</script>

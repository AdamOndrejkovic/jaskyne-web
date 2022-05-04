<template>
  <Header />
  <router-view />
  <Footer/>
</template>

<script lang="ts">
import Header from "./components/common/Header.vue";
import { defineComponent } from "vue";
import Footer from "./components/common/Footer.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

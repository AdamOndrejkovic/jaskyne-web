<template>
  <footer class="flex flex-col bg-brand-500 py-10 items-center justify-center">
    <div class="flex gap-4 text-lg text-white">
      <router-link to="/">Home</router-link>
      <router-link to="/jaskyne">Jaskyne</router-link>
      <router-link to="/chat">Chat</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="flex gap-4 py-4">
      <a href="mailto:someone@yoursite.com"
        ><img src="../../../public/icons/gmail.png" class="h-8 w-8" alt="Gmail"
      /></a>
      <a
        href="https://www.facebook.com/menejznameslovenskejaskyne"
        target="_blank"
        ><img
          src="../../../public/icons/facebook.png"
          class="h-8 w-8"
          alt="Facebook"
      /></a>
      <a
        href="https://www.instagram.com/menejznameslovenskejaskyne/?hl=en"
        target="_blank"
        ><img
          src="../../../public/icons/instagram.png"
          class="h-8 w-8"
          alt="Instagram"
      /></a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped></style>

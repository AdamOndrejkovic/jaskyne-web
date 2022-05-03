<template>
  <div class="flex items-center">
    <div><img src="" alt="Logo" /></div>
    <div><h1>Menej známe slovenské jaskyne</h1></div>
    <div>
      <nav class="">
        <ul>
          <li>Navbar</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const name = "test";

    return {
      name,
    };
  },
});
</script>

<style scoped>
h1 {
  font-family: "Permanent Marker", cursive;
}
</style>

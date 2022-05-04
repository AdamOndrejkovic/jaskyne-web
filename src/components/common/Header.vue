<template>
  <div class="flex gap-3 justify-between items-center h-14 overflow-hidden">
    <div>
      <img src="../../assets/images/logo.jpg" alt="Logo"  /></div>
    <div>
      <h1 class="text-3xl">Menej známe slovenské jaskyne</h1></div>
    <div>
      <div @click="openNav"><span class="navigation-button">Menu</span></div>
      <div :class="[width]" class="navigation-box" @click="closeNav">
        <div>
          <a>&times;</a>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const width = ref<string>("w-0")

    const openNav = () => {
      width.value = "w-screen"
    }

    const closeNav = () => {
      width.value = "w-0"
    }

    return {
      width,
      openNav,
      closeNav,
    };
  },
});
</script>

<style scoped>
h1 {
  font-family: "Permanent Marker", cursive;
}

.navigation-box {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-image: url("../../assets/images/cave.jpg");
  background-position: center;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.navigation-box > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
}

.navigation-box > div > a {
  font-size: 42px;
  font-family: "Permanent Marker", cursive;
}

.navigation-box > div > a:first-of-type {
  border: 2px solid white;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin: auto;
}

.navigation-box > div > a:first-of-type:hover {
  animation: spin 1s linear forwards;  
}

.navigation-button {
  @apply py-2 px-5 mr-10 border-2 border-green-500 hover:border-green-300 rounded;
}

@keyframes spin {
  0% {transform: rotate(0deg);}
  25% {transform: rotate(90deg);}
  50% {transform: rotate(180deg);}
  75% {transform: rotate(270deg);}
  100% {transform: rotate(360deg);}
}

</style>

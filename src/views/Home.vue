<template>
  <div>
    <InteractiveImage
      url="https://view.genial.ly/626fae3bc195720011b819f4"
      width="w-screen"
      height="h-96 "
    />
    <div class="flex gap-4 py-8">
      <div class="w-1/2">
        <img src="../assets/images/tatry.jpg" class="mx-auto rounded" alt="Tatry">
      </div>
      <div class="w-1/2 flex flex-col items-center justify-center">
        <h2 class="text-2xl">O nás</h2>
        <p class="w-4/5">Účelom tejto stránky je spropagovať menej známe slovenské jaskyne. Návšteva takýchto jaskýň je nádherný zážitok. Napriek tomu, že sú menej známe, sú rovnako krásne.
          Táto stránka vznikla na základe odbornej záverečnej práce počas štúdia cestovného ruchu v Bratislave. Stránka je praktickou časťou práce. Záujem a počet páči sa mi to a sledovaní stránky sa neustále zvyšuje, čo je jednou z motivácii, ktorá nás vedie k spravovaniu tejto stránky. Stránku sa snažíme neustále zveľaďovať a pridávat obsah, ktorý jej sledovatelia hľadajú a obľubujú. To, čo robíme nás neskutočne baví.
          Účelom tejto stránky je spropagovať menej známe slovenské jaskyne. Návšteva takýchto jaskýň je nádherný zážitok a napriek tomu, že sú menej známe, sú rovnako krásne.
          Veľmi nás teší, keď vidíme ľudí, ktorých tento koncept taktiež zaujíma, a ktorí sa snažia zvyšovať povedomie o menej známych slovenských jaskyniach a priaznivo tak prispievajú k rozvoju cestovného ruchu na Slovensku.
          </p>
      </div>
    </div>
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
h2 {
  font-family: "Permanent Marker", cursive;
}
</style>

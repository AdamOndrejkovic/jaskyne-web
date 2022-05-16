<template>
    <div class="py-2 flex">
        <div class="flex flex-col justify-center items-center mx-auto lg:w-1/2">
            <div>
                <div class="flex gap-4">
                    <span @click="changeVisibility('login')">Login</span>
                    <span @click="changeVisibility('register')">Register</span>
                </div>
                <div v-if="visibility === 'login'">
                    <Login/>
                </div>
                <div v-if="visibility === 'register'">
                    <Register/>                    
                </div>
            </div>
        </div>
        <div class="mr-4">
        <img src="/images/jaskyna.jpg" alt="">
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Login from '@/components/auth/Login.vue'
import Register from '@/components/auth/Register.vue';

export default defineComponent({
    components: { Login, Register },
    setup() {
        const visibility = ref<string>("login");
        const changeVisibility = (type: string) => {
            visibility.value = type;
        };
        return {
            visibility,
            changeVisibility,
        };
    }
})
</script>
<style scoped>
img {
  max-height: 75vh;
}

h2 {
    font-family: "Permanent Marker", cursive;
}
</style>
<template>
    <div class="py-2 flex flex-col-reverse lg:flex-row relative flex-wrap overflow-hidden">
        <div class="overlay"></div>
        <div class="flex justify-center items-center mx-auto lg:w-1/2 w-full">
            <div class="auth-box">
                <div class="flex gap-4 py-4 justify-center text-xl">
                    <span :class="[visibility === 'login' ? 'underline text-white' : '']" @click="changeVisibility('login')">Login</span>
                    <span :class="[visibility === 'register' ? 'underline text-white' : '']" @click="changeVisibility('register')">Register</span>
                </div>
                <div v-if="visibility === 'login'">
                    <Login/>
                </div>
                <div v-if="visibility === 'register'">
                    <Register/>                    
                </div>
            </div>
        </div>
        <div class="lg:mr-10 mt-1 mx-auto relative">
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

.auth-box {
    @apply bg-gray-300 relative rounded;
    width: 75%;
    height: 50%;    
}

.overlay {
    background-image: url("../../public/images/forest.jpg");
    background-position: center;
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}
</style>
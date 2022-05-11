<template>
    <div id="modal-outer">
        <div id="overlay"></div>
        <div id="modal-inner">
            <slot name="title">

            </slot>
            <slot name="body">

            </slot>
            <slot name="footer">

            </slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        console.log("test")        
    },
})
</script>
<style scoped>
#overlay {
    top: 0%;
    left: 0%;
    position: absolute;
    width: 100%;
    height: 100%;
    @apply bg-brand-500;
    opacity: 0.7;
}

#modal-inner {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    background-color: white;
    width: 500px;
    z-index: 3;
    border-radius: 25px;
    padding: 15px 10px;
}
</style>

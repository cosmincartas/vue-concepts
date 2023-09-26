<script setup>
import { createApp, onMounted, ref } from 'vue';
import Root from '../components/application/Root.vue';
const app = createApp(Root, {
    title: 'New App',
});

const errorMessage = ref('');

/**
 * Global Error handling
 */
app.config.errorHandler = (err) => {
    errorMessage.value = err.message;
    setTimeout(() => {
        errorMessage.value = '';
    }, 1000);
};

onMounted(() => {
    app.mount('#separate-app');
});
</script>
<template>
    <div id="separate-app"></div>
    <div v-if="errorMessage" class="bg-red-100 flex justify-center w-[50%] mx-auto">
        {{ errorMessage }}
    </div>
</template>

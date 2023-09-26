<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'App',
    },
});

function throwNewError() {
    throw new Error('Something wrong happend');
}
</script>
<template>
    <div class="flex flex-col items-center">
        <h1>This is a separate {{ title }}</h1>
        <div>
            <h3>Global Error Handling</h3>
            <button @click="throwNewError" class="bg-red-500 rounded p-2">Throw Error</button>
        </div>
    </div>
</template>

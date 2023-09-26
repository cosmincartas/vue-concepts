<script setup>
import { onUpdated } from 'vue';

defineProps({
    title: {
        type: String,
        required: false,
    },
});

onUpdated(() => {
    console.log('Updated');
});
</script>
<template>
    <div class="w-full border-black border-2 rounded p-2 flex flex-col gap-2">
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <div class="flex flex-col gap-2">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    icon: String,
    width: {
        type: Number,
        required: false,
        default: 24,
    },
    height: {
        type: Number,
        required: false,
        default: 24,
    },
});
const scale = computed(() => props.width / 24);
</script>
<template>
    <svg view-box="0 0 512 512" :width="width" :height="height" fill="currentColor">
        <g :transform="`scale(${scale})`">
            <path :d="icon"></path>
        </g>
    </svg>
</template>
<style scoped></style>

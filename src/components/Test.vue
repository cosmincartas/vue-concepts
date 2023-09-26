<script setup>
import { watch, watchEffect } from 'vue';

const props = defineProps({
    value: Object,
});

watch(
    props.value,
    () => {
        console.log('Props changed');
    },
    {
        immediate: true,
    }
);

function getData(url) {
    return url;
}

watchEffect(() => {
    getData(props.value.age);
    console.log('call');
});
</script>
<template>{{ value }}</template>

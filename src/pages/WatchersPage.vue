<script setup>
import { ref, watch, watchEffect } from 'vue';
import Section from '../components/common/Section.vue';
import Test from '../components/Test.vue';
const state1 = ref({
    age: '23',
});

/* watch(
    () => state1.value.age,
    (newVal) => {
        console.log('state changed');
    },
    {
        immediate: true,
    }
); */

/* watchEffect(() => {
    console.log(state1);
}, {}); */
</script>
<template>
    <div class="page-layout">
        <h1 class="page-title">Watchers</h1>
        <Section title="watchers">
            <div>
                <button class="cc-button" @click="state1.age = 'ceva'">Change</button>
                <Test :value="state1"></Test>
            </div>
        </Section>
    </div>
</template>

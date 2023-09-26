<script setup>
import { computed, ref } from 'vue';
import Section from '../components/common/Section.vue';

// Section 1
const isOk = ref(true);
const hasError = ref(false);

// Section 2
const textStyle = computed(() => {
    return {
        'text-green-500': isOk.value,
        'text-red-500': hasError.value,
    };
});

// Section 3
</script>
<template>
    <div class="page-layout">
        <h1 class="text-2xl font-bold">Class And Style Bindings</h1>
        <Section title="Class bindings inline">
            <div :class="{ 'text-green-500': isOk, 'text-red-500': hasError }">
                <button class="cc-button" @click="hasError = true">Trigger</button>
                Some text
            </div>
        </Section>
        <Section title="Class bindings computed">
            <div :class="textStyle">
                <button class="cc-button" @click="hasError = true">Trigger</button>
                Some text
            </div>
        </Section>
        <Section title="Class bindings array">
            <div :class="[{ 'text-green-500': isOk }, { 'text-red-500': hasError }]">
                <button class="cc-button" @click="hasError = true">Trigger</button>
                Some text
            </div>
        </Section>
        <Section title="Dynamic Style Binding">
            <div
                :style="[
                    { color: isOk ? 'green' : 'red' },
                    { fontSize: hasError ? '32px' : '16px' },
                ]">
                <button
                    class="cc-button"
                    @click="
                        () => {
                            hasError = true;
                            isOk = false;
                        }
                    ">
                    Trigger
                </button>
                Some text
            </div>
        </Section>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Section from '../components/common/Section.vue';

// Section 1
const netSalary = ref(1000);

const grossSalary = computed(() => netSalary.value * 1.55);

function increaseSalary() {
    netSalary.value += 200;
}

// Section 2

const writableGrossSalary = computed({
    get() {
        return netSalary.value * 1.55;
    },
    set(newValue) {
        netSalary.value = newValue / 1.55;
    },
});

function adjustGrossSalary() {
    writableGrossSalary.value = 1550;
}
</script>
<template>
    <div class="page-layout">
        <h1 class="text-2xl font-bold">Computed Properties</h1>
        <Section title="Computed Properties">
            <button class="cc-button" @click="increaseSalary">Increase</button>
            Net: {{ netSalary }} Gross: {{ grossSalary }}
        </Section>

        <Section title="Writable Computed Properties">
            <button class="cc-button" @click="adjustGrossSalary">Adjust Gross</button>
            Net: {{ netSalary }} Gross: {{ writableGrossSalary }}
        </Section>
    </div>
</template>

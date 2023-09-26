<script setup>
import { ref } from 'vue';
import Section from '../components/common/Section.vue';

const state = ref([
    {
        id: 1,
        name: 'Jojo',
    },
    {
        id: 2,
        name: 'Avengers',
    },
]);

function addNewMovie() {
    state.value.push({
        id: Math.random(),
        name: 'Star Wars',
    });
}

function removeMovie(index) {
    state.value.splice(index, 1);
}
// Section 2
const stateObj = ref({
    name: 'Cosmin',
    age: 29,
});

function addNewProperty() {
    stateObj.value['country'] = 'Romania';
}

function removeKey(key) {
    delete stateObj.value[key];
}

// Section 3
const stateMap = ref(
    new Map([
        ['Romania', 19],
        ['France', 20],
    ])
);

function addNewCountry() {
    stateMap.value.set('Italy', 32);
}

function removeFromMap(key) {
    console.log(key);
    stateMap.value.delete(key);
}

// Section 4
const stateSet = ref(new Set(['Romania', 'France', 'Italy']));

function addToSet() {
    stateSet.value.add('Ukraine');
}

function removeFromSet(value) {
    stateSet.value.delete(value);
}
</script>
<template>
    <div class="page-layout">
        <h1 class="page-title">List Rendering</h1>
        <Section title="v-for arrays">
            <button class="cc-button" @click="addNewMovie">Add</button>
            <div v-for="(movie, index) in state" :key="movie.id">
                {{ movie.name }}
                <button class="cc-button" @click="removeMovie(index)">Remove</button>
            </div>
        </Section>
        <Section title="v-for objects">
            <button class="cc-button" @click="addNewProperty">Add</button>
            <div v-for="(value, key, index) in stateObj" :key="key">
                {{ key }}: {{ value }}
                <button class="cc-button" @click="removeKey(key)">Remove</button>
            </div>
        </Section>
        <Section title="v-for Maps">
            <button class="cc-button" @click="addNewCountry">Add</button>
            <div v-for="([key, value], index) in stateMap" :key="key">
                {{ key }}: {{ value }} : {{ index }}
                <button class="cc-button" @click="removeFromMap(key)">Remove</button>
            </div>
        </Section>
        <Section title="v-for Sets">
            <button class="cc-button" @click="addToSet">Add</button>
            <div v-for="(value, index) in stateSet" :key="value">
                {{ index }}: {{ value }}
                <button class="cc-button" @click="removeFromSet(value)">Remove</button>
            </div>
        </Section>
    </div>
</template>

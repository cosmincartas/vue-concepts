<script setup>
import { onBeforeUpdate, onUpdated, reactive, ref, shallowRef } from 'vue';
import Section from '../components/common/Section.vue';

//Section 1
const counter = ref(0);
function increment() {
    counter.value += 1;
}
function decrement() {
    counter.value -= 1;
}
function batchIncrement() {
    for (let i = 0; i < 100; ++i) {
        counter.value += 1;
    }
}

// Section 2
const stateObj = ref({
    name: '',
    age: 0,
});

function applyMutation() {
    stateObj.value = {
        name: 'Cosmin Cartas',
        age: 29,
    };
}
// Section 3
const stateArr = ref([]);
function addToCollection() {
    stateArr.value.push({
        id: Math.random(),
    });
}
function removeFromCollection() {
    //stateArr.value = stateArr.value.filter((val, index) => index !== 1);
    stateArr.value.splice(1, 1);
}

function mutateInnerObject() {
    stateArr.value[1].id = 300;
}

// Section 4
const shallowArr = shallowRef([]);

function addToShallowCollection() {
    shallowArr.value.push({
        id: Math.random(),
    });
    console.log(shallowArr.value);
}

function removeFromShallowCollection() {
    shallowArr.value.splice(1, 1);
    console.log(shallowArr.value);
}
function mutateInnerShallowCollection() {
    shallowArr.value[1].id = 300;
    console.log(shallowArr);
}

// Section 5
const reactiveState = reactive({
    id: 1,
});
const reactiveNestedState = reactive({
    id: ref(1),
});
</script>
<template>
    <div class="page-layout">
        <h1 class="text-2xl font-bold">Reactivity</h1>
        <Section title="Primitive refs">
            <div class="flex gap-4">
                <button class="bg-yellow-500 w-[50px] rounded" @click="decrement">-</button>
                <div>{{ counter }}</div>
                <button class="bg-yellow-500 w-[50px] rounded" @click="increment">+</button>
            </div>
            <!-- Inline mutation-->
            <div class="flex gap-4">
                <button @click="counter++">{{ counter }}</button>
            </div>
            <div class="flex gap-4">
                <button class="bg-yellow-500 w-[100px] rounded" @click="batchIncrement">
                    Batch Increment
                </button>
                <div>{{ counter }}</div>
            </div>
        </Section>
        <Section title="Object refs">
            <button class="cc-button" @click="applyMutation">Mutate</button>
            <pre>{{ stateObj }}</pre>
        </Section>
        <Section title="Collection refs">
            <div class="flex gap-2">
                <button class="cc-button" @click="addToCollection">Add</button>
                <button class="cc-button" @click="removeFromCollection">Remove</button>
                <button class="cc-button" @click="mutateInnerObject">Mutate</button>
            </div>

            <pre>{{ stateArr }}</pre>
        </Section>
        <Section title="Shallow refs">
            <div class="flex gap-2">
                <button class="cc-button" @click="addToShallowCollection">Add</button>
                <button class="cc-button" @click="removeFromShallowCollection">Remove</button>
                <button class="cc-button" @click="mutateInnerShallowCollection">Mutate</button>
            </div>

            <pre>{{ shallowArr }}</pre>
        </Section>
        <Section title="Reactive">
            <div class="flex gap-2">
                <button class="cc-button" @click="reactiveState.id = 200">Reactive State</button>
                <button class="cc-button" @click="reactiveNestedState.id += 200">
                    Reactive Nested
                </button>
            </div>

            <pre>{{ reactiveState }}</pre>
            <pre>{{ reactiveNestedState.id + 1 }}</pre>
        </Section>
    </div>
</template>

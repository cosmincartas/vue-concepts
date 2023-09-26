<script setup>
import { handleError, ref } from 'vue';
import Section from '../components/common/Section.vue';

//Section 1
const name = 'John Doe';

//Section 2
const htmlElement = '<p style="color: red"> This is a red paragraph </p>';

//Section 3
const dynamicId = 'container-1';
const nullAttr = null;
const multipleAttributes = {
    id: 'someUnique-1',
    class: 'text-yellow-500',
};

//Section 4
const count = 1;

function doubleValue(value) {
    return value * 2;
}

//Section 5
let isVisible = ref(false);
function toggleVisibility() {
    isVisible.value = !isVisible.value;
}
const key = 'class';
const click = 'click';
const dynamicAttributes = {
    class: 'text-yellow-500',
};
const dynamicEvents = {
    click: () => {
        alert('Clicked');
    },
};
</script>

<template>
    <div class="page-layout">
        <h1 class="text-2xl font-bold">Template Syntax</h1>
        <Section title="Text Interpolation"> My Name is {{ name }} </Section>
        <Section title="Raw HTML">
            {{ htmlElement }}
            <div v-html="htmlElement"></div>
        </Section>
        <Section title="Attribute Bindings">
            <div v-bind:id="dynamicId">This element has a dynamic id: #{{ dynamicId }}</div>
            <div :id="`${dynamicId}-2`">Shorthand notation: #{{ `${dynamicId}-2` }}</div>
            <div :class="nullAttr">null / undefined attribute binding will be ignored</div>
            <div v-bind="multipleAttributes">
                You can bind multiple attributes using objects and v-bind Vue directive
            </div>
        </Section>
        <Section title="Javascript Expressions">
            <div>Simple expression: {{ count + 1 }}</div>
            <div>
                Ternary Operator: {{ count > 1 ? 'Greater than 1' : 'Less or equals than 1' }}
            </div>
            <div>Function call {{ doubleValue(2) }}</div>
            <!-- <div>{{ alert(count) }}</div> -->
        </Section>
        <Section title="Directives">
            <div>
                <button v-on:click="toggleVisibility">
                    Toggle Visibility: Visible {{ isVisible }}
                </button>
                <div v-if="isVisible">Conditional rendering</div>
            </div>
            <div :[key]="dynamicAttributes[key]">Dynamic Attribute Arguments</div>
            <div @[click]="dynamicEvents['click']">Dynamic Event Arguments</div>
            <div @click.self="dynamicEvents['click']">Event Modifiers</div>
        </Section>
    </div>
</template>

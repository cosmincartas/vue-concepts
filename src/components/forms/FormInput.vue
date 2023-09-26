<script setup>
import { computed, ref } from 'vue';
import { mdiEyeOff, mdiEye } from '@mdi/js';
import Icon from '../common/Icon.vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    label: {
        type: String,
        required: false,
    },
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);
const shouldDisplayPwd = ref(false);
const displayPwdIcon = computed(() => (shouldDisplayPwd.value ? mdiEyeOff : mdiEye));

function handleValueInput(event) {
    emit('update:modelValue', event.target.value);
}
</script>
<template>
    <label v-if="label">{{ label }}</label>
    <div class="relative grid w-full grid-cols-[auto_1fr] gap-2">
        <slot name="pre-content"></slot>
        <input
            :type="shouldDisplayPwd && type === 'password' ? 'text' : type"
            class="border-2 border-black rounded"
            :value="modelValue"
            @input="handleValueInput" />
        <button
            v-if="type === 'password'"
            class="absolute right-2"
            @click="shouldDisplayPwd = !shouldDisplayPwd">
            <Icon :icon="displayPwdIcon" />
        </button>
    </div>
</template>

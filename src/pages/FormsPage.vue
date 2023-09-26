<script setup>
import Section from '@/components/common/Section.vue';
import FormInput from '../components/forms/FormInput.vue';
import { reactive, watch } from 'vue';
import { mdiAccount, mdiLock } from '@mdi/js';
import Icon from '@/components/common/Icon.vue';

const state = reactive({
    username: '',
    password: '',
});

function subminData() {
    console.log(state);
}
</script>
<template>
    <div class="page-layout">
        <h1 class="page-title">Forms</h1>
        <Section title="v-model">
            <FormInput label="Username" v-model="state.username">
                <template #pre-content>
                    <Icon :icon="mdiAccount" />
                </template>
            </FormInput>
            <FormInput label="Password" type="password" v-model="state.password">
                <template #pre-content>
                    <Icon :icon="mdiLock" />
                </template>
            </FormInput>
            <button class="cc-button" @click="subminData">Submit</button>
        </Section>
    </div>
</template>

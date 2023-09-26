<script setup>
import { ref } from 'vue';
import Section from '../components/common/Section.vue';

// Section 1
const orderStatus = ref('PENDING');
function toggleOrderStatus() {
    if (orderStatus.value === 'PENDING') {
        orderStatus.value = 'PROCESSING';
    } else if (orderStatus.value === 'COMPLETED') {
        orderStatus.value = 'PENDING';
    } else {
        orderStatus.value = 'COMPLETED';
    }
}
</script>
<template>
    <div class="page-layout">
        <h1 class="page-title">Conditional Rendering</h1>
        <Section title="v-if on elements">
            <div>
                <button class="cc-button" @click="toggleOrderStatus">Toggle State</button>
                <div v-if="orderStatus === 'PENDING'">Order is pending</div>
                <div v-else-if="orderStatus === 'PROCESSING'">Order is processing</div>
                <div v-else>Order is completed</div>
            </div>
        </Section>
        <Section title="v-show on elements">
            <div>
                <button class="cc-button" @click="toggleOrderStatus">Toggle State</button>
                <div v-show="orderStatus === 'PROCESSING'">Order is processing</div>
            </div>
        </Section>
    </div>
</template>

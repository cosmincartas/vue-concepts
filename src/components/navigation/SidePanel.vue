<script setup>
import { routes } from '@/router';

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
        default: false,
    },
});
</script>
<template>
    <Transition name="slide">
        <div
            v-if="isVisible"
            class="absolute w-[300px] h-[calc(100vh-48px)] bg-gray-200 rounded p-4">
            <div v-for="route in routes" :key="route.name" class="text-blue-400 font-bold">
                <RouterLink :to="route.path">{{ route.label }}</RouterLink>
                <div
                    class="ml-2 font-normal"
                    v-for="childRoute in route?.children"
                    :key="childRoute.name">
                    <RouterLink :to="childRoute.path">{{ childRoute.label }}</RouterLink>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.2s ease-in;
}

.slide-enter-from,
.slide-leave-to {
    transform: translate(-100%);
}
</style>

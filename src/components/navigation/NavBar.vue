<script setup>
import Icon from '@/components/common/Icon.vue';
import { mdiMenu } from '@mdi/js';

const emit = defineEmits(['toggleSideMenu']);
function toggleSideMenu() {
    emit('toggleSideMenu');
}
</script>
<template>
    <div class="flex p-2">
        <Icon
            :icon="mdiMenu"
            :width="32"
            :height="32"
            class="text-gray-500 cursor-pointer"
            @click="toggleSideMenu" />
        <img src="@/assets/logo.svg" class="w-[32px] ml-auto" />
    </div>
</template>
<style scoped></style>

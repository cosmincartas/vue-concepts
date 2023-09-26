<script setup>
import { ref } from 'vue';
import NavBar from './components/navigation/NavBar.vue';
import SidePanel from './components/navigation/SidePanel.vue';

const showSidePanel = ref(false);
function toggleSideMenu() {
    showSidePanel.value = !showSidePanel.value;
}
</script>
<template>
    <div class="w-full h-[100vh]">
        <NavBar @toggle-side-menu="toggleSideMenu" />
        <SidePanel :is-visible="showSidePanel" />
        <RouterView></RouterView>
    </div>
</template>

<style scoped></style>

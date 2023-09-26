<script setup>
import Section from '@/components/common/Section.vue';
import ScriptSetupComponent from '@/components/ScriptSetupComponent.vue';
import ExportDefaultComponent from '../components/ExportDefaultComponent.vue';
import RenderFunctionComponent from '../components/RenderFunctionComponent.vue';
</script>
<template>
    <div class="page-layout">
        <h1 class="page-title">Components</h1>
        <Section title="Script setup">
            <ScriptSetupComponent />
        </Section>
        <Section title="Export default">
            <ExportDefaultComponent />
        </Section>
        <Section title="Render function">
            <RenderFunctionComponent />
        </Section>
    </div>
</template>

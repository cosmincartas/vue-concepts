import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import ReactivityPage from '@/pages/ReactivityPage.vue';
import RefPage from '@/pages/RefPage.vue';
import ReactivePage from '@/pages/ReactivePage.vue';
import CreateAppPage from '@/pages/CreateAppPage.vue';
import TemplatePage from '@/pages/TemplatePage.vue';
import ComputedPage from '@/pages/ComputedPage.vue';
import StylesPage from '@/pages/StylesPage.vue';
import ConditionalRenderingPage from '@/pages/ConditionalRenderingPage.vue';
import ListRenderingPage from '@/pages/ListRenderingPage.vue';
import WatchersPage from '@/pages/WatchersPage.vue';
import ComponentsPage from '@/pages/ComponentsPage.vue';

export const routes = [
    {
        path: '/',
        name: 'landing',
        label: 'Landing Page',
        component: LandingPage,
    },
    {
        path: '/create-app',
        name: 'application',
        label: 'Create Application',
        component: CreateAppPage,
    },
    {
        path: '/templates',
        name: 'templates',
        label: 'Template Syntax',
        component: TemplatePage,
    },
    {
        path: '/computed',
        name: 'computed',
        label: 'Computed Props',
        component: ComputedPage,
    },
    {
        path: '/styles',
        name: 'styles',
        label: 'Class & Style Bindings',
        component: StylesPage,
    },
    {
        path: '/conditional-rendering',
        name: 'conditional-rendering',
        label: 'Conditional Rendering',
        component: ConditionalRenderingPage,
    },
    {
        path: '/list-rendering',
        name: 'list-rendering',
        label: 'List Rendering',
        component: ListRenderingPage,
    },
    {
        path: '/watchers',
        name: 'watchers',
        label: 'Watchers',
        component: WatchersPage,
    },
    {
        path: '/components',
        name: 'components',
        label: 'Components',
        component: ComponentsPage,
    },
    {
        path: '/reactivity',
        name: 'reactivity',
        label: 'Reactivity',
        component: ReactivityPage,
        children: [
            {
                path: '',
                name: 'refs',
                label: 'refs',
                component: RefPage,
            },
            {
                path: '/reactive',
                name: 'reactive',
                label: 'reactive',
                component: ReactivePage,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

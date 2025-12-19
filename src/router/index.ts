import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/Layout.vue';
import ApiLogsView from '@/views/api-logs/ApiLogsView.vue';
import ApiDocumentation from '@/views/api-documentation/ApiDocumentation.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: 'logs',
          component: ApiLogsView
        },
        {
          path: 'documentation',
          component: ApiDocumentation
        }
      ]
    }
  ]
})

export default router

<!-- src/components/sidebar/AppSidebar.vue -->
<template>
  <div class="flex flex-col gap-4 flex-1">
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="Company logo"
        :style="{ backgroundImage: `url(${logo})` }">
      </div>
      <div class="flex flex-col">
        <h1 class="text-white text-base font-medium leading-normal">DevTools Inc.</h1>
        <p class="text-[#9dabb9] text-sm font-normal leading-normal">Workspace</p>
      </div>
    </div>

    <!-- Menu -->
    <nav class="flex flex-col gap-2 mt-4">
      <RouterLink to="/logs" class="menu-item" :class="isActive('/api-logs')">
        <span class="material-symbols-outlined text-2xl">code_blocks</span>
        <p class="text-sm font-medium leading-normal">API Logs</p>
      </RouterLink>

      <RouterLink to="/documentation" class="menu-item" :class="isActive('/api-docs')">
        <span class="material-symbols-outlined text-2xl">description</span>
        <p class="text-sm font-medium leading-normal">API Documentation</p>
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import logo from "@/assets/images/logo.ico"
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) =>
  route.path.startsWith(path)
    ? 'bg-primary/20 text-primary'
    : 'text-slate-400 hover:bg-white/5 hover:text-white'
</script>

<style scoped>
.menu-item {
  @apply flex items-center gap-3 px-3 py-2 rounded-lg transition-colors;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>

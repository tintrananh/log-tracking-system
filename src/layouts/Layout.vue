<!-- src/layouts/AppLayout.vue -->
<template>
  <div class="grid grid-cols-12 h-screen w-full bg-background-light dark:bg-background-dark">
    <!-- Sidebar -->
    <aside class="col-span-2 border-r border-slate-200/10 bg-[#111418] p-4">
      <sidebar />
    </aside>

    <!-- Main content -->
    <main class="col-span-10 overflow-hidden">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import sidebar from '@/components/Sidebar.vue'
</script>

<!-- src/components/api/ApiDetail.vue -->
<template>
  <div v-if= "api" class="p-6 h-full flex flex-col">
    <h2 class="text-white text-lg font-bold">
      {{ api.method }} {{ api.url }}
    </h2>

    <div class="grid grid-cols-3 gap-4 text-sm mt-4">
      <div>
        <p class="text-slate-400">Status</p>
        <p class="text-green-400 font-semibold">{{ api.status }}</p>
      </div>
      <div>
        <p class="text-slate-400">Method</p>
        <p class="text-white font-semibold">{{ api.method }}</p>
      </div>
      <div>
        <p class="text-slate-400">Time</p>
        <p class="text-white font-semibold">{{ api.time }}</p>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mt-6 flex border-b border-slate-200/10">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="px-4 py-2 text-sm font-medium"
        :class="activeTab === tab
          ? 'text-primary border-b-2 border-primary'
          : 'text-white/60 hover:text-white'"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Content -->
    <div class="flex-1 mt-4 bg-[#111418] rounded-lg p-4 text-white/90">
      <pre>{{ activeTab }} content here</pre>
    </div>
  </div>

  <div v-else class="h-full flex items-center justify-center text-slate-500">
    Select an API to view details
  </div>
</template>

<script setup lang="ts">
import type { ApiDetail } from '@/types/api-logs/ApiDetail';
import { ref } from 'vue';

const tabs = ['Response', 'Request', 'Headers', 'Metadata', 'Test Cases'];
const api = ref<ApiDetail>({
  method: 'GET',
  status: "200",
  time: new Date(),
  url: "api/v1/orders"
});
const activeTab = ref('Request');
</script>

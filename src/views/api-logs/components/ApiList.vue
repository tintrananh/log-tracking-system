<!-- src/components/api/ApiList.vue -->
<template>
  <div class="h-full overflow-y-auto">
    <div class="flex flex-col p-6 border-b border-slate-200/10">
      <div class="flex flex-wrap justify-between gap-3 items-center">
        <div class="flex flex-col gap-1">
          <p class="text-white text-2xl font-bold leading-tight">API Call Logs</p>
          <p class="text-[#9dabb9] text-sm font-normal leading-normal">Monitor API calls</p>
        </div>
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-700/50 hover:bg-slate-700 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
          <span class="material-symbols-outlined text-lg mr-2">refresh</span>
          <span class="truncate">Refresh</span>
        </button>
      </div>
      <div class="mt-4">
        <label class="flex flex-col min-w-40 h-11 w-full">
          <div class="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#283039]">
            <div class="text-[#9dabb9] flex items-center justify-center pl-3">
              <span class="material-symbols-outlined text-2xl">search</span>
            </div>
            <input
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#283039] focus:border-none h-full placeholder:text-[#9dabb9] px-2 text-sm font-normal leading-normal"
              placeholder="Enter URL" value="">
          </div>
        </label>
      </div>
      <div class="flex flex-wrap items-start justify-between gap-2 mt-4">
        <div class="flex items-center gap-2 flex-wrap">
          <button
            class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] hover:bg-slate-700 transition-colors px-3">
            <p class="text-white text-sm font-medium leading-normal">Status: All</p>
            <span class="material-symbols-outlined text-lg">arrow_drop_down</span>
          </button>
          <button
            class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] hover:bg-slate-700 transition-colors px-3">
            <p class="text-white text-sm font-medium leading-normal">Method: All</p>
            <span class="material-symbols-outlined text-lg">arrow_drop_down</span>
          </button>
        </div>
        <button
          class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#283039] hover:bg-slate-700 transition-colors px-3">
          <span class="material-symbols-outlined text-lg">calendar_today</span>
          <p class="text-white text-sm font-medium leading-normal">Date Range</p>
        </button>
      </div>
    </div>
    <div v-for="api in apis" :key="api.id" @click="$emit('select', api)"
      class="px-4 py-3 border-b border-slate-200/10 cursor-pointer hover:bg-white/5">
      <p class="text-white text-sm font-medium">
        <span :class="methodColor(api.method)">
          {{ api.method }}
        </span>
        {{ api.url }}
      </p>
      <p class="text-xs text-slate-400">
        {{ api.status }} | {{ api.time }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const apis = [
  {
    id: 1,
    method: 'POST',
    url: '/api/v1/files/upload',
    status: '201 Created',
    time: '09:32:01'
  },
  {
    id: 2,
    method: 'GET',
    url: '/api/v1/products/12345',
    status: '500 Server Error',
    time: '09:31:55'
  }
]

const methodColor = (method: string) =>
({
  POST: 'text-green-400 font-bold',
  GET: 'text-blue-400 font-bold',
  PUT: 'text-orange-400 font-bold',
  DELETE: 'text-red-400 font-bold'
}[method])
</script>

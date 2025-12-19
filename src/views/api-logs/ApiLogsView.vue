<!-- src/views/ApiLogsView.vue -->
<template>
  <div class="grid grid-cols-10 h-full">
    <!-- API List -->
    <section class="col-span-10 lg:col-span-4 border-r border-slate-200/10">
      <ApiList @select="onSelectApi" />
    </section>

    <!-- API Detail -->
    <section class="col-span-10 lg:col-span-6">
      <ApiDetail :api="selectedApi" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ApiList from './components/ApiList.vue';
import ApiDetail from './components/ApiDetail.vue';

const selectedApi = ref<number>(1)

const onSelectApi = (api: number) => {
  selectedApi.value = api
}
</script>

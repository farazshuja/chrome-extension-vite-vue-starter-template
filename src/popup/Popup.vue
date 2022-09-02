<script setup lang="ts">
import { storageDemo } from '@/logic/storage';
function openOptionsPage() {
  chrome.runtime.openOptionsPage();
}
</script>

<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700">
    <carbon-bee class="text-red-20 text-6xl m-auto" />
    <p class="mt-2 opacity-50">This is the popup page</p>
    <button
      class="btn mt-2 bg-blue-300 px-4 py-1 rounded-md hover:bg-blue-400"
      @click="openOptionsPage"
    >
      Open Options
    </button>
    <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div>
  </main>
</template>

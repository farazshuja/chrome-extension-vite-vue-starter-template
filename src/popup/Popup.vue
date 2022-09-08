<script setup lang="ts">
import { storageDemo } from '@/logic/storage';
function openOptionsPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  chrome.runtime.openOptionsPage();
}
</script>

<template>
  <main class="cx-w-[300px] cx-px-4 cx-py-5 cx-text-center cx-text-gray-700">
    <carbon-bee class="cx-text-red-20 cx-text-6xl cx-m-auto" />
    <p class="cx-mt-2 cx-opacity-50">This is the popup page</p>
    <button
      class="cx-btn cx-mt-2 cx-bg-blue-300 cx-px-4 cx-py-1 cx-rounded-md hover:cx-bg-blue-400"
      @click="openOptionsPage"
    >
      Open Options
    </button>
    <div class="cx-mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div>
  </main>
</template>

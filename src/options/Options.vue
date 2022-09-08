<script setup lang="ts">
import { storageDemo } from '@/logic/storage';
</script>

<template>
  <main
    class="cx-flex cx-flex-col cx-px-4 cx-py-10 cx-text-center cx-text-gray-700"
  >
    <img
      src="@/assets/bee128.png"
      class="icon-btn cx-mx-2 cx-text-2xl"
      alt="extension icon"
    />
    <div>Options</div>
    <p class="cx-mt-2 cx-opacity-50">This is the options page</p>

    <input
      v-model="storageDemo"
      class="cx-border cx-border-gray-400 cx-rounded cx-px-2 cx-py-1 cx-mt-2"
    />

    <div class="cx-mt-4">Powered by Vite</div>
  </main>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core';

const [show, toggle] = useToggle(false);
</script>

<template>
  <div
    class="root-app cx-fixed cx-right-0 cx-bottom-0 cx-m-5 cx-z-100 cx-flex cx-font-sans cx-select-none cx-leading-1em"
  >
    <div
      class="cx-bg-white cx-rounded-full cx-shadow cx-w-max cx-h-min"
      p="cx-x-4 cx-y-2"
      m="cx-y-auto cx-r-2"
      transition="cx-opacity cx-duration-300"
      :class="show ? 'cx-opacity-100' : 'cx-opacity-0'"
    >
      Vitesse WebExt
    </div>
    <div
      class="cx-flex cx-w-10 cx-h-10 cx-rounded-full cx-shadow cx-cursor-pointer cx-bg-white-20 hover:cx-bg-gray-100"
      @click="toggle()"
    >
      <carbon-bee class="cx-block cx-m-auto cx-text-red-20 cx-text-lg" />
    </div>
  </div>
</template>

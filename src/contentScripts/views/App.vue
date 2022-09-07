<script setup lang="ts">
import { useToggle } from '@vueuse/core';

const [show, toggle] = useToggle(false);
</script>

<template>
  <div
    class="root-app fixed right-0 bottom-0 m-5 z-100 flex font-sans select-none leading-1em"
  >
    <h1 class="test">Test</h1>
    <div
      class="bg-white text-green-300 rounded-full shadow w-max h-min"
      p="x-4 y-2"
      m="y-auto r-2"
      transition="opacity duration-300"
      :class="show ? 'opacity-100' : 'opacity-0'"
    >
      Vitesse WebExt23
    </div>
    <div
      class="flex w-10 h-10 rounded-full shadow cursor-pointer"
      bg="teal-600 hover:teal-700"
      @click="toggle()"
    >
      <pixelarticons-power class="block m-auto text-white text-lg" />
    </div>
  </div>
</template>

<style>
h1.test {
  color: purple !important;
}
</style>

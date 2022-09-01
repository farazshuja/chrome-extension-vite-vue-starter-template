import { fileURLToPath, URL } from 'node:url';
// import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';
import windiConfig from './windi.config';

// export const r = (...args: string[]) => fileURLToPath(new URL('./src', import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      imports: [
        'vue',
        {
          'webextension-polyfill': [['*', 'browser']],
        },
      ],
      dts: fileURLToPath(new URL('./src/auto-imports.d.ts', import.meta.url)),
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: [fileURLToPath(new URL('./src/components', import.meta.url))],
      // generate `components.d.ts` for ts support with Volar
      dts: true,
      resolvers: [
        // auto import icons
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      config: windiConfig,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

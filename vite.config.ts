import { fileURLToPath, URL } from 'node:url';
// import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import windiConfig from './windi.config';

// export const r = (...args: string[]) => fileURLToPath(new URL('./src', import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
    crx({ manifest }),
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
    {
      name: 'merge-css-shadow-dom',
      enforce: 'post',
      apply: 'serve',
      transform(src, id) {
        if (/\.(css).*$/.test(id)) {
          console.log(src);
          const fn =
            "import { updateStyle, removeStyle } from '/src/contentScripts/utils.ts';\n";
          let updatedSrc = fn + src;
          updatedSrc = updatedSrc.replace(
            '__vite__updateStyle(',
            'updateStyle(',
          );
          updatedSrc = updatedSrc.replace(
            '__vite__removeStyle(',
            'removeStyle(',
          );
          return {
            code: updatedSrc,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

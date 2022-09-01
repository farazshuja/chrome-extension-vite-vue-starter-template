import { resolve } from 'path';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,
  extract: {
    include: [resolve(__dirname, 'src/**/*.{vue,html}')],
  },
  theme: {
    extend: {
      colors: {
        black: {
          20: '#1D1D1F',
          70: '#7e7e7e',
        },
        blue: {
          10: '#EBF5FF',
          20: '#D3E9FF',
          30: '#2D9DCF',
        },
        gray: {
          10: '#D9D9D9',
          20: '#85929E',
        },
        green: {
          200: '#43AC6A',
        },
        orange: {
          200: '#E8AB31',
        },
        red: {
          10: '#F27F93',
          20: '#F27F93',
        },
        white: {
          0: '#FFFFFF',
          10: '#F4F6F8',
          20: '#E4E9EE',
        },
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
      },
    },
  },
});

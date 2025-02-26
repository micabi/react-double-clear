import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import license from 'rollup-plugin-license';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    esbuild: {
      banner: '/*! licenses: /assets/vendor.LICENSE.txt */',
      legalComments: 'external',
      pure: mode === 'production' ? ['console.log'] : [],
    },
    build: {
      rollupOptions: {
        plugins: [
          license({
            thirdParty: {
              output: './dist/assets/vendor.LICENSE.txt',
            },
          }),
        ],
      },
    },
  };
});

import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        '@yanyu-fe/utils',
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          '@yanyu-fe/utils': 'yanyuUtils',
        },
      },
    },
    lib: {
      entry: 'src/style.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'uiDesign',
    },
  },
})

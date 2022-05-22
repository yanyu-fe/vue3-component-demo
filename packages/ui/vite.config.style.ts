import { defineConfig } from 'vite'
import fg from 'fast-glob'

const files = fg.sync('**/style/index.ts', {
  cwd: process.cwd(),
  onlyFiles: true,
})

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: /\.less$/,
      input: files,
      output: [
        // esm
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        // cjs
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    // 这一块是不会被使用的
    lib: {
      entry: '',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    {
      name: 'vite-plugin-style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)
        for (const key of keys) {
          const bundler: any = bundle[key]
          this.emitFile({
            type: 'asset',
            fileName: key.replace('index.js', 'css.js'),
            source: bundler.code.replace(/\.less/g, '.css'),
          })
        }
      },
    },
  ],
})

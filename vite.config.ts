import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path"
import dts from 'vite-plugin-dts'
import sveltePreprocess from 'svelte-preprocess';
import Delete from 'rollup-plugin-delete'

export default defineConfig(({ command, mode }) => {
  if (command === 'build' && mode === "development") {
    return {
      plugins: [
        svelte({
          compilerOptions: {
            customElement: process.env.NODE_ENV === 'production' ? true : false// 开发环境 会报错
          },
          preprocess: sveltePreprocess(),
        }),
        dts({
          outputDir: ['dist/types'],
          staticImport: true,
          insertTypesEntry: true,
          beforeWriteFile: (filePath: string, content: string) => {
            if (filePath.includes('index.d.ts')) {
              const result = content.replace(/.svelte/g, '')

              return { filePath, content: result }
            }
          }
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/lib/index.ts'),
          name: 'virtual-list',
        },
        sourcemap: false,
        minify: false,
        rollupOptions: {
          input: ['src/lib/index.ts'],
          output: [
            {
              format: 'es',
              //不用打包成.es.js,这里我们想把它打包成.js
              entryFileNames: '[name].js',
              //让打包目录和我们目录对应
              preserveModules: true,
              //配置打包根目录
              dir: 'dist/es',
              preserveModulesRoot: 'src',
            },
            {
              format: 'cjs',
              entryFileNames: '[name].cjs',
              //让打包目录和我们目录对应
              preserveModules: true,
              //配置打包根目录
              dir: 'dist/cjs',
              preserveModulesRoot: 'src'
            }
          ],
          plugins: [
            Delete({
              targets: ["dist/*.{svg}"]
            })
          ]
        }
      },
    }
  } else {
    return {
      plugins: [svelte()],
      build: {
        outDir: 'demo',
        base: '/render-big-data/'
      }
    }
  }
})

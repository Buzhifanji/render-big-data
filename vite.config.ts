import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path"
import dts from 'vite-plugin-dts'
import sveltePreprocess from 'svelte-preprocess';
import Delete from 'rollup-plugin-delete'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig(({ command, mode }) => {
  console.log({ command, mode })
  if (command === 'build') {
    if (mode === 'production') {
      return {
        plugins: [
          svelte({
            compilerOptions: {
              customElement: true // 开发环境 会报错
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
        plugins: [svelte(), splitVendorChunkPlugin()],
        base: '/render-big-data/',
        build: {
          outDir: 'demo',
          rollupOptions: {
            output: {
              chunkFileNames: 'assets/[name]-[hash].js',
              entryFileNames: 'assets/[name]-[hash].js',
              assetFileNames: 'assets/static/[name]-[hash].[ext]',
              manualChunks(id: any) {
                if (id.includes('mockjs')) {
                  return 'mock'
                } else if (id.includes('node_modules')) {
                  return 'vendor'
                }
              }
            },
          }
        }
      }
    }
  } else {
    return {
      plugins: [svelte()],
    }
  }
})

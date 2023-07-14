import fg from 'fast-glob'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// 定义用于搜索文件的入口点数组
const entryPoints = ['src/**/*.{ts,tsx}']
const files = fg.sync(entryPoints, { absolute: true })
const entities = files.map((file) => {
  const [key] = file.match(/(?<=src\/).*$/) || []
  const keyWithoutExt = key.replace(/\.[^.]*$/, '')
  return [keyWithoutExt, file]
})
const entries = entities.reduce((acc, curr) => {
  const [key, filePath] = curr
  acc[key] = filePath
  return acc
}, {})

export default defineConfig(() => {
  return {
    // 自动生成 d.ts
    plugins: [dts({ exclude: ['stories'] })],

    // 配置 UI 库别名
    resolve: { alias: { 'solar-ui': path.resolve('./src') } },

    build: {
      outDir: 'dist',
      lib: {
        entry: entries,
        formats: ['es'],
      },

      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['react', 'react-dom'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            React: 'react',
            ReactDOM: 'react-dom',
          },
        },
      },
    },
  }
})

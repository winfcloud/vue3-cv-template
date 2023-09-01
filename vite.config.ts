import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        // '@/': fileURLToPath(new URL('./src/', import.meta.url)) // 官方方法，Error
        // '@': path.resolve(__dirname, './src'), // 等价方案
      },
    },
    server: {
      port: 3000,
      open: true,
      cors: true,
    },
    plugins: [
      vue(),
      vueJsx({
        /* options */
      }),
      Components({
        /* options */
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        /**
         * 自定义插入位置
         * 'body-last' | 'body-first'
         * @default: body-last
         */
        inject: 'body-last',
        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
      viteCompression(),
    ],
  }
})

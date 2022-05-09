import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { crx } from 'rollup-plugin-chrome-extension'
import zip from 'rollup-plugin-zip'

import manifest from './src/manifest.json'
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'

const crxOptions = {
  manifest: Object.assign(manifest, {
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
  }),
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(), crx(crxOptions), isProd && zip({ dir: 'releases' })],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          // `@import "@/style/base/globalVariable.scss";
          //  @import "@/style/base/globalMixin.scss";`,
        ],
      },
    },
  },
  // 强制预构建插件包
  // optimizeDeps: {
  //   include: [
  //     `monaco-editor/esm/vs/language/json/json.worker`,
  //     `monaco-editor/esm/vs/language/css/css.worker`,
  //     `monaco-editor/esm/vs/language/html/html.worker`,
  //     `monaco-editor/esm/vs/language/typescript/ts.worker`,
  //     `monaco-editor/esm/vs/editor/editor.worker`,
  //   ],
  // },
})

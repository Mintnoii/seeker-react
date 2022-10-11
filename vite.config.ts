import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import vitePluginImp from 'vite-plugin-imp'
import WindiCSS from 'vite-plugin-windicss'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'path'

export default defineConfig({
  base: './',
	// TODO 可以改成自己项目的前缀
  envPrefix: 'SEEKER_REACT_',
  envDir: './env',
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    react(),
    WindiCSS(),
    AutoImport({
      imports: ['react', 'react-router-dom', 'ahooks'],
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`
        }
      ]
    }),
    viteCompression()
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE' //设置antd主题色
        }
      }
    }
  }
})

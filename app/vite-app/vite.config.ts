import { SharedConfig } from 'vite'

export default {
  optimizeDeps: {
    exclude: ['@vite-playground/base']
  },
} as SharedConfig

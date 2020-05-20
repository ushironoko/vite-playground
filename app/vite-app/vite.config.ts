import { SharedConfig } from 'vite'

export default {
  optimizeDeps: {
    // exclude: ['@vite-playground/base'] // depOptimizerを通るとキャッシュに入って使えるようになるがhmrが効かない
  },
} as SharedConfig

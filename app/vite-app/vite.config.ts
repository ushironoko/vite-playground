import { SharedConfig } from 'vite'

export default {
   // 依存が事前にビルドされていない場合depOptimizerを通ってビルドされるがhmrは効かない
   // ここで無効にできるけどビルドされていないので読み出しできずに動かない
  optimizeDeps: {
    exclude: ['@vite-playground/base']
  },
} as SharedConfig

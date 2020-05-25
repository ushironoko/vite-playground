import preact from 'rollup-plugin-preact'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: {
    ui: 'index.ts',
  },
  output: {
    dir: 'dist',
    entryFileNames: 'bundle.js',
    format: 'esm',
    sourcemap: false,
  },
  plugins: [
    typescript(),
    preact(),
  ],
  external: ['preact', 'preact-compat', 'preact-compat2'],
}

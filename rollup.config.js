import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  // 入口文件
  input: process.env.TYPE === 'single' ? `${process.env.TARGET}` : './src/index.ts',
  output: process.env.TYPE === 'single' ? [
    {
      // 打包名称
      file: `./lib/${process.env.FILENAME.slice(0, -3)}.js`,
      format: 'cjs',
    },
  ] : [
    {
      // 打包名称
      file: './dist/index.js',
      format: 'cjs',
    },
  ],
  // umd -> 统一模块化
  // 实时编译打包
  // watch: {
  //   exclude: 'node_modules/**',
  // },
  plugins: [
    resolve({
      // eslint-disable-next-line max-len
      // Plugin node-resolve: preferring built-in module 'crypto' over local alternative at 'crypto', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
      preferBuiltins: true,
      mainFields: ['browser'],
    }), // 使外部库与源码集成
    commonjs(),
    typescript(),
    terser(), // minifies generated bundles
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
  ],
  external: [/@google-cloud/],
};

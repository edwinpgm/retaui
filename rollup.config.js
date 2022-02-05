import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
// import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const packageJson = require('./package.json');

export default [
  {
    input: 'components/index.ts',
    output: [
      {
        format: 'esm',
        dir: 'lib',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'components',
        exports: 'named',
      },
      {
        format: 'cjs',
        dir: 'lib',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'components',
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        // useTsconfigDeclarationDir: false,
      }),
      postcss(),
      terser(),
    ],
  },
  // {
  //   input: 'dist/esm/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  //   external: [/\.css$/],
  // },
];

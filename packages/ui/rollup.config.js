import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  'react/jsx-runtime'
];

// Define entry points using existing index files
const entryPoints = {
  content: 'src/components/content/index.ts',
  form: 'src/components/form/index.ts',
  surface: 'src/components/surface/index.ts',
  navigation: 'src/components/navigation/index.ts',
  media: 'src/components/media/index.ts',
  overlay: 'src/components/overlay/index.ts',
  feedback: 'src/components/feedback/index.ts',
  hooks: 'src/hooks/index.ts'
};

export default [
  // Main build
  {
    input: entryPoints,
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        entryFileNames: '[name].js',
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
        entryFileNames: '[name].js',
      },
    ],
    external,
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        outDir: undefined,
      }),
      postcss({
        extract: 'styles.css',
        minimize: true,
        use: ['sass'],
      }),
    ],
  },
  // Type declarations
  {
    input: entryPoints,
    output: {
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].d.ts',
    },
    external,
    plugins: [
      dts(),
    ],
  },
];
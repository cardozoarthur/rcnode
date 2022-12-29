const typescript = require('rollup-plugin-typescript2');
const babel = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');

module.exports = [
  // ES Modules
  {
    input: 'src/main.ts',
    external: ['axios', 'uuid'],
    output: {
      file: 'dist/index.es.js', format: 'es',
      globals: {
        axios: 'axios',
        uuid: 'uuid'
      }
    },
    plugins: [
      typescript(),
      babel({ extensions: ['.ts'] }),
    ],
  },

  // UMD
  {
    input: 'src/main.ts',
    external: ['axios', 'uuid'],
    output: {
      file: 'dist/index.umd.min.js',
      format: 'umd',
      name: 'redecoin_sdk',
      indent: false,
      globals: {
        axios: 'axios',
        uuid: 'uuid'
      }
    },
    plugins: [
      typescript(),
      babel({ extensions: ['.ts'], exclude: 'node_modules/**' }),
      terser(),
    ],
  },
]

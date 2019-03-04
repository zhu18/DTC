const fs = require('fs');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const progress = require('rollup-plugin-progress');
const filesize = require('rollup-plugin-filesize');
const babel = require('rollup-plugin-babel');
const eslint = require('rollup-plugin-eslint');
const cleanup = require('rollup-plugin-cleanup');
const terser = require("rollup-plugin-terser");
const config = require('./config')

let fileList = [],
    fileListMinfy = [],
    params = {}
// 处理通过命令行传递的参数
process.argv.forEach((item, index) => {
  let newitem = item.replace(/\\s/ig, '')
  let paramsArray = newitem.split('=')
  if (paramsArray.length === 2 && paramsArray[0]) {
    params[paramsArray[0]] = paramsArray[1]
  }
})

fs.readdir('./src/', function (err, files) {
  let reg = /^(\.|_)/
  files.map(async function (v, i) {
    if (!reg.test(v) && v != 'index.js') {
      fileList[i] = await rollup.rollup({
        input: `./src/${v}/index.js`,
        plugins: [
          resolve(),
          commonjs(),
          eslint.eslint(),
          babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
          }),
          filesize(),
          progress({
            clearLine: false
          })
        ],
        external: ['three']
      });
      await fileList[i].write({
        file: `./dist/dtc.${v}.${params.format || 'es'}.js`,
        format: params.format || 'es',
        banner: config.banner,
        name: params.name || '',
        exports: 'named'
      });
      fileListMinfy[i] = await rollup.rollup({
        input: `./src/${v}/index.js`,
        plugins: [
          resolve(),
          commonjs(),
          eslint.eslint(),
          babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true
          }),
          cleanup(),
          // minify
          terser.terser({
            output: {
              comments: /@preserve|@license|@cc_on/i
            }
          }),
          filesize(),
          progress({
            clearLine: false
          })
        ],
        external: ['three']
      });
      await fileListMinfy[i].write({
        file: `./dist/dtc.${v}.${params.format || 'es'}.min.js`,
        format: params.format || 'es',
        banner: config.banner,
        name: params.name || '',
        exports: 'named'
      });
    }
  })
})

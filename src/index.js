// import * as chart  from './chart/index.js';
// import * as visual  from './visual/index.js';
// import * as util from './util/index.js';
// const chart = require('./chart/index')
const util = require('./util/index')
const testTool = require('./testTool/index')
/**
 * 脚本库代码要求
 * 1.耦合性低-不依赖第三方库
 * 2.兼容性强-支持主流浏览器
 * 3.容错性强-不应外部调用及传参导致内部报错
 * 4.通用性广-基本每个项目都经常可以用到
 * 5.易用性高-符合开发习惯，减少学习成本
 */


module.exports = {
    //命名空间
    util,
    testTool
}

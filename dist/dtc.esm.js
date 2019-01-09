
/**
  * dtc V1.0.0
  * (c) 2018-2019
  * Copyright all contributors
  * @license Released under MIT license.
  */
/**
* 打乱一个数组，让其中的值随机组成新数组。
* @memberof  util
* @param { Array } arr 数组
* @returns {Array}
* @author 魏彬  <weibin@jusfoun.com>
 * @example
 *   JFE.util.arrShuffle([1,2,3,4,5,6]) //[3, 4, 6, 2, 5, 1]
 */
function arrShuffle(arr) {
  //
  var _arr = arr.slice(0); //存一个副本 不能直接改变原数组
  for (var i = 0; i < _arr.length; i++) {
    var j = getRandomInt(0, i); //临时交换变量
    var t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
} //随机返回min 到 max之间的一个任意数 +1 保证取到MAX
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var arrShuffle_1 = arrShuffle;

/**
 * 合并多个数组为一个数组。
 * @memberof  util
 * @param { Array } arr 多个数组
 * @returns {Array}
 * @author 魏彬  <weibin@jusfoun.comxxxx>
 * @example
 *   JFE.util.arrayConcat([1,2],[3,4],[5,6]) //[1,2,3,4,5,6]
 */
function arrayConcat(args) {
  return [].concat.apply([], arguments);
}
var arrayConcat_1 = arrayConcat;

/**
* 取得数组中的最大值或者最小值。
* @memberof  util
* @param { Array } arr 数组
* @param { string } MaxOrMin 最大值还是最小值 'max' or 'min'
* @author 魏彬  <weibin@jusfoun.com>
* @returns {Number}
 * @example
 *   const a =  JFE.util.getArrayMaxOrMin([1,2,3,4,5,6.6,0.1,'aaa'],'min')
      console.log(a) //0.1
 */
function arrayMaxOrMin(arr, MaxOrMin) {
  var newArr = [];
  arr.forEach(function (v, i) {
    if (!isNaN(v)) {
      newArr.push(v);
    }
  });
  if (Object.prototype.toString.call(newArr) == '[object Array]' && Object.keys(newArr).length) return Math[MaxOrMin].apply(null, newArr);else return false;
}
var getArrayMaxOrMin = arrayMaxOrMin;

/**
* 数组去重。
* @memberof  util
* @param { Array } arr 数组
* @returns {Array}
* @author 魏彬  <weibin@jusfoun.com>
 * @example
 * const a = [1,1,2,3,3,5,6]
 *
 * JFE.util.unique(a) //[1,2,3,5,6]
 */
function unique(arr) {
  var n = [];
  for (var i = 0; i < arr.length; i++) {
    if (n.indexOf(arr[i]) == -1) {
      n.push(arr[i]);
    }
  }
  return n;
}
var unique_1 = unique;

var util = {
  arrShuffle: arrShuffle_1,
  arrayConcat: arrayConcat_1,
  getArrayMaxOrMin: getArrayMaxOrMin,
  unique: unique_1
};

/**
 * 数组去重。
 * @memberof  util
 * @param { Array } arr 数组
 * @returns {Array}
 * @author 魏彬  <weibin@jusfoun.com>
 * @example
 * const a = [1,1,2,3,3,5,6]
 * JFE.util.unique(a) //[1,2,3,5,6]
 */
function unique$1(arr) {
  var n = [];
  for (var i = 0; i < arr.length; i++) {
    if (n.indexOf(arr[i]) == -1) {
      n.push(arr[i]);
    }
  }
  return n;
}
var unique_1$1 = unique$1;

/**
 * 打乱一个数组，让其中的值随机组成新数组。
 * @memberof  util
 * @param { Array } arr 数组
 * @returns {Array}
 * @author 魏彬  <weibin@jusfoun.com>
 * @example
 *   JFE.util.arrShuffle([1,2,3,4,5,6]) //[3, 4, 6, 2, 5, 1]
 */
function arrShuffle$1(arr) {
  var _arr = arr.slice(0); //存一个副本 不能直接改变原数组
  for (var i = 0; i < _arr.length; i++) {
    var j = getRandomInt$1(0, i); //临时交换变量
    var t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
} //随机返回min 到 max之间的一个任意数 +1 保证取到MAX
function getRandomInt$1(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var arrayShuffle = arrShuffle$1;

function arrow(arrows) {
  var newArrow = arrows.map(function (arrow, index) {
    return arrow + 'bj';
  });
  return newArrow;
}
var arrow_1 = arrow;

var testTool = {
  unique: unique_1$1,
  arrayShuffle: arrayShuffle,
  arrow: arrow_1
};

// import * as visual  from './visual/index.js';
// import * as util from './util/index.js';
// const chart = require('./chart/index')
/**
 * 脚本库代码要求
 * 1.耦合性低-不依赖第三方库
 * 2.兼容性强-支持主流浏览器
 * 3.容错性强-不应外部调用及传参导致内部报错
 * 4.通用性广-基本每个项目都经常可以用到
 * 5.易用性高-符合开发习惯，减少学习成本
 */
var src = {
  //命名空间
  util: util,
  testTool: testTool
};
var src_1 = src.util;
var src_2 = src.testTool;

export default src;
export { src_1 as util, src_2 as testTool };

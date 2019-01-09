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

module.exports = arrayConcat
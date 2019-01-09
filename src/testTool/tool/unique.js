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

function unique(arr) {
  var n = [];
  for (var i = 0; i < arr.length; i++) {
    if (n.indexOf(arr[i]) == -1) {
      n.push(arr[i])
    }
  }
  return n;
}

module.exports = unique
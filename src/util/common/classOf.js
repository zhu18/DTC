/**
 * 判断对象的类型
 * @memberof  util
 * @param {String | Object} val 要判断的值
 * @author 韩凯波  <hkb@jusfoun.com>
 * @returns {*}
 * @example
 *   JFE.util.classOf({}) // 'Object' 
 *   JFE.util.classOf([]) // 'Array'
 */

function classOf(o) {
  if (o === null) {
    return 'Null';
  }
  if (o === undefined) {
    return 'Undefined';
  }
  return Object.prototype.toString.call(o).slice(8, -1);
}

module.exports = classOf
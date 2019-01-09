/**
 * 判断对象是否为整数
 * @memberof util
 * @author 吕颖萍 <lvyingping@jusfoun.com>
 * @return {Boolean}
 * @example
 * isInteger(3); // true
 * isInteger(3.3); // false
 * isInteger(''); // false
 * isInteger('3'); // false
 * isInteger(true); // false
 * isInteger([]); // false
 */
function isInteger(obj) {
  return (obj | 0) === obj;
}

module.exports =  isInteger

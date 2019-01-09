/**
 * isNotNul： 判断是不是null和undefined和空 都不是的话返回true
 * @param {*} str  
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @memberof  util
 * @returns {Boolean} 
 * @example
 *    JFE.util.checkNotNull('') //false
 *    JFE.util.checkNotNull(null) //false
 *    JFE.util.checkNotNull(undefined) //false
 *   
 */

function checkNotNull(str) {
  return (typeof (str) == undefined || str == null || str.length == 0) ? false : true;
}

module.exports = checkNotNull
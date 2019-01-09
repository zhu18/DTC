/**
 * checkString //只能包括中文、英文字母、数字和下划线
 * @param {String} str  
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @memberof  util
 * @returns {Boolean}
 * @example
 *   JFE.util.checkString('123F_213bald*') //false
 */

function checkString(str) {
  var ruleStr = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
  return JFE.util.checkNotNull(str) && ruleStr.test(str);
}

module.exports = checkString
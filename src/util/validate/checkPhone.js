/**
 * isNotNul： 判断是不是手机号
 * @param {Number} str  
 * @returns {Boolean}
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @memberof  util
 * @example
 *    JFE.util.checkPhone(123) //false
 *   
 */

function checkPhone(str) {
    var ruleStr = /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/;
    return JFE.util.checkNotNull(str) && ruleStr.test(str);
}

module.exports = checkPhone
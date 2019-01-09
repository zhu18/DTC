/**
 * isNotNul： 判断是不是邮箱
 * @param {String} str  
 * @returns {Boolean}
 * @memberof  util
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *  JFE.util.checkEmail('weibin@jusfoun.com') //true
 *   
 */


function checkEmail(str) {
        var ruleStr = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return JFE.util.checkNotNull(str) && ruleStr.test(str);
}

module.exports = checkEmail
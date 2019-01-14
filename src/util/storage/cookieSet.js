/**
 * 设置cookie
 * @memberof  util
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Number} days 过期时间（天数）
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   dtc.util.cookieSet('cookieName','value',expires) 
 */

function cookieSet(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

module.exports = cookieSet
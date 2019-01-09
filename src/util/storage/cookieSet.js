/**
* 设置cookie。
* @memberof  util
* @param { String } c_name cookie名称
* @param { String } c_value cookie值
* @param {Number} days 过期时间（天数）
* @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   JFE.util.cookieSet('xxx','aaaa',7) 
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

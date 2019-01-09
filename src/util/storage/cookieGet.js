/**
 * 取得cookie。
 * @memberof  util
 * @param { String } name cookie名称
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   JFE.util.cookieGet('xxx') 
 */

function cookieGet(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}
module.exports = cookieGet
import {
    cookieSet
} from './cookieSet.js'
/**
 * 删除cookie。
 * @memberof  util
 * @param { String } c_name cookie名称
 *  @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   JFE.util.cookieDel('xxx') 
 */


//删除cookies 
function cookieDel(name) {
    cookieSet(name, "", -1);
}

module.exports = cookieDel
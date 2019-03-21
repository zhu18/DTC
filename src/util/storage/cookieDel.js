import cookieSet from './cookieSet'
/**
 * 删除cookie。
 * @memberof  util
 * @param { String } c_name cookie名称
 * @author
 * @example
 *   dtc.util.cookieDel('cookieName')
 */

function cookieDel(name) {
    cookieSet(name, "", -1);
}

export default cookieDel

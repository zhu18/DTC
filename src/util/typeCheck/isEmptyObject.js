/**
 * 判断是否是对象是否为空。
 * @memberof  util
 * @param {Object} val 要判断的对象
 * @author 王帅  <ws@jusfoun.com>
 * @example
 * dtc.util.isObjectEmpty({}) //true
 *
 */

function isEmptyObject(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    } else {
        var k;
        for (k in obj) {
            if (obj.hasOwnProperty(k)) {
                return false;
            }
        }
        return true;
    }
}

export default isEmptyObject

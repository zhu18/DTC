/**
* 指定源字符串sourceStr中是否包含str字符串*
* @memberof  util
* @param {string} sourceStr 源字符串
* @param {string} str 要查找的字符串
* @param {Boolean} isIgnoreCase 是否忽略大小写
* @returns {Boolean} 结果
*  @author 魏彬  <weibin@jusfoun.com>        
 * @example
 *   JFE.util.strContains('ABCDefg','CDEF',false) // false
     JFE.util.strContains('ABCDefg','CDEF',true) // true
 */


function strContains(sourceStr, str, isIgnoreCase) {
    if (sourceStr) {
        if (isIgnoreCase) {
            sourceStr = sourceStr.toUpperCase();
            str = str.toUpperCase();
        }
        return sourceStr.indexOf(str) >= 0;
    } else {
        return false;
    }
}

module.exports = strContains

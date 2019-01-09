
/**
* 判断是否是对象类型。 
* @memberof  util
* @param {Object} val 要判断的值
*  @author 王帅  <ws@jusfoun.com>
* @example
* JFE.util.isObject({...}) //true
*  
*/

 function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

module.exports = isObject

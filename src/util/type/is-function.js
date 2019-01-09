/**
* 判断是否是函数类型。 
* @memberof  util
* @param {Function} val 要判断的值
*  @author 王帅  <ws@jusfoun.com>
* @example
* JFE.util.isFunction(fn(){...}) //true
*  
*/

 function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

module.exports = isFunction

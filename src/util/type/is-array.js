
/**
* 判断是否是数组类型。 
* @memberof  util
* @param {Array} val 要判断的值
*  @author 王帅  <ws@jusfoun.com>
* @example
* JFE.util.isArray([]) //true
* 
*/



function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

module.exports = isArray

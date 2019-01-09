
/**
* 判断是否是数值类型。 
* @memberof  util
* @param {Number} val 要判断的值
*  @author 王帅  <ws@jusfoun.com>
* @example
* JFE.util.isNumber(1) //true
*  
*/

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

module.exports = isNumber

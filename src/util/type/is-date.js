
/**
* 判断是否是日期类型。 
* @memberof  util
* @param {Date} val 要判断的值
* @author 王帅  <ws@jusfoun.com>
* @example
* JFE.util.isDate(new Date()) //true
*  
*/
 function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

module.exports = isDate

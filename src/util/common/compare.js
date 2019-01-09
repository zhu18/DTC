/**
 * 比较两个数组，字符串，数字，对象是否相一样。
 * @memberof  util
 * @param { Object | Array | String | Number } obj1 可以是数组，字符串，对象，数字
 * @param { Object | Array | String | Number } obj2 可以是数组，字符串，对象，数字
 * @returns {Boolean}
 * @author 魏彬  <weibin@jusfoun.com>
 * @example
 *   const obj1 =  {
 *       a:'1',
 *       b:{
 *           c:'3',
 *           d:{
 *               e:'4'
 *           }
 *       }
 *   }
 *
 *  const obj2 =  {
 *       a:'1',
 *       b:{
 *           c:'3',
 *           d:{
 *               e:'4'
 *           }
 *       }
 *   }
 *
 *  JFE.util.compare(obj1,obj2) //true
 */

function compare(obj1, obj2) {
   //如果只比较数组，字符串，数字 直接返回真
   if (obj1 === obj2) {
      return true
   }
   //如果比较对象，对象的key的数量不一样返回假
   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false
   }
   //循环 对象 如果key的值还是一个对象递归判断
   for (let k in obj1) {
      if (Object.prototype.toString.call(obj1[k]) == "[object Object]") {
         return compare(obj1[k], obj2[k])
      } else if (obj1[k] !== obj2[k]) {
         return false
      }
   }
   return true
}

module.exports = compare
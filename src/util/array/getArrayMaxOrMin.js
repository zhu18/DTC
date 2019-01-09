/**
* 取得数组中的最大值或者最小值。
* @memberof  util
* @param { Array } arr 数组
* @param { string } MaxOrMin 最大值还是最小值 'max' or 'min'
* @author 魏彬  <weibin@jusfoun.com>
* @returns {Number} 
 * @example
 *   const a =  JFE.util.getArrayMaxOrMin([1,2,3,4,5,6.6,0.1,'aaa'],'min')
      console.log(a) //0.1
 */

function arrayMaxOrMin(arr,MaxOrMin) {
  let newArr = [];
  arr.forEach((v, i) => {
    if(!isNaN(v)){
      newArr.push(v)
    }

  })

  if (Object.prototype.toString.call(newArr)=='[object Array]' && Object.keys(newArr).length)
    return Math[MaxOrMin].apply(null, newArr)
  else
     return false
}

module.exports = arrayMaxOrMin

/**
* 打乱一个数组，让其中的值随机组成新数组。
* @memberof  util
* @param { Array } arr 数组
* @returns {Array} 
* @author 魏彬  <weibin@jusfoun.com>
 * @example
 *   JFE.util.arrShuffle([1,2,3,4,5,6]) //[3, 4, 6, 2, 5, 1]
 */


function arrShuffle(arr){
  //
   let _arr = arr.slice(0) //存一个副本 不能直接改变原数组
   for(var i=0; i<_arr.length; i++){
     let j = getRandomInt(0,i);
     //临时交换变量
     let t = _arr[i];
     _arr[i] = _arr[j];
     _arr[j] = t;
   }
   return _arr
}


//随机返回min 到 max之间的一个任意数 +1 保证取到MAX
function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min +1) + min)
}

module.exports = arrShuffle

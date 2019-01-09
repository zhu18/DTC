import {isNumber} from '../type/is-number.js'

/**
* 取最大值，最小值之间的随机整数值。
* @memberof  util
* @param { Number } min 最小值
* @param { Number } max 最大值
* @returns {Number} 
* @author 魏彬  <weibin@jusfoun.com>
 * @example
 *   
 * JFE.util.Random(1,10) 
 */



function Random(min,max)
  {
    if(isNumber(min) && isNumber(max)){
        var num = max - min + 1; //最大值 - 最小值 +1 取得最小和最大之间可能有几个值
        return Math.floor(Math.random() * num + min)
    }else{
       return 'param is illegal;'
    }
    
  }

module.exports = Random

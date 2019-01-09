/**
* 查找指定字符串或者数组中 出现最多的项 和 出现的次数
* @memberof  util
* @param {Array | String} item 字符串或者数组
* @returns {Object} 结果
*  @author 魏彬  <weibin@jusfoun.com>        
 * @example
 *  JFE.util.maxObj('aabbbdddddeecla') //{maxKey: "d", maxNum: 5}
 *  JFE.util.maxObj(['a','b','c','b']) //{maxKey: "b", maxNum: 2}

 */


function maxObj(item){
    var obj = {};
    var res;
    var max_num = 0;
    var max_key;

    for(var i=0; i<item.length; i++)
    {
        res = item[i];
       if(!obj[res])
       {
            obj[res] = 1
       }
       else
       {
            obj[res]++;
       }
    }

     for(var key in obj)
    {
        if(max_num < obj[key])
        {
            max_num = obj[key];
            max_key = key;
        }
    }
    return {
        maxKey:max_key,
        maxNum:max_num
    }

}

module.exports = maxObj

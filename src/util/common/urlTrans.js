/**
 * 将对象转为 a=aaa&b=bbb 形式
 *
 * @memberof  util
 * @param {Object} obj 传入的对象
 * @author 杨羽珂  <yyk@jusfoun.com>
 *          
 * @example
 *   let obj = {
 *     a:'1',
 *     b:'2'
 *   }
 *
 *  JFE.util.urlTrans(obj) //?a=1&b=2
 */


function urlTrans(obj) {
    var str = '';
    for (var k in obj) {
        if (!obj[k]) {
            obj[k] = '';
        }
        str += k + '=' + obj[k] + '&';
    }
    return '?' + str.slice(0, -1)
}

module.exports = urlTrans
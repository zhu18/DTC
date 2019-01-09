/**
 * 将时间戳转为时间格式。
 * @memberof  util
 * @param { string } timeStamp 时间戳
 * @param { Boolean } needHMS 是否需要小时 分钟 秒。
 * @param { string } [type='/'] 时间之间的连接符 默认是 '/' 如果传入字符串 '年月日' 则返回带年月日中文的日期 。
 * @returns {String} 
 * @author 陈胜  <chensheng@jusfoun.com>
 * @example
 *  const timestamp=new Date().getTime();
 *  JFE.util.formatTime(timestamp,true,'-') 输出：2017-12-22 17:33:17
 *  JFE.util.formatTime(timestamp)  输出：2017/12/22
 *  JFE.util.foramtTime(timestamp,false,'年月日') 输出2017年12月22日
 */

function formatTime(timeStamp, needHMS, type) {
  function add0(m) {
    return m < 10 ? '0' + m : m
  }
  if (type !== '年月日') {
    var localType = type || '/'
  }

  //timeStamp是整数，否则要parseInt转换
  var time = new Date(timeStamp);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();

  if (type !== '年月日') {
    return needHMS ? (y + localType + add0(m) + localType + add0(d) + ' ' +
      h + ':' + mm + ':' + s) : (y + localType + add0(m) + localType + add0(d))
  } else {
    return needHMS ? (y + '年' + add0(m) + '月' + add0(d) + '日' + ' ' +
        h + ':' + mm + ':' + s) :
      y + '年' + add0(m) + '月' + add0(d) + '日'
  }
}


module.exports = formatTime
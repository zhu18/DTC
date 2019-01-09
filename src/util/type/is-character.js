/**
 * 判断字符串是否为中英文字符
 * @memberof util
 * @author 徐媛媛 <xyy@jusfoun.com>
 * @param  {String} str 输入的字符串
 * @return {Boolean}
 */
function isCharacter(str) {
  var symbol = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  if (symbol.test(str)) return true;
  return false;
}
module.exports =  isCharacter


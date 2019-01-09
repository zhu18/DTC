/**
 * 根据给定的字符长度截取文本，如果文本被截取，那么它的后面会自动带上省略号
 * @memberof util
 * @author 汝银娟（ryj@jusfoun.com）
 * @param ｛string｝str  字符串
 * @param {number}nwords  截取长度
 * @return ｛string｝ 截取后的字符串
 * @example  excerpt("如果字数超过5个就截取", 5)
 */
function excerpt(str, nwords) {
  var words = str.split('');
  words.splice(nwords, words.length - 1);
  return words.join('') + (words.length !== str.split('').length ? '…' : '');
}
module.exports = excerpt

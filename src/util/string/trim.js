/**
 * 从字符串中删除前部和尾部空格或单独删除一部分。
 * @param {*} str 需要处理的字符串
 * @param {string} place 字符串trim选项 可选值 'left','right','all'
 */
function trim(str, place = 'all') {
  str = (str + '')
  let regl = /^\s*/g,
    regr = /\s*$/g,
    rega = /(^\s*)|(\s*$)/g,
    reg
  switch (place) {
    case 'left':
      reg = regl
      break
    case 'right':
      reg = regr
      break
    default:
      reg = rega
  }
  return str.replace(reg, "");
}
/**
 * 删除字符串两侧的空白
 * 性能好
 * @param {string} str 需要处理的字符串
 */
function trim3(str, place) {
  // 删除字符串前的空格
  str = str.replace(/^\s+/, '')
  // 删除字符串后的空格
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\S/.test(str.charAt(i))) {
      str = str.substring(0, i + 1)
      break
    }
  }
  return str
}
export default trim

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

module.exports = trim
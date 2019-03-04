/**
 * RgbToHex
 * @param {string} input
 * @returns {string} hex value
 */
function rgbToHex(input, alpha = true) {
  let reg = /([\d]{1,3})\,\s*([\d]{1,3})\,\s*([\d]{1,3})\,?\s*((0\.[\d])|(\.[\d])|(0|1))?/,
    color = reg.exec(input)
  if (color) {
    let colorArr = color[0].split(',')
    let colorStr = colorArr.map((c, i) => {
      if (i > 2 && c) {
        if (alpha === true) {
          return (parseFloat(c.trim()) * 256).toString(16).slice(0, 2)
        } else {
          return ''
        }
      }
      let hex = (c.trim() - 0).toString(16)
      return hex.length < 2 ? '0' + hex : hex
    })
    return '#' + colorStr.join('')
  } else {
    return null
  }
}

export default rgbToHex

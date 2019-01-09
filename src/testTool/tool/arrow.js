function arrow(arrows) {
  let newArrow  = arrows.map((arrow, index) => {
    return arrow + 'bj'
  })
  return newArrow
}
module.exports = arrow
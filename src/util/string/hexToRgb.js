/**
 * HexToRgb
 *
 * @param {string} input
 */
function hexToRgb(input) {
  var output = [];
  input = input.replace(/^[#]?(?:([0-9a-f]{6})|([0-9a-f]{3}))$/i, function (match, group1, group2) {
    return (group1) ? group1 : group2.replace(/([0-9a-f])/ig, '$1$1');
  });
  if (input.length === 6) {
    for (var i = 0; i < 3; i++) {
      output.push(parseInt(input.slice(i * 2, ((i * 2) + 2)), 16));
    }
    return output.join(',');
  } else {
    return null
  }
}

export default hexToRgb

/**
 * 取得URL的search信息转为对象形式
 *
 * @memberof  util
 * @author 韩凯波  <hkb@jusfoun.com>
 * @example
 *   xxxxxxxx/index.html?x=12&b=13
 *   JFE.util.urlArgs() // {x:12,b:13}
 */



function urlArgs() {
  let args = {};
  let query = location.search.substring(1);
  let pairs = query.split('&');
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=');
    if (pos === -1) {
      continue;
    }
    let name = pairs[i].substring(0, pos);
    let value = pairs[i].substring(pos + 1);
    value = decodeURIComponent(value);
    args[name] = value;
  }
  return args;
}

module.exports = urlArgs
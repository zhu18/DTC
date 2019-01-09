/**
 * isBrowser类 判断浏览器及浏览器版本234.
 * @memberof util
 * @author 陈胜  <chensheng@jusfoun.com>
 * @example
 *    let s =  JFE.util.isBrowser().s
      let type =  JFE.util.isBrowser().type
      console.log('s',s)
      console.log('type',type)

 */

function isBrowser() {
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]:
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

  var type = ''
  for (var key in Sys) {
    if (Sys[key]) {
      type = key
    }
  }
  return {
    s: s,
    type: type
  }
}

module.exports = isBrowser
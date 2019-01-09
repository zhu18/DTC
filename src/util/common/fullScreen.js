/**
 * 控制浏览器全屏和退出全屏 
 * @memberof  util
 * @author 商业庆  商业庆
 * @example
 *  JFE.util.fullScreen() //进入全屏
 *  JFE.util.exitFullScreen() //退出全屏
 */

function fullScreen() {
  var el = document.documentElement,
    rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen,
    wscript;
  if (typeof rfs != 'undefined' && rfs) {
    rfs.call(el);
    return;
  }
  if (typeof window.ActiveXObject != 'undefined') {
    wscript = new ActiveXObject('WScript.Shell');
    if (wscript) {
      wscript.SendKeys('{F11}');
    }
  }
}

function exitFullScreen() {
  var el = document,
    cfs =
    el.cancelFullScreen ||
    el.webkitCancelFullScreen ||
    el.mozCancelFullScreen ||
    el.exitFullScreen,
    wscript;
  if (typeof cfs != 'undefined' && cfs) {
    cfs.call(el);
    return;
  }
  if (typeof window.ActiveXObject != 'undefined') {
    wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}

module.exports = fullScreen
module.exports = exitFullScreen

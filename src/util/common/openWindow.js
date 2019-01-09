/**
 * 打开一个窗体
 * @memberof util
 * @author 商业庆 <shangyeqing@jusfoun.com>
 * @param  {String} url      传入页面地址
 * @param  {String} windowName 传入窗口名字
 * @param  {Number} width  传入窗口高度
 * @param  {Number} height 传入窗口宽度
 */
function openWindow(url, windowName, width, height) {
  var x = parseInt(screen.width / 2.0) - (width / 2.0);
  var y = parseInt(screen.height / 2.0) - (height / 2.0);
  var isMSIE = (navigator.appName == "Microsoft Internet Explorer");
  if (isMSIE) {
    var p = "resizable=1,location=no,scrollbars=no,width=";
    p = p + width;
    p = p + ",height=";
    p = p + height;
    p = p + ",left=";
    p = p + x;
    p = p + ",top=";
    p = p + y;
    retval = window.open(url, windowName, p);
  } else {
    var win = window.open(url, "ZyiisPopup", "top=" + y + ",left=" + x + ",scrollbars=" + scrollbars + ",dialog=yes,modal=yes,width=" + width + ",height=" + height + ",resizable=no");
    eval("try { win.resizeTo(width, height); } catch(e) { }");
  }
}
module.exports =  openWindow

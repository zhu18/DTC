function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function () {
    var length = Math.max(arguments.length - startIndex, 0),
      rest = Array(length),
      index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest);
      case 1:
        return func.call(this, arguments[0], rest);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
};
var delay = restArguments(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
});

function debounce(func, wait, immediate) {
  var timeout, result;

  var later = function (context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function (args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};
/**
 * 生成一个默认的返回顶部按钮
 */
function defaultDom() {
  let container = document.createElement('div')
  container.style.cssText = 'width: 40px;height: 40px;border-radius: 20px;background-color: #3eaf7c;display: flex;'
  let arrow = document.createElement('span')
  arrow.style.cssText = 'margin: auto;width: 16px;height: 16px;border-top: 4px solid #fff;border-left: 4px solid #fff;transform: translateY(3px) rotate(45deg);'
  container.appendChild(arrow)
  container.addEventListener('mouseover', function (ev) {
    this.style.backgroundColor = '#3eaf7c54'
  })
  container.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#3eaf7c'
  })
  return container
}

/**
 * 回到顶部组件
 *
 * @param {number} [threshold=300] 出现滚动条的阈值
 * @param {*} ele dom元素或者选择器
 * @param {object} [property={}] 元素自定义属性
 */
function BakcToTop(threshold = 300, ele, property = {}) {
  if (!(this instanceof BakcToTop)) {
    throw new Error('调用方式错误，缺少关键字new')
  }
  let dom = null
  let scrollTop = getScrollTop(),
    offsetWidth = document.body.offsetWidth
  if (!ele) {
    dom = defaultDom()
    let root = document.querySelector('body')
    root.appendChild(dom)
  } else if (ele instanceof HTMLElement) {
    dom = ele
  } else {
    dom = document.querySelector(ele)
  }

  let prop = {
    position: 'fixed',
    right: '1em',
    bottom: '1em',
    cursor: 'pointer',
    visibility: 'visible',
    opacity: '0',
    transition: 'all 0.3s ease'
  }

  if (!dom) {
    return
  }
  Object.assign(prop, property)
  for (let p in prop) {
    dom.style.setProperty(p, prop[p])
  }
  // 添加点击事件
  dom.addEventListener('click', function (ev) {
    ev.stopPropagation();
    scrollToTop()
    hide()
  })
  window.addEventListener('scroll', scrollCb)
  window.addEventListener('resize', resizeCb)

  function scrollCb() {
    debounce(() => {
      scrollTop = getScrollTop()
      isShow()
    }, 100)()
  }

  function resizeCb() {
    debounce(() => {
      offsetWidth = document.body.offsetWidth
      isShow()
    }, 100)()
  }

  function getScrollTop() {
    return window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    scrollTop = 0
  }

  function isShow() {
    if (offsetWidth > 960 && scrollTop > threshold) {
      show()
    } else {
      hide()
    }
    return scrollTop > threshold
  }

  function show() {
    dom.style.setProperty('visibility', 'visible')
    dom.style.setProperty('opacity', '1')
  }

  function hide() {
    dom.style.setProperty('visibility', 'hidden')
    dom.style.setProperty('opacity', '0')
  }
  // 实例方法
  this.getDom = function () {
    return dom
  }
  // 销毁实例对象
  this.dispose = function () {
    window.removeEventListener('scroll', scrollCb)
    window.removeEventListener('resize', resizeCb)
    dom.remove()
  }
}
export default BakcToTop

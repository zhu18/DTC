
/**
  * dtc V1.0.3
  * (c) 2018-2019
  * Copyright all contributors
  * @license Released under MIT license.
  */
import { EventDispatcher, Vector3, MOUSE, Quaternion, Spherical, Vector2, Raycaster, Color, Texture, SpriteMaterial, Sprite, MeshBasicMaterial, DoubleSide, PlaneGeometry, Mesh, Geometry, LineBasicMaterial, Group, Line, Shape, ExtrudeGeometry, MeshPhongMaterial, MeshLambertMaterial, Object3D, BoxGeometry, AdditiveBlending, ShaderMaterial, FrontSide, QuadraticBezierCurve3, BufferGeometry, BufferAttribute, ShaderLib, Points, Scene, PerspectiveCamera, WebGLRenderer, Fog, AmbientLight, DirectionalLight, SpotLight, DirectionalLightHelper, SpotLightHelper, GridHelper, AxisHelper } from 'three';

/**
 * 合并多个数组为一个数组。
 * @memberof  util
 * @param { Array } arr 多个数组
 * @returns {Array}
 * @author 魏彬  <weibin@jusfoun.comxxxx>
 * @example
 *   dtc.util.concat([1,2],[3,4],[5,6]) //[1,2,3,4,5,6]
 */
function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return [].concat.apply([], args);
}

/**
 * 打乱一个数组，让其中的值随机组成新数组。
 * @memberof  util
 * @param { Array } arr 数组
 * @returns {Array}
 * @author 魏彬  <weibin@jusfoun.com>
 * @example
 *   dtc.util.shuffle([1,2,3,4,5,6]) //[3, 4, 6, 2, 5, 1]
 */
function shuffle(arr) {
  var _arr = arr.slice(0); //存一个副本 不能直接改变原数组
  for (var i = 0; i < _arr.length; i++) {
    var j = getRandomInt(0, i); //临时交换变量
    var t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
} //随机返回min 到 max之间的一个任意数 +1 保证取到MAX
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';
/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;
/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;
  while (++index < length) {
    var value = array[index],
        current = iteratee(value);
    if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
      var computed = current,
          result = value;
    }
  }
  return result;
}
/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return array && array.length ? baseExtremum(array, identity, baseGt) : undefined;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';
/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;
/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum$1(array, iteratee, comparator) {
  var index = -1,
      length = array.length;
  while (++index < length) {
    var value = array[index],
        current = iteratee(value);
    if (current != null && (computed === undefined ? current === current && !isSymbol$1(current) : comparator(current, computed))) {
      var computed = current,
          result = value;
    }
  }
  return result;
}
/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return _typeof(value) == 'symbol' || isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1;
}
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}
/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return array && array.length ? baseExtremum$1(array, identity$1, baseLt) : undefined;
}

/**
 * 数组去重。
 * @memberof  util
 * @param { Array } arr 数组
 * @returns {Array}
 * @author 魏彬  <weibin@jusfoun.com>
 * @example
 * const a = [1,1,2,3,3,5,6]
 * dtc.util.unique(a) //[1,2,3,5,6]
 */
function unique(arr) {
  var n = [];
  for (var i = 0; i < arr.length; i++) {
    if (n.indexOf(arr[i]) == -1) {
      n.push(arr[i]);
    }
  }
  return n;
}

function Browser() {
  var _window = window || {};
  var _navigator = typeof navigator != 'undefined' ? navigator : {};
  var _mime = function _mime(option, value) {
    var mimeTypes = navigator.mimeTypes;
    for (var mt in mimeTypes) {
      if (mimeTypes[mt][option] == value) {
        return true;
      }
    }
    return false;
  };
  var u = _navigator.userAgent || {};
  var _this = this || {};
  var match = {
    //内核
    'Trident': u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
    'Presto': u.indexOf('Presto') > -1,
    'WebKit': u.indexOf('AppleWebKit') > -1,
    'Gecko': u.indexOf('Gecko/') > -1,
    //浏览器
    'Safari': u.indexOf('Safari') > -1,
    'Chrome': u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
    'IE': u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
    'Edge': u.indexOf('Edge') > -1,
    'Firefox': u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
    'Firefox Focus': u.indexOf('Focus') > -1,
    'Chromium': u.indexOf('Chromium') > -1,
    'Opera': u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
    'Vivaldi': u.indexOf('Vivaldi') > -1,
    'Yandex': u.indexOf('YaBrowser') > -1,
    'Arora': u.indexOf('Arora') > -1,
    'Lunascape': u.indexOf('Lunascape') > -1,
    'QupZilla': u.indexOf('QupZilla') > -1,
    'Coc Coc': u.indexOf('coc_coc_browser') > -1,
    'Kindle': u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
    'Iceweasel': u.indexOf('Iceweasel') > -1,
    'Konqueror': u.indexOf('Konqueror') > -1,
    'Iceape': u.indexOf('Iceape') > -1,
    'SeaMonkey': u.indexOf('SeaMonkey') > -1,
    'Epiphany': u.indexOf('Epiphany') > -1,
    '360': u.indexOf('QihooBrowser') > -1,
    '360EE': u.indexOf('360EE') > -1,
    '360SE': u.indexOf('360SE') > -1,
    'UC': u.indexOf('UC') > -1 || u.indexOf(' UBrowser') > -1,
    'QQBrowser': u.indexOf('QQBrowser') > -1,
    'QQ': u.indexOf('QQ/') > -1,
    'Baidu': u.indexOf('Baidu') > -1 || u.indexOf('BIDUBrowser') > -1,
    'Maxthon': u.indexOf('Maxthon') > -1,
    'Sogou': u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
    'LBBROWSER': u.indexOf('LBBROWSER') > -1,
    '2345Explorer': u.indexOf('2345Explorer') > -1,
    'TheWorld': u.indexOf('TheWorld') > -1,
    'XiaoMi': u.indexOf('MiuiBrowser') > -1,
    'Quark': u.indexOf('Quark') > -1,
    'Qiyu': u.indexOf('Qiyu') > -1,
    'Wechat': u.indexOf('MicroMessenger') > -1,
    'Taobao': u.indexOf('AliApp(TB') > -1,
    'Alipay': u.indexOf('AliApp(AP') > -1,
    'Weibo': u.indexOf('Weibo') > -1,
    'Douban': u.indexOf('com.douban.frodo') > -1,
    'Suning': u.indexOf('SNEBUY-APP') > -1,
    'iQiYi': u.indexOf('IqiyiApp') > -1,
    //系统或平台
    'Windows': u.indexOf('Windows') > -1,
    'Linux': u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
    'Mac OS': u.indexOf('Macintosh') > -1,
    'Android': u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
    'Ubuntu': u.indexOf('Ubuntu') > -1,
    'FreeBSD': u.indexOf('FreeBSD') > -1,
    'Debian': u.indexOf('Debian') > -1,
    'Windows Phone': u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
    'BlackBerry': u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
    'MeeGo': u.indexOf('MeeGo') > -1,
    'Symbian': u.indexOf('Symbian') > -1,
    'iOS': u.indexOf('like Mac OS X') > -1,
    'Chrome OS': u.indexOf('CrOS') > -1,
    'WebOS': u.indexOf('hpwOS') > -1,
    //设备
    'Mobile': u.indexOf('Mobi') > -1 || u.indexOf('iPh') > -1 || u.indexOf('480') > -1,
    'Tablet': u.indexOf('Tablet') > -1 || u.indexOf('Pad') > -1 || u.indexOf('Nexus 7') > -1
  };
  var is360 = false;
  if (_window.chrome) {
    var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
    if (chrome_vision > 36 && _window.showModalDialog) {
      is360 = true;
    } else if (chrome_vision > 45) {
      is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
    }
  } //修正
  if (match['Mobile']) {
    match['Mobile'] = !(u.indexOf('iPad') > -1);
  } else if (is360) {
    if (_mime("type", "application/gameplugin")) {
      match['360SE'] = true;
    } else {
      match['360EE'] = true;
    }
  }
  if (match['IE'] || match['Edge']) {
    var navigator_top = window.screenTop - window.screenY;
    switch (navigator_top) {
      case 71: //无收藏栏,贴边
      case 74: //无收藏栏,非贴边
      case 99: //有收藏栏,贴边
      case 102:
        //有收藏栏,非贴边
        match['360EE'] = true;
        break;
      case 75: //无收藏栏,贴边
      case 74: //无收藏栏,非贴边
      case 105: //有收藏栏,贴边
      case 104:
        //有收藏栏,非贴边
        match['360SE'] = true;
        break;
    }
  }
  if (match['Baidu'] && match['Opera']) {
    match['Baidu'] = false;
  } //基本信息
  var hash = {
    engine: ['WebKit', 'Trident', 'Gecko', 'Presto'],
    browser: ['Safari', 'Chrome', 'Edge', 'IE', 'Firefox', 'Firefox Focus', 'Chromium', 'Opera', 'Vivaldi', 'Yandex', 'Arora', 'Lunascape', 'QupZilla', 'Coc Coc', 'Kindle', 'Iceweasel', 'Konqueror', 'Iceape', 'SeaMonkey', 'Epiphany', '360', '360SE', '360EE', 'UC', 'QQBrowser', 'QQ', 'Baidu', 'Maxthon', 'Sogou', 'LBBROWSER', '2345Explorer', 'TheWorld', 'XiaoMi', 'Quark', 'Qiyu', 'Wechat', 'Taobao', 'Alipay', 'Weibo', 'Douban', 'Suning', 'iQiYi'],
    os: ['Windows', 'Linux', 'Mac OS', 'Android', 'Ubuntu', 'FreeBSD', 'Debian', 'iOS', 'Windows Phone', 'BlackBerry', 'MeeGo', 'Symbian', 'Chrome OS', 'WebOS'],
    device: ['Mobile', 'Tablet']
  };
  _this.device = 'PC';
  _this.language = function () {
    var g = _navigator.browserLanguage || _navigator.language;
    var arr = g.split('-');
    if (arr[1]) {
      arr[1] = arr[1].toUpperCase();
    }
    return arr.join('_');
  }();
  for (var s in hash) {
    for (var i = 0; i < hash[s].length; i++) {
      var value = hash[s][i];
      if (match[value]) {
        _this[s] = value;
      }
    }
  } //系统版本信息
  var osVersion = {
    'Windows': function Windows() {
      var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, '$1');
      var hash = {
        '6.4': '10',
        '6.3': '8.1',
        '6.2': '8',
        '6.1': '7',
        '6.0': 'Vista',
        '5.2': 'XP',
        '5.1': 'XP',
        '5.0': '2000'
      };
      return hash[v] || v;
    },
    'Android': function Android() {
      return u.replace(/^.*Android ([\d.]+);.*$/, '$1');
    },
    'iOS': function iOS() {
      return u.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.');
    },
    'Debian': function Debian() {
      return u.replace(/^.*Debian\/([\d.]+).*$/, '$1');
    },
    'Windows Phone': function WindowsPhone() {
      return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2');
    },
    'Mac OS': function MacOS() {
      return u.replace(/^.*Mac OS X ([\d_]+).*$/, '$1').replace(/_/g, '.');
    },
    'WebOS': function WebOS() {
      return u.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1');
    }
  };
  _this.osVersion = '';
  if (osVersion[_this.os]) {
    _this.osVersion = osVersion[_this.os]();
    if (_this.osVersion == u) {
      _this.osVersion = '';
    }
  } //浏览器版本信息
  var version = {
    'Safari': function Safari() {
      return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
    },
    'Chrome': function Chrome() {
      return u.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1');
    },
    'IE': function IE() {
      return u.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1');
    },
    'Edge': function Edge() {
      return u.replace(/^.*Edge\/([\d.]+).*$/, '$1');
    },
    'Firefox': function Firefox() {
      return u.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1');
    },
    'Firefox Focus': function FirefoxFocus() {
      return u.replace(/^.*Focus\/([\d.]+).*$/, '$1');
    },
    'Chromium': function Chromium() {
      return u.replace(/^.*Chromium\/([\d.]+).*$/, '$1');
    },
    'Opera': function Opera() {
      return u.replace(/^.*Opera\/([\d.]+).*$/, '$1').replace(/^.*OPR\/([\d.]+).*$/, '$1');
    },
    'Vivaldi': function Vivaldi() {
      return u.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1');
    },
    'Yandex': function Yandex() {
      return u.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1');
    },
    'Arora': function Arora() {
      return u.replace(/^.*Arora\/([\d.]+).*$/, '$1');
    },
    'Lunascape': function Lunascape() {
      return u.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, '$1');
    },
    'QupZilla': function QupZilla() {
      return u.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, '$1');
    },
    'Coc Coc': function CocCoc() {
      return u.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1');
    },
    'Kindle': function Kindle() {
      return u.replace(/^.*Version\/([\d.]+).*$/, '$1');
    },
    'Iceweasel': function Iceweasel() {
      return u.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1');
    },
    'Konqueror': function Konqueror() {
      return u.replace(/^.*Konqueror\/([\d.]+).*$/, '$1');
    },
    'Iceape': function Iceape() {
      return u.replace(/^.*Iceape\/([\d.]+).*$/, '$1');
    },
    'SeaMonkey': function SeaMonkey() {
      return u.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1');
    },
    'Epiphany': function Epiphany() {
      return u.replace(/^.*Epiphany\/([\d.]+).*$/, '$1');
    },
    '360': function _() {
      return u.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1');
    },
    '360SE': function SE() {
      var hash = {
        '63': '10.0',
        '55': '9.1',
        '45': '8.1',
        '42': '8.0',
        '31': '7.0',
        '21': '6.3'
      };
      var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      return hash[chrome_vision] || '';
    },
    '360EE': function EE() {
      var hash = {
        '63': '9.5',
        '55': '9.0',
        '50': '8.7',
        '30': '7.5'
      };
      var chrome_vision = u.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      return hash[chrome_vision] || '';
    },
    'Maxthon': function Maxthon() {
      return u.replace(/^.*Maxthon\/([\d.]+).*$/, '$1');
    },
    'QQBrowser': function QQBrowser() {
      return u.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1');
    },
    'QQ': function QQ() {
      return u.replace(/^.*QQ\/([\d.]+).*$/, '$1');
    },
    'Baidu': function Baidu() {
      return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, '$1');
    },
    'UC': function UC() {
      return u.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1');
    },
    'Sogou': function Sogou() {
      return u.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1');
    },
    'LBBROWSER': function LBBROWSER() {
      var hash = {
        '57': '6.5',
        '49': '6.0',
        '46': '5.9',
        '42': '5.3',
        '39': '5.2',
        '34': '5.0',
        '29': '4.5',
        '21': '4.0'
      };
      var chrome_vision = navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, '$1');
      return hash[chrome_vision] || '';
    },
    '2345Explorer': function Explorer() {
      return u.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1');
    },
    'TheWorld': function TheWorld() {
      return u.replace(/^.*TheWorld ([\d.]+).*$/, '$1');
    },
    'XiaoMi': function XiaoMi() {
      return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1');
    },
    'Quark': function Quark() {
      return u.replace(/^.*Quark\/([\d.]+).*$/, '$1');
    },
    'Qiyu': function Qiyu() {
      return u.replace(/^.*Qiyu\/([\d.]+).*$/, '$1');
    },
    'Wechat': function Wechat() {
      return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1');
    },
    'Taobao': function Taobao() {
      return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1');
    },
    'Alipay': function Alipay() {
      return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1');
    },
    'Weibo': function Weibo() {
      return u.replace(/^.*weibo__([\d.]+).*$/, '$1');
    },
    'Douban': function Douban() {
      return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1');
    },
    'Suning': function Suning() {
      return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1');
    },
    'iQiYi': function iQiYi() {
      return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1');
    }
  };
  _this.version = '';
  if (version[_this.browser]) {
    _this.version = version[_this.browser]();
    if (_this.version == u) {
      _this.version = '';
    }
  } //修正
  if (_this.browser == 'Edge') {
    _this.engine = 'EdgeHTML';
  } else if (_this.browser == 'Chrome' && parseInt(_this.version) > 27) {
    _this.engine = 'Blink';
  } else if (_this.browser == 'Opera' && parseInt(_this.version) > 12) {
    _this.engine = 'Blink';
  } else if (_this.browser == 'Yandex') {
    _this.engine = 'Blink';
  }
  this.isVersion = function (requirement) {
    var req = requirement.toLowerCase();
    var v = parseInt(this.version);
    var regV = /\d+/g;
    var regCompare = /lt|gt|eq|\=|\>=|\<=|\<|\>/g;
    var reqV = regV.exec(req)[0];
    var compare = regCompare.exec(req)[0];
    var isTrue = false;
    switch (compare) {
      case 'lt':
      case '<':
        if (v < parseInt(reqV)) {
          isTrue = true;
        }
        break;
      case 'gt':
      case '>':
        if (v > parseInt(reqV)) {
          isTrue = true;
        }
        break;
      case 'eq':
      case '=':
        if (v === parseInt(reqV)) {
          isTrue = true;
        }
        break;
    }
    return isTrue;
  };
  return _this;
}

/**
 * 取得URL的search信息转为对象形式
 * @memberof  util
 * @author 韩凯波  <hkb@jusfoun.com>
 * @example
 *   http://example.com/index.html?x=12&b=13
 *   dtc.util.urlArgs() // {x:12,b:13}
 */
function urlArgs() {
  var args = {};
  var query = window.location.search.substring(1);
  var pairs = query.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos === -1) {
      continue;
    }
    var name = pairs[i].substring(0, pos);
    var value = pairs[i].substring(pos + 1);
    value = decodeURIComponent(value);
    args[name] = value;
  }
  return args;
}

var t = 'millisecond',
    e = 'second',
    n = 'minute',
    r = 'hour',
    s = 'day',
    i = 'week',
    a = 'month',
    u = 'year',
    c = /^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,
    o = /\[.*?\]|y{2,4}|M{1,4}|d{1,2}|w{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    // h = {
//     name: "en",
//     weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
//     months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
// },
h = {
  name: 'zh-cn',
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
  weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
  weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
  months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  ordinal: function ordinal(n) {
    return n + '日';
  },
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '几秒',
    m: '1 分钟',
    mm: '%d 分钟',
    h: '1 小时',
    hh: '%d 小时',
    d: '1 天',
    dd: '%d 天',
    M: '1 个月',
    MM: '%d 个月',
    y: '1 年',
    yy: '%d 年'
  }
},
    d = function d(t, e, n) {
  var r = String(t);
  return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t;
},
    $ = {
  padStart: d,
  padZoneStr: function padZoneStr(t) {
    var e = Math.abs(t),
        n = Math.floor(e / 60),
        r = e % 60;
    return (t <= 0 ? '+' : '-') + d(n, 2, '0') + ':' + d(r, 2, '0');
  },
  monthDiff: function monthDiff(t, e) {
    var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        r = t.clone().add(n, 'months'),
        s = e - r < 0,
        i = t.clone().add(n + (s ? -1 : 1), 'months');
    return Number(-(n + (e - r) / (s ? r - i : i - r)));
  },
  absFloor: function absFloor(t) {
    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
  },
  prettyUnit: function prettyUnit(c) {
    return {
      M: a,
      y: u,
      w: i,
      d: s,
      h: r,
      m: n,
      s: e,
      ms: t
    }[c] || String(c || '').toLowerCase().replace(/s$/, '');
  },
  isUndefined: function isUndefined(t) {
    return void 0 === t;
  }
},
    f = 'zh-cn',
    l = {};
l[f] = h;
var m = function m(t) {
  return t instanceof D;
},
    y = function y(t, e, n) {
  var r;
  if (!t) return null;
  if ("string" == typeof t) l[t] && (r = t), e && (l[t] = e, r = t);else {
    var s = t.name;
    l[s] = t, r = s;
  }
  return n || (f = r), r;
},
    M = function M(t, e) {
  if (m(t)) return t.clone();
  var n = e || {};
  return n.date = t, new D(n);
},
    S = function S(t, e) {
  return M(t, {
    locale: e.$L
  });
},
    p = $;
p.parseLocale = y, p.isDayjs = m, p.wrapper = S;
var D = function () {
  function h(t) {
    this.parse(t);
  }
  var d = h.prototype;
  return d.parse = function (t) {
    var e, n;
    this.$d = null === (e = t.date) ? new Date(NaN) : p.isUndefined(e) ? new Date() : e instanceof Date ? e : "string" == typeof e && /.*[^Z]$/i.test(e) && (n = e.match(c)) ? new Date(n[1], n[2] - 1, n[3] || 1, n[5] || 0, n[6] || 0, n[7] || 0, n[8] || 0) : new Date(e), this.init(t);
  }, d.init = function (t) {
    this.$y = this.$d.getFullYear(), this.$M = this.$d.getMonth(), this.$D = this.$d.getDate(), this.$W = this.$d.getDay(), this.$H = this.$d.getHours(), this.$m = this.$d.getMinutes(), this.$s = this.$d.getSeconds(), this.$ms = this.$d.getMilliseconds(), this.$L = this.$L || y(t.locale, null, !0) || f;
  }, d.$locale = function () {
    return l[this.$L];
  }, d.format = function (t) {
    console.log(this.$d);
    var e = this,
        n = t || 'yyyy-MM-ddTHH:mm:ssZ',
        r = p.padZoneStr(this.$d.getTimezoneOffset()),
        s = this.$locale(),
        i = s.weekdays,
        a = s.months,
        u = function u(t, e, n, r) {
      return t && t[e] || n[e].substr(0, r);
    };
    return n.replace(o, function (t) {
      if (t.indexOf('[') > -1) return t.replace(/\[|\]/g, '');
      switch (t) {
        case 'yy':
          return String(e.$y).slice(-2);
        case 'yyyy':
          return String(e.$y);
        case 'M':
          return String(e.$M + 1);
        case 'MM':
          return p.padStart(e.$M + 1, 2, '0');
        case 'MMM':
          return u(s.monthsShort, e.$M, a, 3);
        case 'MMMM':
          return a[e.$M];
        case 'd':
          return String(e.$D);
        case 'dd':
          return p.padStart(e.$D, 2, '0');
        case 'w':
          return String(e.$W);
        case 'ww':
          return u(s.weekdaysMin, e.$W, i, 2);
        case 'www':
          return u(s.weekdaysShort, e.$W, i, 3);
        case 'wwww':
          return i[e.$W];
        case 'H':
          return String(e.$H);
        case 'HH':
          return p.padStart(e.$H, 2, '0');
        case 'h':
        case 'hh':
          return e.$H === 0 ? 12 : p.padStart(e.$H < 13 ? e.$H : e.$H - 12, t === 'hh' ? 2 : 1, '0');
        case 'a':
          return e.$H < 12 ? 'am' : 'pm';
        case 'A':
          return e.$H < 12 ? 'AM' : 'PM';
        case 'm':
          return String(e.$m);
        case 'mm':
          return p.padStart(e.$m, 2, '0');
        case 's':
          return String(e.$s);
        case 'ss':
          return p.padStart(e.$s, 2, '0');
        case 'SSS':
          return p.padStart(e.$ms, 3, '0');
        case 'Z':
          return r;
        default:
          return r.replace(':', '');
      }
    });
  }, h;
}();

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag$2 = '[object Symbol]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */
var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;
/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$2.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$2.toString;
/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */
var _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto$2.propertyIsEnumerable,
    splice = arrayProto.splice;
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map$1 = getNative(root, 'Map'),
    Promise$1 = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
} // Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map$1 || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
} // Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString$2.call(value);
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObject(value) && !isObjectLike$2(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;
  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike$2(value) && isLength(value.length) && !!typedArrayTags[objectToString$2.call(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          return seen.add(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$1(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG; // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;
    case symbolTag$2:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = objectToString$2.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$2;
  return value === proto;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike$2(value) && isArrayLike(value);
}
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString$2.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$1 = '[object Object]',
    promiseTag$1 = '[object Promise]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$3 = '[object Symbol]',
    weakMapTag$1 = '[object WeakMap]';
var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;
/** Used to detect host constructors (Safari). */
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$3] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$1] = cloneableTags[weakMapTag$1] = false;
/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */
var freeSelf$1 = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();
/** Detect free variable `exports`. */
var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject$1(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */
var arrayProto$1 = Array.prototype,
    funcProto$1 = Function.prototype,
    objectProto$3 = Object.prototype;
/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];
/** Used to detect methods masquerading as native. */
var maskSrcKey$1 = function () {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$3.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$3 = objectProto$3.toString;
/** Used to detect if a method is native. */
var reIsNative$1 = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar$1, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */
var Buffer = moduleExports$1 ? root$1.Buffer : undefined,
    _Symbol$1 = root$1.Symbol,
    Uint8Array$1 = root$1.Uint8Array,
    getPrototype = overArg$1(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable$1 = objectProto$3.propertyIsEnumerable,
    splice$1 = arrayProto$1.splice;
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys$1 = overArg$1(Object.keys, Object);
/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$1(root$1, 'DataView'),
    Map$2 = getNative$1(root$1, 'Map'),
    Promise$2 = getNative$1(root$1, 'Promise'),
    Set$1 = getNative$1(root$1, 'Set'),
    WeakMap$1 = getNative$1(root$1, 'WeakMap'),
    nativeCreate$1 = getNative$1(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString$1 = toSource$1(DataView$1),
    mapCtorString$1 = toSource$1(Map$2),
    promiseCtorString$1 = toSource$1(Promise$2),
    setCtorString$1 = toSource$1(Set$1),
    weakMapCtorString$1 = toSource$1(WeakMap$1);
/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol$1 ? _Symbol$1.prototype : undefined,
    symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate$1 && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
} // Add methods to `Hash`.
Hash$1.prototype.clear = hashClear$1;
Hash$1.prototype['delete'] = hashDelete$1;
Hash$1.prototype.get = hashGet$1;
Hash$1.prototype.has = hashHas$1;
Hash$1.prototype.set = hashSet$1;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$1(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index, 1);
  }
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$1(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf$1(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
} // Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear$1;
ListCache$1.prototype['delete'] = listCacheDelete$1;
ListCache$1.prototype.get = listCacheGet$1;
ListCache$1.prototype.has = listCacheHas$1;
ListCache$1.prototype.set = listCacheSet$1;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.__data__ = {
    'hash': new Hash$1(),
    'map': new (Map$2 || ListCache$1)(),
    'string': new Hash$1()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  return getMapData$1(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$1(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  getMapData$1(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear$1;
MapCache$1.prototype['delete'] = mapCacheDelete$1;
MapCache$1.prototype.get = mapCacheGet$1;
MapCache$1.prototype.has = mapCacheHas$1;
MapCache$1.prototype.set = mapCacheSet$1;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  this.__data__ = new ListCache$1(entries);
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$1();
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  return this.__data__['delete'](key);
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache$1) {
    var pairs = cache.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache$1(pairs);
  }
  cache.set(key, value);
  return this;
} // Add methods to `Stack`.
Stack$1.prototype.clear = stackClear$1;
Stack$1.prototype['delete'] = stackDelete$1;
Stack$1.prototype.get = stackGet$1;
Stack$1.prototype.has = stackHas$1;
Stack$1.prototype.set = stackSet$1;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray$1(value) || isArguments$1(value) ? baseTimes$1(value.length, String) : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$1.call(object, key) && eq$2(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys$1(source), object);
}
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag$1 || tag == genTag$1;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      if (isHostObject$1(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  } // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys$1(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    } // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject$1(proto) ? objectCreate(proto) : {};
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  return objectToString$3.call(value);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$1(value) || isHostObject$1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$1(value));
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray$1(map), true) : mapToArray$1(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray$1(set), true) : setToArray$1(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});
  var index = -1,
      length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}
/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys$1, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable$1(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative$1(value) ? value : undefined;
}
/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg$1(nativeGetSymbols, Object) : stubArray;
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$1; // Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView$1 && getTag$1(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$2 && getTag$1(new Map$2()) != mapTag$1 || Promise$2 && getTag$1(Promise$2.resolve()) != promiseTag$1 || Set$1 && getTag$1(new Set$1()) != setTag$1 || WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag$1) {
  getTag$1 = function getTag(value) {
    var result = objectToString$3.call(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource$1(Ctor) : undefined;
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$1;
        case mapCtorString$1:
          return mapTag$1;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$1;
        case weakMapCtorString$1:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length); // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] === 'string' && hasOwnProperty$1.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor === 'function' && !isPrototype$1(object) ? baseCreate(getPrototype(object)) : {};
}
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$1:
      return cloneMap(object, isDeep, cloneFunc);
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$1:
      return cloneSet(object, isDeep, cloneFunc);
    case symbolTag$3:
      return cloneSymbol(object);
  }
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (typeof value === 'number' || reIsUint$1.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor === 'function' && Ctor.prototype || objectProto$3;
  return value === proto;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments$1(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject$1(value) && hasOwnProperty$1.call(value, 'callee') && (!propertyIsEnumerable$1.call(value, 'callee') || objectToString$3.call(value) == argsTag$1);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$3(value) && isArrayLike$1(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString$3.call(value) : '';
  return tag == funcTag$1 || tag == genTag$1;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$3(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys$1(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge
 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */
/**
 * Merge one or more objects
 * @param bool? clone
 * @param mixed,... arguments
 * @return object
 */
var Public = function Public(clone) {
  return merge(clone === true, false, arguments);
};
/**
 * Merge two or more objects recursively
 * @param bool? clone
 * @param mixed,... arguments
 * @return object
 */
Public.recursive = function (clone) {
  return merge(clone === true, true, arguments);
};
/**
 * Clone the input removing any reference
 * @param mixed input
 * @return mixed
 */
Public.clone = function (input) {
  var output = input,
      type = typeOf(input),
      index,
      size;
  if (type === 'array') {
    output = [];
    size = input.length;
    for (index = 0; index < size; ++index) {
      output[index] = Public.clone(input[index]);
    }
  } else if (type === 'object') {
    output = {};
    for (index in input) {
      output[index] = Public.clone(input[index]);
    }
  }
  return output;
};
/**
 * Merge two objects recursively
 * @param mixed input
 * @param mixed extend
 * @return mixed
 */
function merge_recursive(base, extend) {
  if (typeOf(base) !== 'object') return extend;
  for (var key in extend) {
    if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {
      base[key] = merge_recursive(base[key], extend[key]);
    } else {
      base[key] = extend[key];
    }
  }
  return base;
}
/**
 * Merge two or more objects
 * @param bool clone
 * @param bool recursive
 * @param array argv
 * @return object
 */
function merge(clone, recursive, argv) {
  var result = argv[0],
      size = argv.length;
  if (clone || typeOf(result) !== 'object') result = {};
  for (var index = 0; index < size; ++index) {
    var item = argv[index],
        type = typeOf(item);
    if (type !== 'object') continue;
    for (var key in item) {
      if (key === '__proto__') continue;
      var sitem = clone ? Public.clone(item[key]) : item[key];
      if (recursive) {
        result[key] = merge_recursive(result[key], sitem);
      } else {
        result[key] = sitem;
      }
    }
  }
  return result;
}
/**
 * Get type of variable
 * @param mixed input
 * @return string
 *
 * @see http://jsperf.com/typeofvar
 */
function typeOf(input) {
  return {}.toString.call(input).slice(8, -1).toLowerCase();
}

/**
 * 设置cookie
 * @memberof  util
 * @param {String} name cookie名称
 * @param {String} value cookie值
 * @param {Number} days 过期时间（天数）
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   dtc.util.cookieSet('cookieName','value',expires)
 */
function cookieSet(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

/**
 * 删除cookie。
 * @memberof  util
 * @param { String } c_name cookie名称
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   dtc.util.cookieDel('cookieName')
 */
function cookieDel(name) {
  cookieSet(name, "", -1);
}

/**
 * 取得cookie,如果没有找到则返回null
 * @memberof  util
 * @param { String } name cookie名称
 * @author 褚甜甜  <ctt@jusfoun.com>
 * @example
 *   dtc.util.cookieGet('cookieName')
 */
function cookieGet(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * 根据给定的字符长度截取文本，如果文本被截取，那么它的后面会自动带上省略号
 * @memberof util
 * @author 汝银娟（ryj@jusfoun.com）
 * @param {string}str  字符串
 * @param {number}nwords  截取长度
 * @return {string} 截取后的字符串
 * @example  excerpt("如果字数超过5个就截取", 5)
 */
function excerpt(str, nwords) {
  var words = str.split('');
  words.splice(nwords, words.length - 1);
  return words.join('') + (words.length !== str.split('').length ? '…' : '');
}

/**
 * 从字符串中删除前部和尾部空格或单独删除一部分。
 * @param {*} str 需要处理的字符串
 * @param {string} place 字符串trim选项 可选值 'left','right','all'
 */
function trim(str) {
  var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
  str = str + '';
  var regl = /^\s*/g,
      regr = /\s*$/g,
      rega = /(^\s*)|(\s*$)/g,
      reg;
  switch (place) {
    case 'left':
      reg = regl;
      break;
    case 'right':
      reg = regr;
      break;
    default:
      reg = rega;
  }
  return str.replace(reg, "");
}

var Lab62 =
/*#__PURE__*/
function () {
  function Lab62() {
    _classCallCheck(this, Lab62);
    // Init delegate
    this.delegate = {
      b62char: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      b62string: ""
    }; // Init generator
    this.generator = function (length) {
      // Run loop specified times
      for (var i = 0; i < length; i++) {
        // Get random integer
        var index = Math.floor(Math.random() * 62); // Build ID one character at a time
        this.delegate.b62string += this.delegate.b62char[index];
      }
      return this.delegate.b62string;
    };
  }
  _createClass(Lab62, [{
    key: "make",
    value: function make(length) {
      return this.generator(length);
    }
  }]);
  return Lab62;
}();
function uId() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var id = new Lab62();
  return id.make(length);
}

var _toString = Object.prototype.toString;

/**
 * 监测数据类型只保留基本的数据类型字段
 * @param {any} value 需要监测的数据类型
 */
function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}

/**
 * RgbToHex
 * @param {string} input
 * @returns {string} hex value
 */
function rgbToHex(input) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /([\d]{1,3})\,\s*([\d]{1,3})\,\s*([\d]{1,3})\,?\s*((0\.[\d])|(\.[\d])|(0|1))?/,
      color = reg.exec(input);
  if (color) {
    var colorArr = color[0].split(',');
    var colorStr = colorArr.map(function (c, i) {
      if (i > 2 && c) {
        if (alpha === true) {
          return (parseFloat(c.trim()) * 256).toString(16).slice(0, 2);
        } else {
          return '';
        }
      }
      var hex = (c.trim() - 0).toString(16);
      return hex.length < 2 ? '0' + hex : hex;
    });
    return '#' + colorStr.join('');
  } else {
    return null;
  }
}

/**
 * HexToRgb
 *
 * @param {string} input
 */
function hexToRgb(input) {
  var output = [];
  input = input.replace(/^[#]?(?:([0-9a-f]{6})|([0-9a-f]{3}))$/i, function (match, group1, group2) {
    return group1 ? group1 : group2.replace(/([0-9a-f])/ig, '$1$1');
  });
  if (input.length === 6) {
    for (var i = 0; i < 3; i++) {
      output.push(parseInt(input.slice(i * 2, i * 2 + 2), 16));
    }
    return output.join(',');
  } else {
    return null;
  }
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$2 = Array.isArray;

/**
 * 判断是否是对象是否为空。
 * @memberof  util
 * @param {Object} val 要判断的对象
 * @author 王帅  <ws@jusfoun.com>
 * @example
 * dtc.util.isObjectEmpty({}) //true
 *
 */
function isEmptyObject(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k;
    for (k in obj) {
      if (obj.hasOwnProperty(k)) {
        return false;
      }
    }
    return true;
  }
}

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$2 = '[object Function]',
    genTag$2 = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';
/** Detect free variable `global` from Node.js. */
var freeGlobal$2 = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */
var freeSelf$2 = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */
var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();
/** Used for built-in method references. */
var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$4.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$4.toString;
/** Built-in value references. */
var _Symbol$2 = root$2.Symbol,
    symToStringTag = _Symbol$2 ? _Symbol$2.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$4(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$2.call(value, symToStringTag),
      tag = value[symToStringTag];
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$4(value) {
  return nativeObjectToString.call(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$2(value);
  return tag == funcTag$2 || tag == genTag$2 || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
/** `Object#toString` result references. */
var numberTag$2 = '[object Number]';
/** Used for built-in method references. */
var objectProto$5 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$5 = objectProto$5.toString;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$4(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' || isObjectLike$4(value) && objectToString$5.call(value) == numberTag$2;
}

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
/** `Object#toString` result references. */
var numberTag$3 = '[object Number]';
/** Used for built-in method references. */
var objectProto$6 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$6 = objectProto$6.toString;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$5(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber$1(value) {
  return typeof value == 'number' || isObjectLike$5(value) && objectToString$6.call(value) == numberTag$3;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$3(value) {
  var type = _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

/*-------------array----------------*/
var util = {
  /*--array--*/
  concat: concat,
  shuffle: shuffle,
  max: max,
  min: min,
  unique: unique,
  /*--common--*/
  Browser: Browser,
  /*--common--*/
  urlArgs: urlArgs,
  moment: M,
  /*--object--*/
  eq: eq,
  isEqual: isEqual,
  cloneDeep: cloneDeep,
  merge: Public,
  /*--storage--*/
  cookieDel: cookieDel,
  cookieGet: cookieGet,
  cookieSet: cookieSet,
  /*--string--*/
  excerpt: excerpt,
  trim: trim,
  uId: uId,
  toRawType: toRawType,
  rgbToHex: rgbToHex,
  hexToRgb: hexToRgb,
  /*--typeCheck--*/
  isArray: isArray$2,
  isEmptyObject: isEmptyObject,
  isFunction: isFunction$2,
  isNaN: isNaN,
  isNull: isNull,
  isNumber: isNumber$1,
  isObject: isObject$3,
  isPlainObject: isPlainObject
};

/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */
var Detector = {
  canvas: !!window.CanvasRenderingContext2D,
  webgl: function () {
    try {
      var canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }(),
  workers: !!window.Worker,
  fileapi: window.File && window.FileReader && window.FileList && window.Blob,
  getWebGLErrorMessage: function getWebGLErrorMessage() {
    var element = document.createElement('div');
    element.id = 'webgl-error-message';
    element.style.fontFamily = 'monospace';
    element.style.fontSize = '13px';
    element.style.fontWeight = 'normal';
    element.style.textAlign = 'center';
    element.style.background = '#fff';
    element.style.color = '#000';
    element.style.padding = '1.5em';
    element.style.width = '400px';
    element.style.margin = '5em auto 0';
    if (!this.webgl) {
      element.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join('\n') : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join('\n');
    }
    return element;
  },
  addGetWebGLMessage: function addGetWebGLMessage(parameters) {
    var parent, id, element;
    parameters = parameters || {};
    parent = parameters.parent !== undefined ? parameters.parent : document.body;
    id = parameters.id !== undefined ? parameters.id : 'oldie';
    element = Detector.getWebGLErrorMessage();
    element.id = id;
    parent.appendChild(element);
  }
}; // "undefined" != typeof module && module.exports && (module.exports = Detector);

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe
function OrbitControls(object, domElement) {
  this.object = object;
  this.domElement = domElement !== undefined ? domElement : document; // Set to false to disable this control
  this.enabled = true; // "target" sets the location of focus, where the object orbits around
  this.target = new Vector3(); // How far you can dolly in and out ( PerspectiveCamera only )
  this.minDistance = 0;
  this.maxDistance = Infinity; // How far you can zoom in and out ( OrthographicCamera only )
  this.minZoom = 0;
  this.maxZoom = Infinity; // How far you can orbit vertically, upper and lower limits.
  // Range is 0 to Math.PI radians.
  this.minPolarAngle = 0; // radians
  this.maxPolarAngle = Math.PI; // radians
  // How far you can orbit horizontally, upper and lower limits.
  // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
  this.minAzimuthAngle = -Infinity; // radians
  this.maxAzimuthAngle = Infinity; // radians
  // Set to true to enable damping (inertia)
  // If damping is enabled, you must call controls.update() in your animation loop
  this.enableDamping = false;
  this.dampingFactor = 0.25; // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
  // Set to false to disable zooming
  this.enableZoom = true;
  this.zoomSpeed = 1.0; // Set to false to disable rotating
  this.enableRotate = true;
  this.rotateSpeed = 1.0; // Set to false to disable panning
  this.enablePan = true;
  this.keyPanSpeed = 7.0; // pixels moved per arrow key push
  // Set to true to automatically rotate around the target
  // If auto-rotate is enabled, you must call controls.update() in your animation loop
  this.autoRotate = false;
  this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
  // Set to false to disable use of the keys
  this.enableKeys = true; // The four arrow keys
  this.keys = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    BOTTOM: 40
  }; // Mouse buttons
  this.mouseButtons = {
    ORBIT: MOUSE.LEFT,
    ZOOM: MOUSE.MIDDLE,
    PAN: MOUSE.RIGHT
  }; // for reset
  this.target0 = this.target.clone();
  this.position0 = this.object.position.clone();
  this.zoom0 = this.object.zoom; //
  // public methods
  //
  this.getPolarAngle = function () {
    return spherical.phi;
  };
  this.getAzimuthalAngle = function () {
    return spherical.theta;
  };
  this.saveState = function () {
    scope.target0.copy(scope.target);
    scope.position0.copy(scope.object.position);
    scope.zoom0 = scope.object.zoom;
  };
  this.reset = function () {
    scope.target.copy(scope.target0);
    scope.object.position.copy(scope.position0);
    scope.object.zoom = scope.zoom0;
    scope.object.updateProjectionMatrix();
    scope.dispatchEvent(changeEvent);
    scope.update();
    state = STATE.NONE;
  }; // this method is exposed, but perhaps it would be better if we can make it private...
  this.update = function () {
    var offset = new Vector3(); // so camera.up is the orbit axis
    var quat = new Quaternion().setFromUnitVectors(object.up, new Vector3(0, 1, 0));
    var quatInverse = quat.clone().inverse();
    var lastPosition = new Vector3();
    var lastQuaternion = new Quaternion();
    return function update() {
      var position = scope.object.position;
      offset.copy(position).sub(scope.target); // rotate offset to "y-axis-is-up" space
      offset.applyQuaternion(quat); // angle from z-axis around y-axis
      spherical.setFromVector3(offset);
      if (scope.autoRotate && state === STATE.NONE) {
        rotateLeft(getAutoRotationAngle());
      }
      spherical.theta += sphericalDelta.theta;
      spherical.phi += sphericalDelta.phi; // restrict theta to be between desired limits
      spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta)); // restrict phi to be between desired limits
      spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
      spherical.makeSafe();
      spherical.radius *= scale; // restrict radius to be between desired limits
      spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius)); // move target to panned location
      scope.target.add(panOffset);
      offset.setFromSpherical(spherical); // rotate offset back to "camera-up-vector-is-up" space
      offset.applyQuaternion(quatInverse);
      position.copy(scope.target).add(offset);
      scope.object.lookAt(scope.target);
      if (scope.enableDamping === true) {
        sphericalDelta.theta *= 1 - scope.dampingFactor;
        sphericalDelta.phi *= 1 - scope.dampingFactor;
      } else {
        sphericalDelta.set(0, 0, 0);
      }
      scale = 1;
      panOffset.set(0, 0, 0); // update condition is:
      // min(camera displacement, camera rotation in radians)^2 > EPS
      // using small-angle approximation cos(x/2) = 1 - x^2 / 8
      if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
        scope.dispatchEvent(changeEvent);
        lastPosition.copy(scope.object.position);
        lastQuaternion.copy(scope.object.quaternion);
        zoomChanged = false;
        return true;
      }
      return false;
    };
  }();
  this.dispose = function () {
    scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
    scope.domElement.removeEventListener('mousedown', onMouseDown, false);
    scope.domElement.removeEventListener('wheel', onMouseWheel, false);
    scope.domElement.removeEventListener('touchstart', onTouchStart, false);
    scope.domElement.removeEventListener('touchend', onTouchEnd, false);
    scope.domElement.removeEventListener('touchmove', onTouchMove, false);
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    window.removeEventListener('keydown', onKeyDown, false); //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
  }; //
  // internals
  //
  var scope = this;
  var changeEvent = {
    type: 'change'
  };
  var startEvent = {
    type: 'start'
  };
  var endEvent = {
    type: 'end'
  };
  var STATE = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_DOLLY: 4,
    TOUCH_PAN: 5
  };
  var state = STATE.NONE;
  var EPS = 0.000001; // current position in spherical coordinates
  var spherical = new Spherical();
  var sphericalDelta = new Spherical();
  var scale = 1;
  var panOffset = new Vector3();
  var zoomChanged = false;
  var rotateStart = new Vector2();
  var rotateEnd = new Vector2();
  var rotateDelta = new Vector2();
  var panStart = new Vector2();
  var panEnd = new Vector2();
  var panDelta = new Vector2();
  var dollyStart = new Vector2();
  var dollyEnd = new Vector2();
  var dollyDelta = new Vector2();
  function getAutoRotationAngle() {
    return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
  }
  function getZoomScale() {
    return Math.pow(0.95, scope.zoomSpeed);
  }
  function rotateLeft(angle) {
    sphericalDelta.theta -= angle;
  }
  function rotateUp(angle) {
    sphericalDelta.phi -= angle;
  }
  var panLeft = function () {
    var v = new Vector3();
    return function panLeft(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
      v.multiplyScalar(-distance);
      panOffset.add(v);
    };
  }();
  var panUp = function () {
    var v = new Vector3();
    return function panUp(distance, objectMatrix) {
      v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
      v.multiplyScalar(distance);
      panOffset.add(v);
    };
  }(); // deltaX and deltaY are in pixels; right and down are positive
  var pan = function () {
    var offset = new Vector3();
    return function pan(deltaX, deltaY) {
      var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
      if (scope.object.isPerspectiveCamera) {
        // perspective
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);
        var targetDistance = offset.length(); // half of the fov is center to top of screen
        targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0); // we actually don't use screenWidth, since perspective camera is fixed to screen height
        panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
        panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
      } else if (scope.object.isOrthographicCamera) {
        // orthographic
        panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
        panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
      } else {
        // camera neither orthographic nor perspective
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
        scope.enablePan = false;
      }
    };
  }();
  function dollyIn(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale /= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  }
  function dollyOut(dollyScale) {
    if (scope.object.isPerspectiveCamera) {
      scale *= dollyScale;
    } else if (scope.object.isOrthographicCamera) {
      scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
      scope.object.updateProjectionMatrix();
      zoomChanged = true;
    } else {
      console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
      scope.enableZoom = false;
    }
  } //
  // event callbacks - update the object state
  //
  function handleMouseDownRotate(event) {
    //console.log( 'handleMouseDownRotate' );
    rotateStart.set(event.clientX, event.clientY);
  }
  function handleMouseDownDolly(event) {
    //console.log( 'handleMouseDownDolly' );
    dollyStart.set(event.clientX, event.clientY);
  }
  function handleMouseDownPan(event) {
    //console.log( 'handleMouseDownPan' );
    panStart.set(event.clientX, event.clientY);
  }
  function handleMouseMoveRotate(event) {
    //console.log( 'handleMouseMoveRotate' );
    rotateEnd.set(event.clientX, event.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart);
    var element = scope.domElement === document ? scope.domElement.body : scope.domElement; // rotating across whole screen goes 360 degrees around
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180
    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
    rotateStart.copy(rotateEnd);
    scope.update();
  }
  function handleMouseMoveDolly(event) {
    //console.log( 'handleMouseMoveDolly' );
    dollyEnd.set(event.clientX, event.clientY);
    dollyDelta.subVectors(dollyEnd, dollyStart);
    if (dollyDelta.y > 0) {
      dollyIn(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyOut(getZoomScale());
    }
    dollyStart.copy(dollyEnd);
    scope.update();
  }
  function handleMouseMovePan(event) {
    //console.log( 'handleMouseMovePan' );
    panEnd.set(event.clientX, event.clientY);
    panDelta.subVectors(panEnd, panStart);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }
  function handleMouseWheel(event) {
    // console.log( 'handleMouseWheel' );
    if (event.deltaY < 0) {
      dollyOut(getZoomScale());
    } else if (event.deltaY > 0) {
      dollyIn(getZoomScale());
    }
    scope.update();
  }
  function handleKeyDown(event) {
    //console.log( 'handleKeyDown' );
    switch (event.keyCode) {
      case scope.keys.UP:
        pan(0, scope.keyPanSpeed);
        scope.update();
        break;
      case scope.keys.BOTTOM:
        pan(0, -scope.keyPanSpeed);
        scope.update();
        break;
      case scope.keys.LEFT:
        pan(scope.keyPanSpeed, 0);
        scope.update();
        break;
      case scope.keys.RIGHT:
        pan(-scope.keyPanSpeed, 0);
        scope.update();
        break;
    }
  }
  function handleTouchStartRotate(event) {
    //console.log( 'handleTouchStartRotate' );
    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }
  function handleTouchStartDolly(event) {
    //console.log( 'handleTouchStartDolly' );
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyStart.set(0, distance);
  }
  function handleTouchStartPan(event) {
    //console.log( 'handleTouchStartPan' );
    panStart.set(event.touches[0].pageX, event.touches[0].pageY);
  }
  function handleTouchMoveRotate(event) {
    //console.log( 'handleTouchMoveRotate' );
    rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    rotateDelta.subVectors(rotateEnd, rotateStart);
    var element = scope.domElement === document ? scope.domElement.body : scope.domElement; // rotating across whole screen goes 360 degrees around
    rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed); // rotating up and down along whole screen attempts to go 360, but limited to 180
    rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
    rotateStart.copy(rotateEnd);
    scope.update();
  }
  function handleTouchMoveDolly(event) {
    //console.log( 'handleTouchMoveDolly' );
    var dx = event.touches[0].pageX - event.touches[1].pageX;
    var dy = event.touches[0].pageY - event.touches[1].pageY;
    var distance = Math.sqrt(dx * dx + dy * dy);
    dollyEnd.set(0, distance);
    dollyDelta.subVectors(dollyEnd, dollyStart);
    if (dollyDelta.y > 0) {
      dollyOut(getZoomScale());
    } else if (dollyDelta.y < 0) {
      dollyIn(getZoomScale());
    }
    dollyStart.copy(dollyEnd);
    scope.update();
  }
  function handleTouchMovePan(event) {
    //console.log( 'handleTouchMovePan' );
    panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
    panDelta.subVectors(panEnd, panStart);
    pan(panDelta.x, panDelta.y);
    panStart.copy(panEnd);
    scope.update();
  }
  //
  // event handlers - FSM: listen for events and reset state
  //
  function onMouseDown(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
    switch (event.button) {
      case scope.mouseButtons.ORBIT:
        if (scope.enableRotate === false) return;
        handleMouseDownRotate(event);
        state = STATE.ROTATE;
        break;
      case scope.mouseButtons.ZOOM:
        if (scope.enableZoom === false) return;
        handleMouseDownDolly(event);
        state = STATE.DOLLY;
        break;
      case scope.mouseButtons.PAN:
        if (scope.enablePan === false) return;
        handleMouseDownPan(event);
        state = STATE.PAN;
        break;
    }
    if (state !== STATE.NONE) {
      document.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mouseup', onMouseUp, false);
      scope.dispatchEvent(startEvent);
    }
  }
  function onMouseMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
    switch (state) {
      case STATE.ROTATE:
        if (scope.enableRotate === false) return;
        handleMouseMoveRotate(event);
        break;
      case STATE.DOLLY:
        if (scope.enableZoom === false) return;
        handleMouseMoveDolly(event);
        break;
      case STATE.PAN:
        if (scope.enablePan === false) return;
        handleMouseMovePan(event);
        break;
    }
  }
  function onMouseUp(event) {
    if (scope.enabled === false) return;
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }
  function onMouseWheel(event) {
    if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
    event.preventDefault();
    event.stopPropagation();
    handleMouseWheel(event);
    scope.dispatchEvent(startEvent); // not sure why these are here...
    scope.dispatchEvent(endEvent);
  }
  function onKeyDown(event) {
    if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
    handleKeyDown(event);
  }
  function onTouchStart(event) {
    if (scope.enabled === false) return;
    switch (event.touches.length) {
      case 1:
        // one-fingered touch: rotate
        if (scope.enableRotate === false) return;
        handleTouchStartRotate(event);
        state = STATE.TOUCH_ROTATE;
        break;
      case 2:
        // two-fingered touch: dolly
        if (scope.enableZoom === false) return;
        handleTouchStartDolly(event);
        state = STATE.TOUCH_DOLLY;
        break;
      case 3:
        // three-fingered touch: pan
        if (scope.enablePan === false) return;
        handleTouchStartPan(event);
        state = STATE.TOUCH_PAN;
        break;
      default:
        state = STATE.NONE;
    }
    if (state !== STATE.NONE) {
      scope.dispatchEvent(startEvent);
    }
  }
  function onTouchMove(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
    event.stopPropagation();
    switch (event.touches.length) {
      case 1:
        // one-fingered touch: rotate
        if (scope.enableRotate === false) return;
        if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...
        handleTouchMoveRotate(event);
        break;
      case 2:
        // two-fingered touch: dolly
        if (scope.enableZoom === false) return;
        if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...
        handleTouchMoveDolly(event);
        break;
      case 3:
        // three-fingered touch: pan
        if (scope.enablePan === false) return;
        if (state !== STATE.TOUCH_PAN) return; // is this needed?...
        handleTouchMovePan(event);
        break;
      default:
        state = STATE.NONE;
    }
  }
  function onTouchEnd(event) {
    if (scope.enabled === false) return;
    scope.dispatchEvent(endEvent);
    state = STATE.NONE;
  }
  function onContextMenu(event) {
    if (scope.enabled === false) return;
    event.preventDefault();
  }
  scope.domElement.addEventListener('contextmenu', onContextMenu, false);
  scope.domElement.addEventListener('mousedown', onMouseDown, false);
  scope.domElement.addEventListener('wheel', onMouseWheel, false);
  scope.domElement.addEventListener('touchstart', onTouchStart, false);
  scope.domElement.addEventListener('touchend', onTouchEnd, false);
  scope.domElement.addEventListener('touchmove', onTouchMove, false);
  window.addEventListener('keydown', onKeyDown, false); // force an update at start
  this.update();
}
OrbitControls.prototype = Object.create(EventDispatcher.prototype);
OrbitControls.prototype.constructor = OrbitControls;
Object.defineProperties(OrbitControls.prototype, {
  center: {
    get: function get() {
      console.warn('THREE.OrbitControls: .center has been renamed to .target');
      return this.target;
    }
  },
  // backward compatibility
  noZoom: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      return !this.enableZoom;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
      this.enableZoom = !value;
    }
  },
  noRotate: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      return !this.enableRotate;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
      this.enableRotate = !value;
    }
  },
  noPan: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      return !this.enablePan;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
      this.enablePan = !value;
    }
  },
  noKeys: {
    get: function get() {
      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      return !this.enableKeys;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
      this.enableKeys = !value;
    }
  },
  staticMoving: {
    get: function get() {
      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      return !this.enableDamping;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
      this.enableDamping = !value;
    }
  },
  dynamicDampingFactor: {
    get: function get() {
      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      return this.dampingFactor;
    },
    set: function set(value) {
      console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
      this.dampingFactor = value;
    }
  }
}); // THREE.OrbitControls=OrbitControls

/*
* 参数格式
let opt={
    el:domElement,
    scene:null,
    camera:null,
    renderer:null,
    _onResize:'[function]',
    _onMouseMove:'[function]',
    _onMouseDown:'[function]'
}
*/
var Event =
/*#__PURE__*/
function () {
  function Event(o) {
    _classCallCheck(this, Event);
    this.__raycaster = new Raycaster();
    this.__mouse = new Vector2();
    this.__resize = o.__proto__._onResize;
    this.__mousemove = o.__proto__._onMouseMove;
    this.__mousedown = o.__proto__._onMouseDown;
    this.target = o;
    Object.assign(this, o);
    if (!this.camera && !this.renderer && !this.el) {
      console.warn('THREE.Event:not find camera, renderer, domElement,Please ensure that it is a valid 3D control');
      return;
    }
    if (!this.__resize && !this.__mousemove && !this.__mousedown) {
      console.warn('THREE.Event:Users need to implement _onResize(),_onMouseMove(),_onMouseDown() method');
      return;
    }
    this.__resize__ = this.onWindowResize.bind(this);
    this.__mousemove__ = this.onDocumentMouseMove.bind(this);
    this.__touchstart__ = this.onDocumentTouchStart.bind(this);
    this.__mousedown__ = this.onDocumentMouseDown.bind(this);
    this.mousemove_timer = null;
    this.mousemove_interval = 10;
    this.enable = true;
    if (this.__resize) {
      window.addEventListener('resize', this.__resize__, false);
    }
    if (this.__mousemove) {
      this.el.addEventListener('mousemove', this.__mousemove__, false);
    }
    if (this.__mousedown) {
      this.el.addEventListener('touchstart', this.__touchstart__, false);
      this.el.addEventListener('mousedown', this.__mousedown__, false);
    }
  }
  _createClass(Event, [{
    key: "dispose",
    value: function dispose() {
      window.removeEventListener('resize', this.__resize__, false);
      this.el.removeEventListener('mousemove', this.__mousemove__, false);
      this.el.removeEventListener('touchstart', this.__touchstart__, false);
      this.el.removeEventListener('mousedown', this.__mousedown__, false);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize(event) {
      this.camera.aspect = this.el.offsetWidth / this.el.offsetHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.el.offsetWidth, this.el.offsetHeight);
      this.enable && this.__resize.bind(this.target)(event);
    }
  }, {
    key: "onDocumentMouseMove",
    value: function onDocumentMouseMove(event) {
      var _this = this;
      event.preventDefault();
      this.mousemove_timer && clearTimeout(this.mousemove_timer);
      this.mousemove_timer = setTimeout(function () {
        _this.__mouse.x = event.offsetX / _this.el.offsetWidth * 2 - 1;
        _this.__mouse.y = -(event.offsetY / _this.el.offsetHeight) * 2 + 1;
        _this.__raycaster.setFromCamera(_this.__mouse, _this.camera);
        var intersects = _this.__raycaster.intersectObjects(_this.scene.children, true);
        _this.enable && _this.__mousemove.bind(_this.target)(event, intersects);
      }, this.mousemove_interval);
    }
  }, {
    key: "onDocumentTouchStart",
    value: function onDocumentTouchStart(event) {
      event.preventDefault();
      event.clientX = event.touches[0].pageX;
      event.clientY = event.touches[0].pageY;
      this.enable && this.onDocumentMouseDown(event);
    }
  }, {
    key: "onDocumentMouseDown",
    value: function onDocumentMouseDown(event) {
      event.preventDefault();
      this.__mouse.x = (event.offsetX || event.clientX) / this.el.offsetWidth * 2 - 1;
      this.__mouse.y = -((event.offsetY || event.clientY) / this.el.offsetHeight) * 2 + 1;
      this.__raycaster.setFromCamera(this.__mouse, this.camera);
      var intersects = this.__raycaster.intersectObjects(this.scene.children, true);
      this.enable && this.__mousedown.bind(this.target)(event, intersects);
    }
  }]);
  return Event;
}(); // THREE.Event = Event;

// tween.js v.0.15.0 https://github.com/sole/tween.js
void 0 === Date.now && (Date.now = function () {
  return new Date().valueOf();
});
var TWEEN = TWEEN || function () {
  var n = [];
  return {
    REVISION: "14",
    getAll: function getAll() {
      return n;
    },
    removeAll: function removeAll() {
      n = [];
    },
    add: function add(t) {
      n.push(t);
    },
    remove: function remove(t) {
      var r = n.indexOf(t);
      -1 !== r && n.splice(r, 1);
    },
    update: function update(t) {
      if (0 === n.length) return !1;
      var r = 0;
      for (t = void 0 !== t ? t : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); r < n.length;) {
        n[r].update(t) ? r++ : n.splice(r, 1);
      }
      return !0;
    }
  };
}();
TWEEN.Tween = function (n) {
  var t = n,
      r = {},
      i = {},
      u = {},
      o = 1e3,
      e = 0,
      a = !1,
      f = !1,
      s = 0,
      h = null,
      l = TWEEN.Easing.Linear.None,
      p = TWEEN.Interpolation.Linear,
      E = [],
      d = null,
      v = !1,
      I = null,
      w = null,
      M = null;
  for (var O in n) {
    r[O] = parseFloat(n[O], 10);
  }
  this.to = function (n, t) {
    return void 0 !== t && (o = t), i = n, this;
  }, this.start = function (n) {
    TWEEN.add(this), f = !0, v = !1, h = void 0 !== n ? n : "undefined" != typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), h += s;
    for (var o in i) {
      if (i[o] instanceof Array) {
        if (0 === i[o].length) continue;
        i[o] = [t[o]].concat(i[o]);
      }
      r[o] = t[o], r[o] instanceof Array == !1 && (r[o] *= 1), u[o] = r[o] || 0;
    }
    return this;
  }, this.stop = function () {
    return f ? (TWEEN.remove(this), f = !1, null !== M && M.call(t), this.stopChainedTweens(), this) : this;
  }, this.stopChainedTweens = function () {
    for (var n = 0, t = E.length; t > n; n++) {
      E[n].stop();
    }
  }, this.delay = function (n) {
    return s = n, this;
  }, this.repeat = function (n) {
    return e = n, this;
  }, this.yoyo = function (n) {
    return a = n, this;
  }, this.easing = function (n) {
    return l = n, this;
  }, this.interpolation = function (n) {
    return p = n, this;
  }, this.chain = function () {
    return E = arguments, this;
  }, this.onStart = function (n) {
    return d = n, this;
  }, this.onUpdate = function (n) {
    return I = n, this;
  }, this.onComplete = function (n) {
    return w = n, this;
  }, this.onStop = function (n) {
    return M = n, this;
  }, this.update = function (n) {
    var f;
    if (h > n) return !0;
    v === !1 && (null !== d && d.call(t), v = !0);
    var M = (n - h) / o;
    M = M > 1 ? 1 : M;
    var O = l(M);
    for (f in i) {
      var m = r[f] || 0,
          N = i[f];
      N instanceof Array ? t[f] = p(N, O) : ("string" == typeof N && (N = m + parseFloat(N, 10)), "number" == typeof N && (t[f] = m + (N - m) * O));
    }
    if (null !== I && I.call(t, O), 1 == M) {
      if (e > 0) {
        isFinite(e) && e--;
        for (f in u) {
          if ("string" == typeof i[f] && (u[f] = u[f] + parseFloat(i[f], 10)), a) {
            var T = u[f];
            u[f] = i[f], i[f] = T;
          }
          r[f] = u[f];
        }
        return h = n + s, !0;
      }
      null !== w && w.call(t);
      for (var g = 0, W = E.length; W > g; g++) {
        E[g].start(n);
      }
      return !1;
    }
    return !0;
  };
}, TWEEN.Easing = {
  Linear: {
    None: function None(n) {
      return n;
    }
  },
  Quadratic: {
    In: function In(n) {
      return n * n;
    },
    Out: function Out(n) {
      return n * (2 - n);
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n : -.5 * (--n * (n - 2) - 1);
    }
  },
  Cubic: {
    In: function In(n) {
      return n * n * n;
    },
    Out: function Out(n) {
      return --n * n * n + 1;
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n * n : .5 * ((n -= 2) * n * n + 2);
    }
  },
  Quartic: {
    In: function In(n) {
      return n * n * n * n;
    },
    Out: function Out(n) {
      return 1 - --n * n * n * n;
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n * n * n : -.5 * ((n -= 2) * n * n * n - 2);
    }
  },
  Quintic: {
    In: function In(n) {
      return n * n * n * n * n;
    },
    Out: function Out(n) {
      return --n * n * n * n * n + 1;
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? .5 * n * n * n * n * n : .5 * ((n -= 2) * n * n * n * n + 2);
    }
  },
  Sinusoidal: {
    In: function In(n) {
      return 1 - Math.cos(n * Math.PI / 2);
    },
    Out: function Out(n) {
      return Math.sin(n * Math.PI / 2);
    },
    InOut: function InOut(n) {
      return .5 * (1 - Math.cos(Math.PI * n));
    }
  },
  Exponential: {
    In: function In(n) {
      return 0 === n ? 0 : Math.pow(1024, n - 1);
    },
    Out: function Out(n) {
      return 1 === n ? 1 : 1 - Math.pow(2, -10 * n);
    },
    InOut: function InOut(n) {
      return 0 === n ? 0 : 1 === n ? 1 : (n *= 2) < 1 ? .5 * Math.pow(1024, n - 1) : .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
    }
  },
  Circular: {
    In: function In(n) {
      return 1 - Math.sqrt(1 - n * n);
    },
    Out: function Out(n) {
      return Math.sqrt(1 - --n * n);
    },
    InOut: function InOut(n) {
      return (n *= 2) < 1 ? -.5 * (Math.sqrt(1 - n * n) - 1) : .5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
    }
  },
  Elastic: {
    In: function In(n) {
      var t,
          r = .1,
          i = .4;
      return 0 === n ? 0 : 1 === n ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n - t) * Math.PI / i)));
    },
    Out: function Out(n) {
      var t,
          r = .1,
          i = .4;
      return 0 === n ? 0 : 1 === n ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * n) * Math.sin(2 * (n - t) * Math.PI / i) + 1);
    },
    InOut: function InOut(n) {
      var t,
          r = .1,
          i = .4;
      return 0 === n ? 0 : 1 === n ? 1 : (!r || 1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), (n *= 2) < 1 ? -.5 * r * Math.pow(2, 10 * (n -= 1)) * Math.sin(2 * (n - t) * Math.PI / i) : r * Math.pow(2, -10 * (n -= 1)) * Math.sin(2 * (n - t) * Math.PI / i) * .5 + 1);
    }
  },
  Back: {
    In: function In(n) {
      var t = 1.70158;
      return n * n * ((t + 1) * n - t);
    },
    Out: function Out(n) {
      var t = 1.70158;
      return --n * n * ((t + 1) * n + t) + 1;
    },
    InOut: function InOut(n) {
      var t = 2.5949095;
      return (n *= 2) < 1 ? .5 * n * n * ((t + 1) * n - t) : .5 * ((n -= 2) * n * ((t + 1) * n + t) + 2);
    }
  },
  Bounce: {
    In: function In(n) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - n);
    },
    Out: function Out(n) {
      return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
    },
    InOut: function InOut(n) {
      return .5 > n ? .5 * TWEEN.Easing.Bounce.In(2 * n) : .5 * TWEEN.Easing.Bounce.Out(2 * n - 1) + .5;
    }
  }
}, TWEEN.Interpolation = {
  Linear: function Linear(n, t) {
    var r = n.length - 1,
        i = r * t,
        u = Math.floor(i),
        o = TWEEN.Interpolation.Utils.Linear;
    return 0 > t ? o(n[0], n[1], i) : t > 1 ? o(n[r], n[r - 1], r - i) : o(n[u], n[u + 1 > r ? r : u + 1], i - u);
  },
  Bezier: function Bezier(n, t) {
    var r,
        i = 0,
        u = n.length - 1,
        o = Math.pow,
        e = TWEEN.Interpolation.Utils.Bernstein;
    for (r = 0; u >= r; r++) {
      i += o(1 - t, u - r) * o(t, r) * n[r] * e(u, r);
    }
    return i;
  },
  CatmullRom: function CatmullRom(n, t) {
    var r = n.length - 1,
        i = r * t,
        u = Math.floor(i),
        o = TWEEN.Interpolation.Utils.CatmullRom;
    return n[0] === n[r] ? (0 > t && (u = Math.floor(i = r * (1 + t))), o(n[(u - 1 + r) % r], n[u], n[(u + 1) % r], n[(u + 2) % r], i - u)) : 0 > t ? n[0] - (o(n[0], n[0], n[1], n[1], -i) - n[0]) : t > 1 ? n[r] - (o(n[r], n[r], n[r - 1], n[r - 1], i - r) - n[r]) : o(n[u ? u - 1 : 0], n[u], n[u + 1 > r ? r : u + 1], n[u + 2 > r ? r : u + 2], i - u);
  },
  Utils: {
    Linear: function Linear(n, t, r) {
      return (t - n) * r + n;
    },
    Bernstein: function Bernstein(n, t) {
      var r = TWEEN.Interpolation.Utils.Factorial;
      return r(n) / r(t) / r(n - t);
    },
    Factorial: function () {
      var n = [1];
      return function (t) {
        var r,
            i = 1;
        if (n[t]) return n[t];
        for (r = t; r > 1; r--) {
          i *= r;
        }
        return n[t] = i;
      };
    }(),
    CatmullRom: function CatmullRom(n, t, r, i, u) {
      var o = .5 * (r - n),
          e = .5 * (i - t),
          a = u * u,
          f = u * a;
      return (2 * t - 2 * r + o + e) * f + (-3 * t + 3 * r - 2 * o - e) * a + o * u + t;
    }
  }
};

function colorToHex(color) {
  if (typeof color === "string") {
    if (color.indexOf('#') !== -1) color = parseInt(color.replace('#', ''), 16);else color = new Color(color).getHex();
  }
  return color;
}
/**
   * 过渡动画
   * @param {Object|*} from - 修改的启始值
   * @param {Object|*} to - 修改的结束值
   * @param {number} [time] - 完成时间
   * @param {number} [delay=0] - 延迟时间
   * @param {Tween.Easing} [easing=TWEEN.Easing.Linear.None] -动画类型
   * @param {callback} [callback] - 完成回调
   * @example
   * $.transition(area.position, {x:0,y:0,z:10}, 1000, 500, TWEEN.Easing.Quartic.Out, callback)
   */
function transition(from, to, time, delay, easing, callback) {
  if (typeof time !== 'number') {
    time = 1000;
  }
  if (!callback) callback = function callback() {};
  new TWEEN.Tween(from).to(to, time).delay(delay || 0).easing(easing || TWEEN.Easing.Linear.None).start().onComplete(callback);
}
var extend = function () {
  var copyIsArray,
      toString = Object.prototype.toString,
      hasOwn = Object.prototype.hasOwnProperty,
      class2type = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Object]': 'object'
  },
      type = function type(obj) {
    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
  },
      isWindow = function isWindow(obj) {
    return obj && _typeof(obj) === "object" && "setInterval" in obj;
  },
      isArray = Array.isArray || function (obj) {
    return type(obj) === "array";
  },
      isPlainObject = function isPlainObject(obj) {
    if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
      return false;
    }
    if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
      return false;
    }
    var key;
    for (key in obj) {}
    return key === undefined || hasOwn.call(obj, key);
  },
      extend = function extend(deep, target, options) {
    for (var name in options) {
      var src = target[name];
      var copy = options[name];
      if (target === copy) {
        continue;
      }
      if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
        if (copyIsArray) {
          copyIsArray = false;
          var clone = src && isArray(src) ? src : [];
        } else {
          var clone = src && isPlainObject(src) ? src : {};
        }
        target[name] = extend(deep, clone, copy);
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
    return target;
  };
  return extend;
}();

var Font3D$1 =
/*#__PURE__*/
function () {
  function Font3D() {
    _classCallCheck(this, Font3D);
  }
  _createClass(Font3D, null, [{
    key: "create",
    value: function create(txt, o) {
      var opt = {
        size: 50,
        follow: true,
        family: 'Arial',
        borderColor: '#000000',
        //background-color, default: random color
        color: '#ffffff',
        //text color, default: random color
        style: 'oblique',
        //font-style, can be: normal / italic / oblique, default: 'oblique'
        weight: 'bold' //font-weight, can be: normal / bold / bolder / lighter / Number, default: 'bold'
      };
      Object.assign(opt, o);
      return getText2D(txt, opt);
    }
  }]);
  return Font3D;
}();
function getText2D(text, opt) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var canvas_width = 512; //context.measureText( text ).width;
  var canvas_height = 512; //opt.size;
  canvas.width = canvas_width;
  canvas.height = canvas_height;
  context.clearRect(0, 0, canvas_width, canvas_height); // context.fillStyle = 'red';
  // context.fillRect(0,0,canvas_width, canvas_height)
  // let scale=1.0;
  //context.translate(canvas_width / 2, canvas_height / 2);
  //context.scale(scale, scale);
  context.font = '100px ' + opt.family;
  context.fillStyle = opt.color;
  context.textAlign = 'center'; //文本程度对齐方法
  // context.textBaseline='middle';//文本垂曲标的目的，基线位置
  context.fillText(text, 256, canvas_height / 2);
  context.strokeStyle = opt.borderColor;
  context.strokeText(text, 256, canvas_height / 2); // canvas contents will be used for a texture
  var texture = new Texture(canvas);
  texture.needsUpdate = true;
  var textObj = null;
  if (opt.follow) {
    var spriteMaterial = new SpriteMaterial({
      map: texture
    });
    textObj = new Sprite(spriteMaterial);
  } else {
    var material = new MeshBasicMaterial({
      map: texture,
      color: 0xffffff,
      transparent: true,
      side: DoubleSide
    });
    var geometry = new PlaneGeometry(1, 1, 1, 1);
    textObj = new Mesh(geometry, material);
  }
  textObj.scale.set(opt.size / 10, opt.size / 10, 1.0);
  return textObj;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stats = createCommonjsModule(function (module) {
  /**
   * @author mrdoob / http://mrdoob.com/
   */
  var Stats = function Stats() {
    var startTime = Date.now(),
        prevTime = startTime;
    var ms = 0,
        msMin = Infinity,
        msMax = 0;
    var fps = 0,
        fpsMin = Infinity,
        fpsMax = 0;
    var frames = 0,
        mode = 0;
    var container = document.createElement('div');
    container.id = 'stats';
    container.addEventListener('mousedown', function (event) {
      event.preventDefault();
      setMode(++mode % 2);
    }, false);
    container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';
    var fpsDiv = document.createElement('div');
    fpsDiv.id = 'fps';
    fpsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#002';
    container.appendChild(fpsDiv);
    var fpsText = document.createElement('div');
    fpsText.id = 'fpsText';
    fpsText.style.cssText = 'color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
    fpsText.innerHTML = 'FPS';
    fpsDiv.appendChild(fpsText);
    var fpsGraph = document.createElement('div');
    fpsGraph.id = 'fpsGraph';
    fpsGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0ff';
    fpsDiv.appendChild(fpsGraph);
    while (fpsGraph.children.length < 74) {
      var bar = document.createElement('span');
      bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#113';
      fpsGraph.appendChild(bar);
    }
    var msDiv = document.createElement('div');
    msDiv.id = 'ms';
    msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;display:none';
    container.appendChild(msDiv);
    var msText = document.createElement('div');
    msText.id = 'msText';
    msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
    msText.innerHTML = 'MS';
    msDiv.appendChild(msText);
    var msGraph = document.createElement('div');
    msGraph.id = 'msGraph';
    msGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0f0';
    msDiv.appendChild(msGraph);
    while (msGraph.children.length < 74) {
      var bar = document.createElement('span');
      bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#131';
      msGraph.appendChild(bar);
    }
    var setMode = function setMode(value) {
      mode = value;
      switch (mode) {
        case 0:
          fpsDiv.style.display = 'block';
          msDiv.style.display = 'none';
          break;
        case 1:
          fpsDiv.style.display = 'none';
          msDiv.style.display = 'block';
          break;
      }
    };
    var updateGraph = function updateGraph(dom, value) {
      var child = dom.appendChild(dom.firstChild);
      child.style.height = value + 'px';
    };
    return {
      REVISION: 11,
      domElement: container,
      setMode: setMode,
      begin: function begin() {
        startTime = Date.now();
      },
      end: function end() {
        var time = Date.now();
        ms = time - startTime;
        msMin = Math.min(msMin, ms);
        msMax = Math.max(msMax, ms);
        msText.textContent = ms + ' MS (' + msMin + '-' + msMax + ')';
        updateGraph(msGraph, Math.min(30, 30 - ms / 200 * 30));
        frames++;
        if (time > prevTime + 1000) {
          fps = Math.round(frames * 1000 / (time - prevTime));
          fpsMin = Math.min(fpsMin, fps);
          fpsMax = Math.max(fpsMax, fps);
          fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
          updateGraph(fpsGraph, Math.min(30, 30 - fps / 100 * 30));
          prevTime = time;
          frames = 0;
        }
        return time;
      },
      update: function update() {
        startTime = this.end();
      }
    };
  };
  module.exports && (module.exports = Stats);
});

/**
 * 地图区域,继承{@link https://threejs.org/docs/#api/core/Object3D|THREE.Object3D}
 * @class
 * @extends THREE.Object3D
 * @example
 *
 *  let opt = {
 *     color:0x3366ff,     //地图颜色
 *     hoverColor:0xff9933,//鼠标移入颜色
 *     lineColor:0xffffff, //线颜色
 *     opacity:1,          //地图透明度
 *     hasPhong:true,      //是否反光材质
 *     shininess:50,       //反光材质光滑度
 *     hoverAnimaTime:100, //鼠标移入动画过渡时间
 *     loadEffect:false,      //区域加载效果
 *     hasHoverHeight:true,  //鼠标移入区域升高
 *  }
 *  // 创建一个区域
 *  let area = new Area(opt);
 *  // map 初始化以后可以获取
 *  let area = map.areaGroup.getObjectByName('北京')
 */
var Area =
/*#__PURE__*/
function (_THREE$Object3D) {
  _inherits(Area, _THREE$Object3D);
  /**
   * 构造函数
   * @param pros
   */
  function Area(pros) {
    var _this;
    _classCallCheck(this, Area);
    //调用实现父类的构造函数
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Area).call(this, pros));
    _this.type = "Area";
    _this.name = pros.name;
    Object.assign(_this.userData, pros);
    var coords = pros.coords;
    _this._mesh = _this.getMesh(coords, pros);
    _this._line = _this.getLine(coords, pros);
    _this.add(_this._mesh);
    _this.add(_this._line); // 文字添加 待完善
    // let tg=new THREE.Group();
    // tg.name=this.name+'_text';
    // tg.position.z=0.01;
    // this._text = Font3D.create(this.name,{size:30,color:'#333333'});
    // this._text.position.z=2.01;
    // tg.add(this._text)
    // this.add(tg);
    if (pros.loadEffect) {
      _this.setPosition({
        x: 0,
        y: -40,
        z: -1000
      });
      _this.setPosition({
        x: 0,
        y: 0,
        z: 0
      }, 500, Area.count * 10, TWEEN.Easing.Quartic.Out);
    }
    Area.count++;
    return _this;
  }
  /**
   * 创建立体块
   * @param {array} coords -  坐标经纬度，如：[112,22]
   * @param {object} pros - 区域初始化属性
   * @returns {*}
   * @protected
   */
  _createClass(Area, [{
    key: "getMesh",
    value: function getMesh(coords, pros) {
      var _this2 = this;
      if (!coords) return;
      try {
        var geo = new Geometry();
        coords.forEach(function (coord) {
          var pts = _this2.getGeoPoints(coord);
          var g = _this2.getExtrudeGeometry(pts);
          geo.merge(g, g.matrix);
        });
        return this.getGeoMesh(geo, pros);
      } catch (e) {
        console.warn("Area.getMesh:" + e.message);
      }
    }
    /**
     * 创建块的边缘线
     * @param {array} coords -  坐标经纬度，如：[112,22]
     * @param {object} pros - 区域初始化属性
     * @returns {THREE.Group}
     */
  }, {
    key: "getLine",
    value: function getLine(coords, pros) {
      var _this3 = this;
      if (!coords) return; //mate
      var material = new LineBasicMaterial({
        opacity: 1.0,
        linewidth: 2,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        color: this.userData.lineColor
      }); //geo
      var lines = new Group();
      coords.forEach(function (coord) {
        var pts = _this3.getGeoPoints(coord);
        var line = new Geometry();
        for (var i = 0, l = pts.length; i < l; i++) {
          line.vertices.push(new Vector3(pts[i].x, pts[i].y, _this3.userData.extrude.amount + _this3.userData.extrude.amount / 100));
        }
        var lineMesh = new Line(line, material);
        lines.add(lineMesh);
      });
      return lines;
    }
    /**
     * 得到顶点数据
     * @param coord
     * @returns {Array}
     * @protected
     */
  }, {
    key: "getGeoPoints",
    value: function getGeoPoints(coord) {
      try {
        var pts = [];
        for (var i = 0, l = coord.length; i < l; i++) {
          pts.push(new Vector2(coord[i][0], coord[i][1]));
        }
        return pts;
      } catch (e) {
        console.log('getGeoPoints:parse coord error:' + JSON.stringify(coord));
      }
    }
    /**
     * 拉伸块高度
     * @param {array} pts - 顶点数组
     * @returns {THREE.ExtrudeGeometry}
     * @protected
     */
  }, {
    key: "getExtrudeGeometry",
    value: function getExtrudeGeometry(pts) {
      var shape = new Shape(pts);
      var extrude = Object.assign({}, this.userData.extrude);
      var geo = new ExtrudeGeometry(shape, extrude);
      return geo;
    }
    /**
     * 拉伸块高度
     * @param geo
     * @param pros
     * @returns {*}
     */
  }, {
    key: "getGeoMesh",
    value: function getGeoMesh(geo, pros) {
      var mateOption = {};
      mateOption.color = pros.color != null ? colorToHex(pros.color) : Math.random() * 0xffffff;
      mateOption.shininess = pros.shininess || 100;
      mateOption.transparent = true;
      mateOption.opacity = typeof pros.opacity === 'undefined' ? this.userData.opacity : pros.opacity;
      geo.computeFlatVertexNormals();
      var geoMesh = null; //   var shader = {
      //     uniforms:
      //     {
      //         glowColor: { type: "c", value: new THREE.Color(mateOption.color) },
      //         iTime: { type: "f", value: 1.0}
      //     },
      //     vertexShader: [
      //         "varying vec2 vUv;",
      //         "void main() {",
      //         "vUv = uv;",
      //         "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
      //         "}"
      //     ].join("\n"),
      //     fragmentShader: [
      //         "uniform vec3 glowColor;",
      //         "uniform float iTime;",
      //         "varying vec2 vUv;",
      //         "float t=iTime;",
      //         "vec3 col;",
      //         "void main() {",
      //         "col = 0.5 + 0.1 * sqrt(sin(iTime * dot(vUv,vUv) /glowColor));",
      //         "gl_FragColor = vec4(1.0,col);",
      //         "}"
      //     ].join("\n")
      // }
      // var customMaterial = new THREE.ShaderMaterial({
      //     uniforms: shader.uniforms,
      //     vertexShader: shader.vertexShader,
      //     fragmentShader: shader.fragmentShader,
      //     side: THREE.FrontSide,
      //     blending: THREE.AdditiveBlending,
      //     transparent: true
      // })
      this.update = function () {//shader.uniforms.iTime.value += 0.05;
      };
      if (this.userData.hasPhong) geoMesh = new Mesh(geo, new MeshPhongMaterial(mateOption));else geoMesh = new Mesh(geo, new MeshLambertMaterial(mateOption)); //var geoMesh = THREE.SceneUtils.createMultiMaterialObject(geo,[new THREE.MeshPhongMaterial(mateOption),new THREE.MeshBasicMaterial({wireframe:true,color:0xffffff,transparent:true,opacity:0.35})])
      return geoMesh;
    }
    /**
     * Area的网格对象
     * @returns {HTREE.Mesh}
     */
  }, {
    key: "setColor",
    /**
     * 设置区域颜色
     * @param {color} color - 格式 0xff9933,'#ff9933','rgb(255,160,50)','hsl(340,100%,50%)'
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     */
    value: function setColor(color, time, delay, easing, callback) {
      this.userData.color = colorToHex(color);
      if (time && typeof time === 'number') {
        color = new Color(colorToHex(color));
        transition(this.mesh.material.color, color, time, delay, easing, callback);
      } else {
        this.mesh.material.color.set(colorToHex(color));
      }
    }
    /**
     * 设置区域位置
     * @param {v3} v3 - 格式{x:0,y:0,z:0}
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     */
  }, {
    key: "setPosition",
    value: function setPosition(v3, time, delay, easing, callback) {
      if (time && typeof time === 'number') transition(this.position, v3, time, delay, easing, callback);else this.position.set(v3.x, v3.y, v3.z);
    }
    /**
     * 设置区域旋转
     * @param {v3} v3 - 格式{x:0,y:0,z:0}
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     */
  }, {
    key: "setRotation",
    value: function setRotation(v3, time, delay, easing, callback) {
      v3.x = v3.x * (Math.PI / 180);
      v3.y = v3.y * (Math.PI / 180);
      v3.z = v3.z * (Math.PI / 180);
      transition(this.rotation, v3, time, delay, easing, callback);
    }
    /**
     * 设置区域大小
     * @param {v3} v3 - 格式{x:0,y:0,z:0}
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     */
  }, {
    key: "setScale",
    value: function setScale(v3, time, delay, easingcallback) {
      if (time && typeof time === 'number') transition(this.scale, v3, time, delay, easing, callback);else this.scale.set(v3.x, v3.y, v3.z);
    }
    /**
     * 鼠标移出事件
     * @param dispatcher
     * @param event
     * @example
     *
     * map.addEventListener('mouseout', (event) => {
       *    let obj = event.target;
       *    console.log(obj.type+':out')
       *  });
     */
  }, {
    key: "onmouseout",
    value: function onmouseout(dispatcher, event) {
      if (this.userData.hasHoverHeight) new TWEEN.Tween(this.position).to({
        z: 0
      }, this.userData.hoverAnimaTime) //.easing(TWEEN.Easing.Quartic.Out)
      .start();
      new TWEEN.Tween(this.mesh.material.color).to(new Color(colorToHex(this.userData.color)), this.userData.hoverAnimaTime) //.easing(TWEEN.Easing.Quartic.Out)
      .start();
      dispatcher.dispatchEvent({
        type: 'mouseout',
        target: this,
        orgEvent: event
      });
    }
    /**
     * 鼠标移入事件
     * @param dispatcher
     * @param event
     * @example
     *
     * map.addEventListener('mouseover', (event) => {
       *    let obj = event.target;
       *    console.log(obj.type+':over')
       *  });
     */
  }, {
    key: "onmouseover",
    value: function onmouseover(dispatcher, event) {
      //区域移入高度
      //this.selectedArea.position.z=1;
      if (this.userData.hasHoverHeight) new TWEEN.Tween(this.position).to({
        z: this.userData.extrude.amount / 2
      }, this.userData.hoverAnimaTime) //.easing(TWEEN.Easing.Quartic.Out)
      .start(); //区域移入颜色
      new TWEEN.Tween(this.mesh.material.color).to(new Color(colorToHex(this.userData.hoverColor)), this.userData.hoverAnimaTime) //.easing(TWEEN.Easing.Quartic.Out)
      .start();
      dispatcher.dispatchEvent({
        type: 'mouseover',
        target: this,
        orgEvent: event
      });
    }
    /**
     * 鼠标单击事件
     * @param dispatcher
     * @param event
     * @example
     *
     * map.addEventListener('mousedown', (event) => {
       *    let obj = event.target;
       *    console.log(obj.type+':click')
       *  });
     */
  }, {
    key: "onmousedown",
    value: function onmousedown(dispatcher, event) {
      dispatcher.dispatchEvent({
        type: 'mousedown',
        target: this,
        orgEvent: event
      });
    }
  }, {
    key: "mesh",
    get: function get() {
      return this._mesh;
    }
    /**
     * Area的边缘线对象
     * @returns {THREE.Group}
     */
  }, {
    key: "line",
    get: function get() {
      return this._line;
    }
  }]);
  return Area;
}(Object3D);
/**
 * 区域数量
 * @static
 * @type {number}
 */
Area.count = 0;

/**
 * 数据范围
 * @class
 * @extends THREE.Mesh
 */
var DataRange =
/*#__PURE__*/
function (_THREE$Object3D) {
  _inherits(DataRange, _THREE$Object3D);
  function DataRange(pros) {
    var _this;
    _classCallCheck(this, DataRange);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataRange).call(this, pros));
    _this.type = "DataRange";
    _this.name = pros.name;
    Object.assign(_this.userData, pros);
    var boxGeo = new BoxGeometry(pros.width, pros.height, pros.extrudeHeight);
    var boxMate = new MeshPhongMaterial({
      color: pros.color
    });
    var range = new Mesh(boxGeo, boxMate);
    _this.position.y = _this.position.y - DataRange.count * (pros.height + pros.spacing);
    if (pros.showName) {
      var txt = Font3D.create(pros.name, {
        color: '#ffffff'
      });
      txt.position.copy(range.position);
      txt.position.y = txt.position.y - 0.3;
      txt.position.add(pros.namePosition);
      _this.add(txt);
      _this.txt = txt;
    }
    _this.mesh = range;
    _this.add(range);
    DataRange.count++;
    return _this;
  }
  /**
   * 选中并返回其关联区域
   * @returns {Area[]}
   */
  _createClass(DataRange, [{
    key: "select",
    value: function select() {
      var _this2 = this;
      return this.rangeAreas.map(function (area) {
        area.setColor(_this2.userData.hoverColor);
        if (area.userData.hasHoverHeight) {
          new TWEEN.Tween(area.position).to({
            z: area.userData.extrude.amount / 2
          }, area.userData.hoverAnimaTime).start();
        }
      });
    }
    /**
     * 取消选中状态
     */
  }, {
    key: "unselect",
    value: function unselect() {
      var _this3 = this;
      this.rangeAreas.map(function (area) {
        area.setColor(_this3.userData.color);
        if (area.userData.hasHoverHeight) {
          new TWEEN.Tween(area.position).to({
            z: 0
          }, area.userData.hoverAnimaTime).start();
        }
      });
    }
  }, {
    key: "onmouseout",
    value: function onmouseout(dispatcher, event) {
      this.unselect();
      new TWEEN.Tween(this.mesh.material.color).to(new Color(colorToHex(this.userData.color)), this.userData.hoverAnimaTime).start();
      if (!this.userData.hasEvent) return;
      dispatcher.dispatchEvent({
        type: 'mouseout',
        target: this,
        orgEvent: event
      });
    }
  }, {
    key: "onmouseover",
    value: function onmouseover(dispatcher, event) {
      this.select();
      new TWEEN.Tween(this.mesh.material.color).to(new Color(colorToHex(this.userData.hoverColor)), this.userData.hoverAnimaTime).start();
      if (!this.userData.hasEvent) return;
      dispatcher.dispatchEvent({
        type: 'mouseover',
        target: this,
        orgEvent: event
      });
    }
  }, {
    key: "onmousedown",
    value: function onmousedown(dispatcher, event) {
      if (!this.userData.hasEvent) return;
      dispatcher.dispatchEvent({
        type: 'mousedown',
        target: this,
        orgEvent: event
      });
    }
  }]);
  return DataRange;
}(Object3D);
/**
 * 数据范围数量
 * @static
 * @type {number}
 */
DataRange.count = 0;

/**
 * 地图标注,继承{@link https://threejs.org/docs/#api/objects/Sprite|THREE.Sprite}
 * @class
 * @extends THREE.Sprite
 * @example
 *
 * let opt={
 *  name:'台风-依安',
 *  coord:[116,23],
 *  color:0xff0000,
 *  size:4,
 *  value:2,
 *  userAttrA:'A'
 * }
 * let mark = new Mark(opt);
 * console.log(mark.userData.value +  mark.userData.userAttrA)  //'2A'
 */
var Mark =
/*#__PURE__*/
function (_THREE$Sprite) {
  _inherits(Mark, _THREE$Sprite);
  _createClass(Mark, null, [{
    key: "draw",
    /**
     * 光点纹理样式,如果你对canvas熟悉可以重写.否则使用默认样式
     * @static
     * @param {context} context - Canvas上下文对象 {@link https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext|Canvas.context}
     * @example
     *
     * Mark.draw=(ctx)=>{
       *  context.clearRect(0, 0, 128, 128);
       *  context.fillStyle = '#ff0000';
       *  context.arc(64, 64, 20, 0, Math.PI * 2, false);
       *  context.fill();
       * }
     */
    value: function draw(context, v) {
      v = v || 1;
      context.clearRect(0, 0, 128, 128);
      context.fillStyle = '#ffffff';
      context.arc(64, 64, 20, 0, Math.PI * 2, false);
      context.fill();
      context.fillStyle = 'rgba(255,255,255,.5)';
      context.arc(64, 64, 60 * v, 0, Math.PI * 2, false);
      context.fill(); // context.fillStyle = 'rgba(0,0,0,.5)';
      // context.rect(0, 0, 128, 128, Math.PI * 2, false);
      // context.fill();
    }
    /**
     * 创建一个标注
     * @param {Object} pros - The mark options | 标注的配置
     * @param {string} [pros.name=''] - mark name | 标注名称
     * @param {array} pros.coord - mark coord | 标注坐标,如:[112,33]
     * @param {string} [pros.color=0xffffff] - mark color | 标注颜色
     * @param {string} [pros.hoverColor=0xff9933] - mark hoverColor | 标注的鼠标移入颜色
     * @param {number} [pros.hoverAnimaTime=300] - mark hover Animate time | 鼠标移入动画过渡时间
     * @param {string} [pros.value=''] - mark value | 标注值
     * @param {*} [pros.*] - User extended attributes | 用户扩展属性
     *
     */
  }, {
    key: "texture",
    /**
     * 光点纹理样式,返回一个纹理 {@link https://threejs.org/docs/#api/textures/Texture|THREE.Texture}
     * @returns {THREE.Texture}
     * @example
     * Mark.texture()
     */
    get: function get() {
      if (!Mark._texture) {
        var canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;
        var context = canvas.getContext('2d');
        Mark.draw(context);
        var texture = new Texture(canvas);
        texture.needsUpdate = true;
        Mark._texture = texture;
      }
      return Mark._texture;
    }
  }]);
  function Mark(pros) {
    var _this;
    _classCallCheck(this, Mark);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mark).call(this));
    _this.material = new SpriteMaterial({
      map: Mark.texture,
      color: pros.color,
      blending: AdditiveBlending
    });
    _this.type = "Mark";
    _this.name = pros.name;
    Object.assign(_this.userData, pros);
    var size = pros.size || _this.userData.min;
    size = size < _this.userData.min ? _this.userData.min : size;
    size = size > _this.userData.max ? _this.userData.max : size;
    _this.userData.size = size;
    _this.scale.set(size, size, 1); //console.log(size);
    _this.position.x = pros.coord[0];
    _this.position.y = pros.coord[1];
    _this.position.z = 2 + size * 35 / 100;
    _this.update = function () {
      // let context = this.material.map.image.getContext('2d');
      // Mark.draw(context,size);
      // this.material.map.needsUpdate = true;
      // let geometry = this.geometry;
      // let attributes = geometry.attributes;
      // for ( let i = 0; i < attributes.size.array.length; i++ ) {
      //   attributes.size.array[ i ] = size + size * Math.sin( 0.1 * i + time );
      // }
      // attributes.size.needsUpdate = true;
    };
    Mark.count++;
    return _this;
  }
  /**
   * 设置标注颜色
   * @param {color} color - 颜色格式0xff9933,'#ff9933','rgb(255,255,255)','hsl(100,100%,50%)'
   * @param {number} [time] - 动画完成时间,与transition时间类似
   * @param {number} [delay=0] - 动画延迟时间
   * @param {Tween.Easing} [easing=line] -动画类型
   * @param {callback} [callback] - 动画完成后回调
   * @example
   *  map.addEventListener('mouseover', (event) => {
     *    let obj = event.target;
     *    if(obj.type==='Mark')
     *    {
     *      obj.setColor('#ff5555',100);// 鼠标移入设置为红色
     *    }
     *  });
   */
  _createClass(Mark, [{
    key: "setColor",
    value: function setColor(color, time, delay, easing, callback) {
      this.userData.color = colorToHex(color);
      if (time && typeof time === 'number') {
        color = new Color(colorToHex(color));
        transition(this.material.color, color, time, delay, easing, callback);
      } else {
        this.material.color.set(colorToHex(color));
      }
    }
    /**
     * 设置标注位置
     * @param {v3} v3 - 格式{x:11,y:33,z:2}
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     * @example
     *
     * map.addEventListener('mouseover', (event) => {
       *     let obj = event.target;
       *     if(obj.type==='Mark')
       *     {
       *       obj.setPosition({x:0,y:0,z:4},300) //标注升高
       *     }
       *   });
     *
     */
  }, {
    key: "setPosition",
    value: function setPosition(v3, time, delay, easing, callback) {
      if (time && typeof time === 'number') transition(this.position, v3, time, delay, easing, callback);else this.position.set(v3.x, v3.y, v3.z);
    }
    /**
     * 设置标注旋转
     * @param {v3} v3 - 格式{x:11,y:33,z:2}
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     */
  }, {
    key: "setRotation",
    value: function setRotation(v3, time, delay, easing, callback) {
      v3.x = v3.x * (Math.PI / 180);
      v3.y = v3.y * (Math.PI / 180);
      v3.z = v3.z * (Math.PI / 180);
      transition(this.rotation, v3, time, delay, easing, callback);
    }
    /**
     * 设置标注大小
     * @param {v3} v3 - 格式{x:11,y:33,z:2}
     * @param {number} [time] - 动画完成时间,与transition时间类似
     * @param {number} [delay=0] - 动画延迟时间
     * @param {Tween.Easing} [easing=line] -动画类型
     * @param {callback} [callback] - 动画完成后回调
     */
  }, {
    key: "setScale",
    value: function setScale(v3, time, delay, easing, callback) {
      if (time && typeof time === 'number') transition(this.scale, v3, time, delay, easing, callback);else this.scale.set(v3.x, v3.y, v3.z);
    }
    /* 事件 */
  }, {
    key: "onmouseout",
    value: function onmouseout(dispatcher, event) {
      var size = this.userData.size * 1;
      new TWEEN.Tween(this.scale).to({
        x: size,
        y: size
      }, this.userData.hoverAnimaTime).start();
      new TWEEN.Tween(this.material.color).to(new Color(colorToHex(this.userData.color)), this.userData.hoverAnimaTime).start();
      dispatcher.dispatchEvent({
        type: 'mouseout',
        target: this,
        orgEvent: event
      });
    }
  }, {
    key: "onmouseover",
    value: function onmouseover(dispatcher, event) {
      var size = this.userData.size * 1.5;
      new TWEEN.Tween(this.scale).to({
        x: size,
        y: size
      }, this.userData.hoverAnimaTime).start(); //区域移入颜色
      new TWEEN.Tween(this.material.color).to(new Color(colorToHex(this.userData.hoverColor)), this.userData.hoverAnimaTime).start();
      dispatcher.dispatchEvent({
        type: 'mouseover',
        target: this,
        orgEvent: event
      });
    }
  }, {
    key: "onmousedown",
    value: function onmousedown(dispatcher, event) {
      dispatcher.dispatchEvent({
        type: 'mousedown',
        target: this,
        orgEvent: event
      });
    }
  }]);
  return Mark;
}(Sprite);
/**
 * 所有标注数量,静态属性
 * @type {number}
 * @example
 * //查看地图所有标注数
 * console.log(Mark.count);
 */
Mark.count = 0;
Mark._texture = null;

/**
 * Webgl Shader Library for three.js
 *
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */
/**
 * 线条着色器,color,texure需要指定，流动效果请参考update实现
 * @type {{vertexShader: string, fragmentShader: string}}
 */
var ShaderLib$1 = {};
ShaderLib$1.line = {
  uniforms: {
    amplitude: {
      value: 1.0
    },
    color: {
      value: 0xffffff
    },
    texture: {
      value: null
    }
  },
  vertexShader: ["uniform float amplitude;", "attribute float size;", "attribute vec3 customColor;", "varying vec3 vColor;", "void main() {", "vColor = customColor;", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "gl_PointSize = size;", "gl_Position = projectionMatrix * mvPosition;", "}"].join("\n"),
  fragmentShader: ["uniform vec3 color;", "uniform sampler2D texture;", "varying vec3 vColor;", "void main() {", "gl_FragColor = vec4( color * vColor, 1.0 );", "gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );", "}"].join("\n")
  /**
   * 物体内边缘发光
   */
};
ShaderLib$1.edgelight = {
  uniforms: {
    "s": {
      type: "f",
      value: -1.0
    },
    "b": {
      type: "f",
      value: 1.0
    },
    "p": {
      type: "f",
      value: 2.0
    },
    glowColor: {
      type: "c",
      value: new Color(0x00ffff)
    }
  },
  vertexShader: ["varying vec3 vNormal;", "varying vec3 vPositionNormal;", "void main() {", "vNormal = normalize( normalMatrix * normal ); ", // 转换到视图空间
  "vPositionNormal = normalize(( modelViewMatrix * vec4(position, 1.0) ).xyz);", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
  fragmentShader: ["uniform vec3 glowColor;", "uniform float p;", "uniform float b;", "uniform float s;", "varying vec3 vNormal;", "varying vec3 vPositionNormal;", "void main() ", "{", "  float a = pow( b + s * abs(dot(vNormal, vPositionNormal)), p );", "  gl_FragColor = vec4( glowColor, a );", "}"].join("\n")
  /**
   * 创建着色器材质，根据shader
   * @param {shader} shader  shader in three.ShaderlibExp
   * @param {*} side default THREE.FrontSide
   * @param {*} blending default THREE.AdditiveBlending
   */
};
ShaderLib$1.createShaderMaterial = function (shader, side, blending) {
  var customMaterial = new ShaderMaterial({
    uniforms: shader.uniforms,
    vertexShader: shader.vertexShader,
    fragmentShader: shader.fragmentShader,
    side: side || FrontSide,
    blending: blending || AdditiveBlending,
    transparent: true
  });
  return customMaterial;
}; // THREE.ShaderLib = ShaderLib

/** Class representing a Line.
 * @extends THREE.Line
 *
 * @example
 * var opt={
 *   color:0x55eeff,                 // 基线颜色
 *   hoverColor:0xff9933,            // 线的鼠标移入基线颜色
 *   spaceHeight:5,                  // 曲线空间高度
 *   hasHalo:true,                   // 是否有发光线
 *   hasHaloAnimate:true,            // 是否开启发光线动画效果
 *   haloDensity:2,                  // 光点密度 值越大 越浓密，越消耗性能
 *   haloRunRate:0.01,               // 光点运动频率
 *   haloColor:0xffffff,             // 发光线颜色，默认继承color
 *   haloSize:10,                    // 发光线粗细
 * }
 * let line = new Line(opt);
 * */
var Line$1 =
/*#__PURE__*/
function (_THREE$Line) {
  _inherits(Line$$1, _THREE$Line);
  _createClass(Line$$1, null, [{
    key: "draw",
    /**
     * 光点纹理样式,如果你对canvas熟悉可以重写.否则使用默认样式
     * @static
     * @param {context} context - Canvas上下文对象 {@link https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext|Canvas.context}
     * @example
     *
     * Line.draw=(ctx)=>{
       *  context.clearRect(0, 0, 128, 128);
       *  context.fillStyle = '#ff0000';
       *  context.arc(64, 64, 20, 0, Math.PI * 2, false);
       *  context.fill();
       * }
     */
    value: function draw(context) {
      context.clearRect(0, 0, 128, 128);
      context.fillStyle = '#ffffff';
      context.arc(64, 64, 20, 0, Math.PI * 2, false);
      context.fill();
      context.fillStyle = 'rgba(255,255,255,.7)';
      context.arc(64, 64, 60, 0, Math.PI * 2, false);
      context.fill();
    }
    /**
     * 创建一条线
     * @param {Object} pros - The Line options | 线的配置
     * @param {string} pros.color - Line base color | 基线颜色
     * @param {string} pros.hoverColor - Line base hoverColor | 线的鼠标移入基线颜色
     * @param {number} pros.spaceHeight - Line space height | 曲线空间高度
     * @param {boolean} pros.hasHalo - Has light emitting line| 是否有发光线
     * @param {boolean} pros.hasHaloAnimate - Has light emitting line Animate| 是否有发光线动画效果
     * @param {number} pros.haloDensity - Spot density becomes more dense, more consumption performance | 光点密度 值越大 越浓密，越消耗性能
     * @param {number} pros.haloRunRate - Light point motion frequency | 光点运动频率
     * @param {color} pros.haloColor - Halo line color, default inheritance of color | 发光线颜色，默认继承color
     * @param {number} pros.haloSize - Halo line color width | 发光线粗细
     */
  }, {
    key: "texture",
    /**
     * 光点纹理样式,返回一个纹理 {@link https://threejs.org/docs/#api/textures/Texture|THREE.Texture}
     * @returns {THREE.Texture}
     * @example
     * Line.texture()
     */
    get: function get() {
      if (!Line$$1._texture) {
        var canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 128;
        var context = canvas.getContext('2d');
        Line$$1.draw(context);
        var texture = new Texture(canvas);
        texture.needsUpdate = true;
        Line$$1._texture = texture;
      }
      return Line$$1._texture;
    }
  }]);
  function Line$$1(pros) {
    var _this;
    _classCallCheck(this, Line$$1);
    // pros:
    // {
    //   color:0x55eeff,                 // 基线颜色
    //   hoverColor:0xff9933,            // 线的鼠标移入基线颜色
    //   spaceHeight:5,                  // 曲线空间高度
    //   hasHalo:true,                   // 是否有发光线
    //   hasHaloAnimate:true,            // 是否开启发光线动画效果
    //   haloDensity:2,                  // 光点密度 值越大 越浓密，越消耗性能
    //   haloRunRate:0.01,               // 光点运动频率
    //   haloColor:0xffffff,             // 发光线颜色，默认继承color
    //   haloSize:10,                    // 发光线粗细
    // }
    var fromCoord = pros.coords[0];
    var toCoord = pros.coords[1];
    var x1 = fromCoord[0];
    var y1 = fromCoord[1];
    var x2 = toCoord[0];
    var y2 = toCoord[1];
    var xdiff = x2 - x1;
    var ydiff = y2 - y1;
    var dif = Math.pow(xdiff * xdiff + ydiff * ydiff, 0.5); //二点间距离
    var v3s = [new Vector3(x1, y1, pros.extrudeHeight), new Vector3((x1 + x2) / 2, (y1 + y2) / 2, pros.extrudeHeight + pros.spaceHeight), new Vector3(x2, y2, pros.extrudeHeight)]; //画弧线
    var curve = _construct(QuadraticBezierCurve3, v3s);
    var geometry = new Geometry();
    var amount = (dif + 0.1) * pros.haloDensity;
    if (amount < 30) amount = 30;
    geometry.vertices = curve.getPoints(amount).reverse();
    geometry.vertices.forEach(function () {
      geometry.colors.push(new Color(0xffffff));
    });
    var material = new LineBasicMaterial({
      color: pros.color,
      opacity: 1.0,
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      linewidth: 1
    });
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Line$$1).call(this, geometry, material));
    Object.assign(_this.userData, pros); //线条光晕效果
    if (pros.hasHalo) {
      _this.initHalo(geometry);
    } //当前线条索引
    _this.index = Line$$1.count++;
    Line$$1.array.push(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * 初始化发光线
   * @param {THREE.Geometry} geometry - 通过线条几何体初始化发光线 {@link https://threejs.org/docs/#api/core/Geometry|THREE.Geometry}
   * @protected
   */
  _createClass(Line$$1, [{
    key: "initHalo",
    value: function initHalo(geometry) {
      var line = this;
      var amount = geometry.vertices.length;
      var positions = new Float32Array(amount * 3);
      var colors = new Float32Array(amount * 3);
      var sizes = new Float32Array(amount);
      var vertex = new Vector3();
      var color = new Color(colorToHex(this.userData.color));
      for (var i = 0; i < amount; i++) {
        vertex.x = geometry.vertices[i].x;
        vertex.y = geometry.vertices[i].y;
        vertex.z = geometry.vertices[i].z;
        vertex.toArray(positions, i * 3); // if ( vertex.x < 0 ) {
        //   color.setHSL( 0.5 + 0.1 * ( i / amount ), 0.7, 0.5 );
        // } else {
        //   color.setHSL( 0.0 + 0.1 * ( i / amount ), 0.9, 0.5 );
        // }
        color.toArray(colors, i * 3);
        sizes[i] = line.userData.haloSize;
      } //positions = geometry.vertices;
      var psBufferGeometry = new BufferGeometry();
      psBufferGeometry.addAttribute('position', new BufferAttribute(positions, 3));
      psBufferGeometry.addAttribute('customColor', new BufferAttribute(colors, 3));
      psBufferGeometry.addAttribute('size', new BufferAttribute(sizes, 1));
      var shader = ShaderLib.line;
      shader.uniforms = {
        amplitude: {
          value: 1.0
        },
        color: {
          value: new Color(colorToHex(this.userData.haloColor))
        },
        texture: {
          value: Line$$1.texture
        }
      };
      var shaderMaterial = new ShaderMaterial({
        uniforms: shader.uniforms,
        vertexShader: shader.vertexShader,
        fragmentShader: shader.fragmentShader,
        blending: AdditiveBlending,
        depthTest: true,
        depthWrite: false,
        transparent: true // sizeAttenuation: true,
      }); //线条光晕
      var halo = new Points(psBufferGeometry, shaderMaterial);
      halo.dynamic = true;
      this.add(halo);
      this.halo = halo;
      halo.update = function () {
        if (!line.userData.hasHalo || !line.userData.hasHaloAnimate) return;
        var time = Date.now() * 0.005 + line.index * 3;
        var geometry = this.geometry;
        var attributes = geometry.attributes;
        for (var _i = 0; _i < attributes.size.array.length; _i++) {
          attributes.size.array[_i] = line.userData.haloSize + line.userData.haloSize * Math.sin(line.userData.haloRunRate * _i + time);
        }
        attributes.size.needsUpdate = true;
      };
    }
    /**
     * 发光线的动画更新方法
     * @private
     */
  }, {
    key: "update",
    value: function update() {
      //if(!this.userData.hasHalo || !this.userData.hasHaloAnimate)
      this.halo.update();
    }
    /**
     * 修改线颜色
     * @param {color} color - 线条颜色
     * @example
     *
     * line.setColor(0xff0000);
     * line.setColor('hsl(240,100%,50%)');
     * line.setColor('rgb(255,255,0)');
     */
  }, {
    key: "setColor",
    value: function setColor(color, haloColor) {
      //基线
      if (typeof color !== 'undefined') this.material.color = new Color(colorToHex(color)); // //光线
      // if(typeof haloColor!=='undefined' && this.userData.hasHalo )
      // {
      //   let color = new THREE.Color($.colorToHex(haloColor));
      //   let colors=this.halo.geometry.attributes.customColor;
      //   for ( let i = 0; i < colors.array.length; i+=3 ) {
      //     colors.array[ i ] = color.r;
      //     colors.array[ i + 1] = color.g;
      //     colors.array[ i + 2] = color.b;
      //   }
      //   this.halo.geometry.attributes.customColor.needsUpdate = true;
      // }
    }
    /**
     * 设置发光线宽度,基线永远是1
     * @param {number} size - 发光线粗细大小
     */
  }, {
    key: "setLineWidth",
    value: function setLineWidth(size) {
      if (!this.userData.hasHalo) {
        console.warn('Setting the LineWidth must be hasHalo:true');
      } //粗细
      this.userData.haloSize = size;
    }
    /**
     * 线条鼠标移出事件
     *
     * @param dispatcher
     * @param event
     * @protected
     * @example
     *  // 注册事件
     *  map.addEventListener('mouseout', (event) => {
       *        let obj = event.target;
       *
       *        if(obj.type==='Line')
       *        {
       *           // 这里做鼠标移出操作
       *        }
       *      });
     */
  }, {
    key: "onmouseout",
    value: function onmouseout(dispatcher, event) {
      if (this.userData.hoverExclusive) {
        //所有线条回复初始
        Line$$1.array.map(function (line) {
          if (line.halo) {
            line.halo.visible = true;
          }
          line.setColor(line.userData.color);
        });
      } //选中线条
      if (this.userData.hasHalo) {
        //粗细
        var size = this.userData.haloSize / 1.5;
        this.userData.haloSize = size;
      } //颜色
      this.setColor(this.userData.color);
      dispatcher.dispatchEvent({
        type: 'mouseout',
        target: this,
        orgEvent: event
      });
    }
    /**
     * 线条鼠标移入事件
     * @param dispatcher
     * @param event
     * @protected
     * @example
     *  // 注册事件
     *  map.addEventListener('mouseover', (event) => {
       *        let obj = event.target;
       *
       *        if(obj.type==='Line')
       *        {
       *           // 这里做鼠标移入操作
       *        }
       *      });
     */
  }, {
    key: "onmouseover",
    value: function onmouseover(dispatcher, event) {
      var _this2 = this;
      if (this.userData.hoverExclusive) {
        Line$$1.array.map(function (line) {
          if (line.halo) {
            line.halo.visible = false;
          }
          line.setColor(_this2.userData.decayColor);
        });
      } //选中线条
      if (this.userData.hasHalo) {
        //修改光点线 大小
        var size = this.userData.haloSize * 1.5;
        this.userData.haloSize = size;
        this.halo.visible = true;
      } //颜色
      this.setColor(this.userData.hoverColor ? this.userData.hoverColor : this.userData.color);
      dispatcher.dispatchEvent({
        type: 'mouseover',
        target: this,
        orgEvent: event
      });
    }
    /**
     * 线条鼠标单击事件
     * @param dispatcher
     * @param event
     * @protected
     * @example
     *  // 注册事件
     *  map.addEventListener('mousedown', (event) => {
       *        let obj = event.target;
       *
       *        if(obj.type==='Line')
       *        {
       *           // 这里做鼠标单击操作
       *        }
       *      });
     */
  }, {
    key: "onmousedown",
    value: function onmousedown(dispatcher, event) {
      dispatcher.dispatchEvent({
        type: 'mousedown',
        target: this,
        orgEvent: event
      });
    }
  }]);
  return Line$$1;
}(Line);
/**
 * 线条数量
 * @static
 * @type {number}
 */
Line$1.count = 0;
Line$1.array = [];
Line$1._texture = null;

/**
 * 地图立体参数设置
 * @type {{amount: number, bevelThickness: number, bevelSize: number, bevelEnabled: boolean, bevelSegments: number, curveSegments: number, steps: number}}
 */
var extrudeOption = {
  amount: 1,
  //厚度
  bevelThickness: 1,
  bevelSize: .2,
  bevelEnabled: false,
  bevelSegments: 5,
  curveSegments: 1,
  steps: 1
};
/**
 * 创建3D地图.
 * @class
 * @example
 * //配置默认值
 * let opt={
 *      name:'',                // 调试使用，window['name']为该实例对象，注意设置debugger:true启用
 *      el:document.body,       // 容器
 *      geoData:null,           // 地图geojson数据
 *      hasStats:true,          // 是否显示性能面板
 *      hasControls:true,       // 用户是否能控制视角
 *      autoRotate:false,       // 是否自动旋转视角
 *      ambientColor:0x333333,  // 环境光颜色
 *      directionalColor:0xffffff,// 平行光颜色
 *      hasLoadEffect:false,    // 是否有加载效果
 *      debugger:false,         // 调试模式
 *      cameraPosition:{x:0,y:0,z:40},// 相机位置
 *      visualMap:null,         // 直观图图例
 *      extrude:extrudeOption,  // 立体厚度参数
 *
 *      area:{
 *          data:[],            // 地图用户数据[{ name:'北京', value:, color:0xff3333 }...]
 *          // area参数默认值
 *          name:'',            // 区域名称
 *          color:0x3366ff,     // 地图颜色
 *          hoverColor:0xff9933,// 鼠标移入颜色
 *          lineColor:0xffffff, // 线颜色
 *          opacity:1,          // 地图透明度
 *          hasPhong:true,      // 是否反光材质
 *          shininess:50,       // 反光材质光滑度
 *          hoverAnimaTime:100, // 鼠标移入动画过渡时间
 *          loadEffect:false,   // 区域加载效果
 *          hasHoverHeight:true,// 鼠标移入区域升高
 *      },
 *
 *      mark:{
 *          data:[],            // 标注点数据[{ name:'XXX', coord:[11,22], value:13 }...]
 *          // mark参数默认值
 *          name:'',            // 标注名称
 *          color:0xffffff,     // 标注点颜色
 *          hoverColor:0xff9933,// 鼠标移入颜色
 *          hoverAnimaTime:100, // 鼠标移入动画过渡时间
 *          min:0.01,
 *          max:5,
 *      },
 *
 *      line:{
 *          data:[],                        //线数据[{ fromName:'', toName:'', coords:[toCoord, fromCoord] }...]
 *          // line参数默认值
 *          color:0x55eeff,                 // 颜色
 *          hoverColor:0xff9933,            // 鼠标移入颜色
 *          hoverExclusive:true,            // 鼠标移入排除其他线条
 *          hoverAnimaTime:100,             // 鼠标移入动画过渡时间
 *          spaceHeight:5,                  // 曲线空间高度
 *          hasHalo:true,                   // 是否开启光晕效果
 *          hasHaloAnimate:true,            // 是否开启光晕动画效果
 *          haloDensity:2,                  // 光点密度 值越大 越浓密，越消耗性能
 *          haloRunRate:0.01,               // 光点运动频率
 *          haloColor:0xffffff,             // 默认继承color颜色[不建议修改]
 *          haloSize:10,                    // 光晕大小
 *          decayColor:0x222222,            // 未激活线条颜色
 *      },
 *
 *      //内置对象
 *      mapObject:null,     // 地图对象
 *      areaGroup:null,     // 区域组
 *      lineGroup:null,     // 线条组
 *      markGroup:null,     // 标记组
 *      scene:null,         // 场景对象
 *      camera:null,        // 相机对象
 *      renderer:null,      // 渲染器对象
 *      stats:null,         // 性能对象
 *      controls:null,      // 控制器对象
 *      _w:0,               // 呈现宽度
 *      _h:0,               // 呈现高度
 *      __event:null,        // 事件对象
 *  }
 *
 * let map = new Map3D(opt);
 *
 * //事件注册
 *   map.addEventListener('mousedown', function (event) {
 *        let obj = event.target;
 *        if(obj.type==='Area') //type='Area|Line|Mark'
 *          obj.setColor('#ff6666', 500);
 *      });
 *
 *   map.addEventListener('mouseout', (event) => {
 *        let obj = event.target;
 *        console.log(obj.type+':out')
 *      });
 *
 *   map.addEventListener('mouseover', (event) => {
 *        let obj = event.target;
 *        console.log(obj.userData.name);
 *        //self.mapTitlePositon.left = $(window).scrollLeft() + event.clientX + 20 + 'px';
 *        //self.mapTitlePositon.top = $(window).scrollTop() + event.clientY + 20 + 'px';
 *      })
 *
 *   map.addEventListener('resize', function (event) {
 *        console.log('resize...');
 *      });
 */
var Map3D =
/*#__PURE__*/
function () {
  function Map3D(o) {
    _classCallCheck(this, Map3D);
    if (!Detector.webgl) {
      console.warn('不支持webgl,停止渲染.');
      return;
    }
    var opt = {
      name: '',
      //调试使用，window['name']为该实例对象，注意设置debugger:true启用
      el: document.body,
      //容器
      geoData: null,
      //地图geojson数据
      hasStats: true,
      //是否显示性能面板
      hasControls: true,
      //用户是否能控制视角
      autoRotate: false,
      //是否自动旋转视角
      ambientColor: 0x333333,
      //环境光颜色
      directionalColor: 0xffffff,
      //平行光颜色
      hasLoadEffect: false,
      //是否有加载效果
      debugger: false,
      //调试模式
      cameraPosition: {
        x: 0,
        y: 0,
        z: 40
      },
      //相机位置
      extrude: extrudeOption,
      //立体厚度参数
      area: {
        data: [],
        //地图用户数据[{name:'北京',value:,color:0xff3333}...]
        //area参数默认值
        name: '',
        // 区域名称
        color: 0x3366ff,
        //地图颜色
        hoverColor: 0xff9933,
        //鼠标移入颜色
        lineColor: 0xffffff,
        //线颜色
        opacity: 1,
        //地图透明度
        hasPhong: true,
        //是否反光材质
        shininess: 50,
        //反光材质光滑度
        hoverAnimaTime: 300,
        //鼠标移入动画过渡时间
        loadEffect: false,
        //区域加载效果
        hasHoverHeight: true //鼠标移入区域升高
      },
      dataRange: {
        data: [],
        width: 1,
        height: 0.7,
        position: {
          x: 23,
          y: -8,
          z: 1
        },
        spacing: 0.2,
        text: ['高', '低'],
        textColor: '#ffffff',
        showName: false,
        namePosition: {
          x: -2,
          y: 0,
          z: 0
        },
        hoverColor: 0xff9933,
        hoverAnimaTime: 100,
        hasHoverHeight: true,
        //鼠标移入区域升高
        hasEvent: true
      },
      mark: {
        data: [],
        //标注点数据[{name:'XXX',coord:[11,22],value:13}...]
        // mark参数默认值
        name: '',
        // 标注名称
        color: 0xffffff,
        //标注点颜色
        hoverColor: 0xff9933,
        //鼠标移入颜色
        hoverAnimaTime: 100,
        //鼠标移入动画过渡时间
        min: 0.01,
        max: 5
      },
      line: {
        data: [],
        //线数据[{fromName:'',toName:'',coords:[toCoord,fromCoord]}...]
        //line可继承参数
        color: 0x55eeff,
        hoverColor: 0xff9933,
        // 鼠标移入颜色
        hoverExclusive: true,
        // 鼠标移入排除其他线条
        hoverAnimaTime: 100,
        // 鼠标移入动画过渡时间
        spaceHeight: 5,
        // 曲线空间高度
        hasHalo: true,
        // 是否开启光晕效果
        hasHaloAnimate: true,
        // 是否开启光晕动画效果
        haloDensity: 2,
        // 光点密度 值越大 越浓密，越消耗性能
        haloRunRate: 0.01,
        // 光点运动频率
        haloColor: 0xffffff,
        // 默认继承color颜色[不建议修改]
        haloSize: 10,
        // 光晕大小
        decayColor: 0x222222 // 未激活线条颜色
      },
      //内置对象
      mapObject: null,
      //地图对象
      areaGroup: null,
      //区域组
      lineGroup: null,
      //线条组
      markGroup: null,
      //标记组
      scene: null,
      //场景对象-内部调用
      camera: null,
      //相机对象-内部调用
      renderer: null,
      //渲染器对象-内部调用
      stats: null,
      //性能对象-内部调用
      controls: null,
      //控制器对象-内部调用
      areaCount: 0,
      _w: 0,
      _h: 0,
      __event: null //事件对象
    };
    extend(true, opt, o);
    extend(true, this, opt);
    if (!this.geoData) {
      console.warn('Map3D no geoData.');
      return;
    }
    this._w = this.el.offsetWidth;
    this._h = this.el.offsetHeight;
    console.time('init');
    this.init();
    console.timeEnd('init');
    this.initEvent();
  }
  /**
   * 初始化方法
   */
  _createClass(Map3D, [{
    key: "init",
    value: function init() {
      this.el.innerHTML = '';
      this.scene = new Scene({
        antialias: true
      });
      this.camera = new PerspectiveCamera(70, this._w / this._h, 0.1, 1000);
      this.renderer = new WebGLRenderer({
        alpha: true
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.camera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z);
      this.camera.lookAt(this.scene.position);
      this.renderer.setSize(this._w, this._h); //场景雾化
      //this.scene.fog=new THREE.FogExp2(0xaaffff,0.005)
      this.scene.fog = new Fog(0xffffff, 0.15, 1000);
      this.scene.add(new AmbientLight(colorToHex(this.ambientColor)));
      this.dirLight = new DirectionalLight(colorToHex(this.directionalColor));
      this.dirLight.position.set(0, 50, 50);
      this.scene.add(this.dirLight);
      this.dirLightDown = new DirectionalLight(colorToHex(this.directionalColor));
      this.dirLightDown.position.set(0, -50, 0);
      this.scene.add(this.dirLightDown);
      this.spotLight = new SpotLight(colorToHex(this.color));
      this.spotLight.position.set(0, 150, 150);
      this.spotLight.intensity = 0.7;
      this.spotLight.target = this.scene;
      this.scene.add(this.spotLight); //创建地图区域添加到 mapObject
      this.mapObject = new Group();
      this.initControls();
      this.initDebug();
      console.time('initArea'); //初始化区域
      this.initArea();
      console.timeEnd('initArea');
      console.time('initMark'); //初始化标注点
      this.initMark();
      console.timeEnd('initMark');
      console.time('initLine'); //初始化线条
      this.initLine();
      console.timeEnd('initLine');
      console.time('inintDataRange'); //初始化数据等级范围
      this.inintDataRange();
      console.timeEnd('inintDataRange'); //根据数据中心位置偏移
      if (this.geoData.cp) {
        this.mapObject.position.set(-this.geoData.cp[0], -this.geoData.cp[1], 0);
      }
      this.scene.add(this.mapObject);
      this.scene.add(this.camera);
      this.el.appendChild(this.renderer.domElement);
      this.renderScene();
    }
    /**
     * 地图区域初始化方法
     * @param {json} areaOpt - 区域配置
     */
  }, {
    key: "initArea",
    value: function initArea(areaOpt) {
      var _this = this;
      Object.assign(this.area, areaOpt);
      Area.count = 0;
      if (this.areaGroup) {
        var _this$areaGroup;
        (_this$areaGroup = this.areaGroup).remove.apply(_this$areaGroup, _toConsumableArray(this.areaGroup.children));
      }
      this.areaGroup = new Group();
      this.geoData.features.forEach(function (item) {
        //地图属性 & 用户属性合并
        var itemUserData = _this.area.data.find(function (val) {
          return val.name === item.properties.name;
        });
        Object.assign(item.properties, itemUserData);
        _this.createArea(item);
      });
      this.mapObject.add(this.areaGroup);
    }
  }, {
    key: "inintDataRange",
    value: function inintDataRange(dataRangeOpt) {
      var _this2 = this;
      Object.assign(this.dataRange, dataRangeOpt); //继承map立体高度
      var dataRangeOptClone = Object.assign({
        extrudeHeight: this.extrude.amount / 2
      }, this.dataRange);
      delete dataRangeOptClone.data;
      if (this.dataRangeGroup) {
        var _this$dataRangeGroup;
        (_this$dataRangeGroup = this.dataRangeGroup).remove.apply(_this$dataRangeGroup, _toConsumableArray(this.dataRangeGroup.children));
      }
      DataRange.count = 0;
      this.dataRangeGroup = new Group();
      this.dataRange.data.forEach(function (userData) {
        var opt = Object.assign({}, dataRangeOptClone, userData); //数据范围创建
        var range = new DataRange(opt); //区域与范围关联
        range.rangeAreas = [];
        _this2.dataRangeGroup.add(range); //根据范围调整区域颜色显示
        var min = typeof userData.min === 'undefined' ? -999999999999 : userData.min;
        var max = typeof userData.max === 'undefined' ? 999999999999 : userData.max;
        var tempArea = null; //区域与范围关联
        _this2.area.data.forEach(function (area) {
          if (typeof area.value !== 'undefined') {
            if (min < area.value && area.value < max) {
              tempArea = _this2.getArea(area.name);
              if (tempArea) {
                range.rangeAreas.push(tempArea);
                tempArea.setColor(userData.color);
              }
            }
          }
        });
      }); //txt 设置
      if (this.dataRange.data.length > 0) {
        if (this.dataRange.text[0]) {
          var txt = Font3D$1.create(this.dataRange.text[0], {
            color: this.dataRange.textColor
          });
          txt.position.add({
            x: 0,
            y: 1,
            z: 0
          });
          this.dataRangeGroup.add(txt);
        }
        if (this.dataRange.text[1]) {
          var _txt = Font3D$1.create(this.dataRange.text[1], {
            color: this.dataRange.textColor
          });
          _txt.position.add({
            x: 0,
            y: -(this.dataRange.height + DataRange.count * (this.dataRange.height + this.dataRange.spacing)),
            z: 0
          });
          this.dataRangeGroup.add(_txt);
        }
      } //调整整体位置
      this.dataRangeGroup.position.add(this.dataRange.position);
      this.scene.add(this.dataRangeGroup);
    }
    /**
     * 标注初始化方法
     * @param markOpt - 标注配置
     */
  }, {
    key: "initMark",
    value: function initMark(markOpt) {
      var _this3 = this;
      Object.assign(this.mark, markOpt); //继承map立体高度
      var markClone = Object.assign({
        extrudeHeight: this.extrude.amount
      }, this.mark);
      delete markClone.data;
      Mark.count = 0;
      if (this.markGroup) {
        var _this$markGroup;
        (_this$markGroup = this.markGroup).remove.apply(_this$markGroup, _toConsumableArray(this.markGroup.children));
      }
      this.markGroup = new Group();
      this.mark.data.forEach(function (userData) {
        var opt = Object.assign({}, markClone, userData);
        var mark = new Mark(opt);
        _this3.markGroup.add(mark);
      });
      this.mapObject.add(this.markGroup);
    }
    /**
     * 线条初始化方法
     * @param lineOpt - 线条配置
     */
  }, {
    key: "initLine",
    value: function initLine(lineOpt) {
      var _this4 = this;
      Object.assign(this.line, lineOpt);
      var lineClone = Object.assign({
        extrudeHeight: this.extrude.amount
      }, this.line);
      delete lineClone.data;
      Line$1.count = 0; //重新生成所有线条
      if (this.lineGroup) {
        var _this$lineGroup;
        (_this$lineGroup = this.lineGroup).remove.apply(_this$lineGroup, _toConsumableArray(this.lineGroup.children));
      }
      this.lineGroup = new Group();
      this.line.data.forEach(function (userData) {
        var opt = Object.assign({}, lineClone, userData);
        var line = new Line$1(opt);
        _this4.lineGroup.add(line);
      });
      this.mapObject.add(this.lineGroup);
    }
    /**
     * 相机位置-现有位置追加
     * @param {v3} ps - 如：{x:0,y:0,y:2}
     * @param {number} [time] - 动画时间
     * @param {int} [delay=0] - 延时
     */
  }, {
    key: "addCameraPosition",
    value: function addCameraPosition(v3, time, delay, callback) {
      var v = new Vector3(v3.x, v3.y, v3.z);
      if (typeof time === 'number') {
        var to = this.camera.position.clone().add(v);
        if (!callback) callback = function callback() {};
        new TWEEN.Tween(this.camera.position).to(to, time).delay(delay || 0).start().onComplete(callback);
      } else this.camera.position.add(v3.x, v3.y, v3.z);
    }
    /**
     * 相机位置-新位置设置
     * @param {v3} ps - 如：{x:0,y:0,y:2}
     * @param {number} [time] - 动画时间
     * @param {int} [delay=0] - 延时
     */
  }, {
    key: "setCameraPosition",
    value: function setCameraPosition(v3, time, delay, easing, callback) {
      if (time && typeof time === 'number') transition(this.camera.position, v3, time, delay, easing, callback);else this.camera.position.set(v3.x, v3.y, v3.z);
    }
    /**
     * 销毁地图对象
     */
  }, {
    key: "dispose",
    value: function dispose() {
      this.el.innerHTML = '';
      this.__event.dispose();
    }
    /**
     * 禁用
     * @param {boolean} disable - 是否禁用
     */
  }, {
    key: "disable",
    value: function disable(_disable) {
      _disable = typeof _disable === 'undefined' ? true : _disable;
      if (_disable) {
        this.el.style.pointerEvents = 'none';
        this.__event.enable = !_disable;
      } else {
        this.el.style.pointerEvents = '';
        this.__event.enable = !_disable;
      }
    }
    /**
     * 初始化地图事件
     * @private
     */
  }, {
    key: "initEvent",
    value: function initEvent() {
      this.__event = new Event(this);
    }
    /**
     * 初始化控制器,返回{@link https://threejs.org/docs/#examples/controls/OrbitControls|OrbitControls}
     * @returns {OrbitControls}
     */
  }, {
    key: "initControls",
    value: function initControls() {
      if (!this.hasControls) return;
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.userPan = false;
      this.controls.autoRotate = this.autoRotate;
      this.controls.userPanSpeed = 1;
      return this.controls;
    }
    /**
     * 初始化性能监控器 - debugger:true 自动开启，返回{@link https://github.com/mrdoob/stats.js|stats}
     * @returns {Stats}
     */
  }, {
    key: "initStats",
    value: function initStats() {
      this.stats = new stats();
      this.stats.setMode(0); //0:fps |1:ms
      this.stats.domElement.style.position = 'absolute';
      this.stats.domElement.style.top = '70px';
      this.stats.domElement.style.right = '0px';
      this.el.appendChild(this.stats.domElement);
      return this.stats;
    }
    /**
     * 初始化调试模式
     * @see Map3d#initStats
     */
  }, {
    key: "initDebug",
    value: function initDebug() {
      if (!this.debugger) return;
      if (this.name) {
        window[this.name] = this;
      }
      this.initStats();
      var helper = new DirectionalLightHelper(this.dirLight, 5);
      this.scene.add(helper);
      var spotLightHelper = new SpotLightHelper(this.spotLight);
      this.scene.add(spotLightHelper);
      var size = 300;
      var divisions = 40;
      var gridHelper = new GridHelper(size, divisions);
      this.scene.add(gridHelper);
      var axisHelper = new AxisHelper(50);
      this.scene.add(axisHelper);
      this.infoPlane = document.createElement('div');
      this.infoPlane.contentEditable = true;
      this.infoPlane.style.position = 'absolute';
      this.infoPlane.style.bottom = '70px';
      this.infoPlane.style.right = '10px';
      this.infoPlane.style.padding = '5px 10px';
      this.infoPlane.style.background = 'rbga(0,0,0,.5)';
      this.infoPlane.style.border = '1px solid #aaa';
      this.infoPlane.style.borderRadius = '5px';
      this.infoPlane.style.color = '#eee';
      this.el.appendChild(this.infoPlane);
    }
  }, {
    key: "printCameraPosition",
    value: function printCameraPosition() {
      var v3 = this.camera.position;
      this.infoPlane.textContent = '相机位置 {x:' + v3.x.toFixed(4) + ",y:" + v3.y.toFixed(4) + ",z:" + v3.z.toFixed(4) + '}';
    }
    /**
     * 删除区域
     * @param {string|Area} area - 要删除的区域名称或者区域对象
     */
  }, {
    key: "reomveArea",
    value: function reomveArea(area) {
      if (typeof area === 'string') area = this.getArea(area);
      this.areaGroup.remove(area);
    }
    /**
     * 删除标注
     * @param {string|Mark} mark - 要删除的标注名称或者标注对象
     */
  }, {
    key: "removeMark",
    value: function removeMark(mark) {
      if (typeof mark === 'string') mark = this.getMark(mark);
      this.markGroup.remove(mark);
    }
    /**
     * 得到地图区域
     * @param {string} areaName - 地图区域名称
     * @returns {Area}
     */
  }, {
    key: "getArea",
    value: function getArea(areaName) {
      return this.areaGroup.getObjectByName(areaName);
    }
    /**
     * 得到地图标注
     * @param {string} markName - 地图标注名称
     * @returns {Mark}
     */
  }, {
    key: "getMark",
    value: function getMark(markName) {
      return this.markGroup.getObjectByName(areaName);
    }
    /**
     * 通过name得到地图相关对象集合
     * @param {string} name - 对象名称
     * @returns {Array}
     */
  }, {
    key: "getObjectsByName",
    value: function getObjectsByName(name) {
      var objects = [];
      this.scene.traverse(function (obj) {
        if (obj.name === name) {
          objects.push(obj);
        }
      });
      return objects;
    }
    /**
     * 地图呈现
     * @protected
     */
  }, {
    key: "renderScene",
    value: function renderScene() {
      this.renderer.clear();
      requestAnimationFrame(this.renderScene.bind(this));
      this.areaGroup.children.map(function (area) {
        if (area) area.update();
      });
      this.lineGroup.children.map(function (line) {
        if (line.halo) line.halo.update();
      });
      this.markGroup.children.map(function (mark) {
        mark.update();
      });
      TWEEN.update();
      if (this.hasControls) this.controls.update();
      if (this.debugger) {
        this.stats.update();
        this.printCameraPosition();
      }
      this.renderer.render(this.scene, this.camera);
    }
    /**
     * 地图大小改变时事件
     * @private
     */
  }, {
    key: "_onResize",
    value: function _onResize() {
      this.dispatchEvent({
        type: 'resize',
        el: null
      });
    }
    /**
     *
     * 鼠标移动时触发
     * @param event
     * @param intersects
     * @private
     */
  }, {
    key: "_onMouseMove",
    value: function _onMouseMove(event, intersects) {
      if (intersects.length > 0) {
        //之前选中对象ID
        var preSelectedObjID = this.selectedObj ? this.selectedObj.id : '';
        this.selectedObj = null;
        for (var i = 0; i < intersects.length; i++) {
          if (intersects[i].object && intersects[i].object.type === 'Mesh' && intersects[i].object.parent.type && intersects[i].object.parent.type === 'Area') {
            this.selectedObj = intersects[i].object.parent;
            break;
          } else if (intersects[i].object && intersects[i].object.type === 'Mark') {
            this.selectedObj = intersects[i].object;
            break;
          } else if (intersects[i].object && intersects[i].object.parent == this.lineGroup && intersects[i].object.type === 'Line') {
            this.selectedObj = intersects[i].object;
            break;
          } else if (intersects[i].object && intersects[i].object.parent && intersects[i].object.parent.type === 'DataRange') {
            this.selectedObj = intersects[i].object.parent;
            break;
          }
        }
        /* 选中区域元素 */
        //已选中对象
        if (this.selectedObj) {
          //如果不是同一个对象
          if (preSelectedObjID != this.selectedObj.id) {
            //老对象触发mouseout
            if (preSelectedObjID) {
              var preSelectedObj = this.scene.getObjectById(preSelectedObjID); //移出区域还原
              if (preSelectedObj) preSelectedObj.onmouseout(this, event);
            } //新对象触发mouseover
            this.selectedObj.onmouseover(this, event);
          }
        } else {
          //未选中对象,老对象触发mouseout
          if (preSelectedObjID) {
            var _preSelectedObj = this.scene.getObjectById(preSelectedObjID); //移出区域还原
            if (_preSelectedObj) _preSelectedObj.onmouseout(this, event);
          }
        }
      } else {
        /* 没有选中任何对象，还原已选中元素 */
        if (this.selectedObj) {
          //移出区域还原
          this.selectedObj.onmouseout(this, event);
        }
        this.selectedObj = null;
      }
    }
    /**
     * 鼠标单击触发
     * @param event
     * @param intersects
     * @private
     */
  }, {
    key: "_onMouseDown",
    value: function _onMouseDown(event, intersects) {
      if (intersects.length > 0) {
        var selectedObj = null;
        for (var i = 0; i < intersects.length; i++) {
          if (intersects[i].object && intersects[i].object.type == 'Mesh' && intersects[i].object.parent.type && intersects[i].object.parent.type == 'Area') {
            selectedObj = intersects[i].object.parent;
            break;
          } else if (intersects[i].object && intersects[i].object.type === 'Mark') {
            selectedObj = intersects[i].object;
            break;
          } else if (intersects[i].object && intersects[i].object.parent && intersects[i].object.parent.type === 'DataRange') {
            selectedObj = intersects[i].object.parent;
            break;
          }
        }
        if (selectedObj) {
          this.debugger && console.log(selectedObj);
          selectedObj.onmousedown(this, event);
        }
      }
    } //创建地图区域块
    //结构 parentObj:[area1,area2...]
    /**
     * 创建区域
     * @param {Object} item
     * @param {string} [item.name=''] - 区域名称
     * @param {color} [item.color=0x3366ff] - 区域颜色
     * @param {color} [item.hoverColor=0xff9933] - 区域鼠标选中颜色
     * @param {number} [item.opacity=1] - 区域透明度
     * @param {boolean} [item.hasPhong=true] - 是否反光材质
     * @param {number} [item.shininess=50] - 反光材质光滑度
     * @param {number} [item.hoverAnimaTime=100] - 鼠标移入动画过渡时间
     * @param {number} [item.loadEffect=false] - 区域加载效果
     * @param {boolean} [item.hasHoverHeight=true] - 鼠标移入区域升高
     */
  }, {
    key: "createArea",
    value: function createArea(item) {
      // item.properties 一般有{id,name,cp,childNum,color,value,extrude}
      // Area继承Map3D属性
      var pros = Object.assign({
        color: this.area.color,
        //地图颜色
        hoverColor: this.area.hoverColor,
        //鼠标移入颜色
        lineColor: this.area.lineColor,
        //线颜色
        opacity: this.area.opacity,
        //地图透明度
        hasPhong: this.area.hasPhong,
        //是否反光材质
        shininess: this.area.shininess,
        //反光材质光滑度
        hoverAnimaTime: this.area.hoverAnimaTime,
        //鼠标移入动画过渡时间
        extrude: this.extrude,
        //立体厚度参数
        loadEffect: this.area.loadEffect,
        //加载效果
        hasHoverHeight: this.area.hasHoverHeight //有标注，选中区域不升高
      }, item.properties);
      var coords = [];
      if (!item.geometry) return;
      if (item.geometry.type == 'Polygon') {
        coords.push(item.geometry.coordinates[0]);
      } else if (item.geometry.type == 'MultiPolygon') {
        for (var i = 0; i < item.geometry.coordinates.length; i++) {
          coords.push(item.geometry.coordinates[i][0]);
        }
      }
      pros.coords = coords;
      var area = new Area(pros);
      this.areaGroup.add(area);
    }
  }]);
  return Map3D;
}();
/**
 * 重写three自定义事件
 */
Object.assign(EventDispatcher.prototype, {
  dispatchEvent: function dispatchEvent(event) {
    if (this._listeners === undefined) return;
    var listeners = this._listeners;
    var listenerArray = listeners[event.type];
    if (listenerArray !== undefined) {
      //Object.assign(event, event.orgEvent);
      var target = event.target; //通过原始事件构造自定义事件
      for (var a in event.orgEvent) {
        event[a] = event.orgEvent[a];
      } //覆盖原始事件目标对象
      event.target = target || this;
      var array = listenerArray.slice(0);
      for (var i = 0, l = array.length; i < l; i++) {
        array[i].call(this, event);
      }
    }
  }
});
Object.assign(Map3D.prototype, EventDispatcher.prototype);

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
}
var delay = restArguments(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
});
function debounce(func, wait, immediate) {
  var timeout, result;
  var later = function later(context, args) {
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
}
/**
 * 生成一个默认的返回顶部按钮
 */
function defaultDom() {
  var container = document.createElement('div');
  container.style.cssText = 'width: 40px;height: 40px;border-radius: 20px;background-color: #3eaf7c;display: flex;';
  var arrow = document.createElement('span');
  arrow.style.cssText = 'margin: auto;width: 16px;height: 16px;border-top: 4px solid #fff;border-left: 4px solid #fff;transform: translateY(3px) rotate(45deg);';
  container.appendChild(arrow);
  container.addEventListener('mouseover', function (ev) {
    this.style.backgroundColor = '#3eaf7c54';
  });
  container.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#3eaf7c';
  });
  return container;
}
/**
 * 回到顶部组件
 *
 * @param {number} [threshold=300] 出现滚动条的阈值
 * @param {*} ele dom元素或者选择器
 * @param {object} [property={}] 元素自定义属性
 */
function BakcToTop() {
  var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var ele = arguments.length > 1 ? arguments[1] : undefined;
  var property = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var dom = null;
  var scrollTop = getScrollTop(),
      offsetWidth = document.body.offsetWidth;
  if (!ele) {
    dom = defaultDom();
    var root = document.querySelector('body');
    root.appendChild(dom);
  } else if (ele instanceof HTMLElement) {
    dom = ele;
  } else {
    dom = document.querySelector(ele);
  }
  var prop = {
    position: 'fixed',
    right: '1em',
    bottom: '1em',
    cursor: 'pointer',
    visibility: 'visible',
    opacity: '0',
    transition: 'all 0.3s ease'
  };
  if (!dom) {
    return;
  }
  Object.assign(prop, property);
  for (var p in prop) {
    dom.style.setProperty(p, prop[p]);
  } // 添加点击事件
  dom.addEventListener('click', function (ev) {
    ev.stopPropagation();
    scrollToTop();
    hide();
  });
  window.addEventListener('scroll', scrollCb);
  window.addEventListener('resize', resizeCb);
  function scrollCb() {
    debounce(function () {
      scrollTop = getScrollTop();
      isShow();
    }, 100)();
  }
  function resizeCb() {
    debounce(function () {
      offsetWidth = document.body.offsetWidth;
      isShow();
    }, 100)();
  }
  function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    scrollTop = 0;
  }
  function isShow() {
    if (offsetWidth > 960 && scrollTop > threshold) {
      show();
    } else {
      hide();
    }
    return scrollTop > threshold;
  }
  function show() {
    dom.style.setProperty('visibility', 'visible');
    dom.style.setProperty('opacity', '1');
  }
  function hide() {
    dom.style.setProperty('visibility', 'hidden');
    dom.style.setProperty('opacity', '0');
  } // 实例方法
  this.getDom = function () {
    return dom;
  }; // 销毁实例对象
  this.dispose = function () {
    window.removeEventListener('scroll', scrollCb);
    window.removeEventListener('resize', resizeCb);
    dom.remove();
  };
}

var vis = {
  Map3D: Map3D,
  BackToTop: BakcToTop
};

/**
 * @author mrdoob / http://mrdoob.com/
 */
var Stats = function Stats() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    dragable: false,
    x: 0,
    y: 0,
    container: null
  };
  var mode = 0;
  var isDrag = false;
  var mousedownTime, mouseupTime;
  var container = document.createElement('div');
  container.style.cssText = "position:fixed;top:".concat(option.y || 0, "px;left:").concat(option.x || 0, "px;cursor:pointer;opacity:0.9;z-index:10000");
  container.addEventListener('click', function (event) {
    event.preventDefault();
    if (!isDrag) {
      showPanel(++mode % container.children.length);
    }
  }, false);
  if (option.dragable) {
    container.addEventListener('mousedown', function (event) {
      event.preventDefault();
      if (isDrag) {
        isDrag = false;
      }
      this.style.cursor = 'move';
      mousedownTime = new Date().getTime();
      move(event);
    }, false);
    container.addEventListener('mouseup', function (event) {
      event.preventDefault();
      mouseupTime = new Date().getTime();
      if (mouseupTime - mousedownTime > 200) {
        isDrag = true;
      }
      this.style.cursor = 'pointer';
    }, false);
    container.addEventListener('mouseout', function () {
      event.preventDefault();
      this.style.cursor = 'pointer';
    }, false);
  }
  /**
   * 移动
   * @param {object} event 事件
   */
  function move(event) {
    var offsetX = parseInt(container.getBoundingClientRect().left); // 获取当前的x轴距离
    var offsetY = parseInt(container.getBoundingClientRect().top); // 获取当前的y轴距离
    var innerX = event.clientX - offsetX; // 获取鼠标在方块内的x轴距
    var innerY = event.clientY - offsetY; // 获取鼠标在方块内的y轴距
    document.onmousemove = function (event) {
      // container.style.left = event.clientX - innerX + "px";
      // container.style.top = event.clientY - innerY + "px";
      var tx = event.clientX - innerX - (option.x || 0);
      var ty = event.clientY - innerY - (option.y || 0); // 边界判断
      if (parseInt(tx + (option.x || 0)) <= 0) {
        tx = -(option.x || 0);
      }
      if (parseInt(ty + (option.y || 0)) <= 0) {
        ty = -(option.y || 0);
      }
      if (parseInt(tx + (option.x || 0)) >= window.innerWidth - parseInt(getComputedStyle(container).width)) {
        tx = window.innerWidth - parseInt(getComputedStyle(container).width) - (option.x || 0);
      }
      if (parseInt(ty + (option.y || 0)) >= window.innerHeight - parseInt(getComputedStyle(container).height)) {
        ty = window.innerHeight - parseInt(getComputedStyle(container).height) - (option.y || 0);
      } // 设置变形
      container.style.transform = "translate(".concat(tx, "px,").concat(ty, "px)");
    }; // 鼠标抬起时，清除绑定在文档上的mousemove和mouseup事件
    // 否则鼠标抬起后还可以继续拖拽方块
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
      document.onmouseout = null;
    };
  } //
  function addPanel(panel) {
    container.appendChild(panel.dom);
    return panel;
  }
  function showPanel(id) {
    for (var i = 0; i < container.children.length; i++) {
      container.children[i].style.display = i === id ? 'block' : 'none';
    }
    mode = id;
  } //
  var beginTime = (performance || Date).now(),
      prevTime = beginTime,
      frames = 0;
  var fpsPanel = addPanel(new Stats.Panel('FPS', '#0ff', '#002'));
  var msPanel = addPanel(new Stats.Panel('MS', '#0f0', '#020'));
  if (self.performance && self.performance.memory) {
    var memPanel = addPanel(new Stats.Panel('MB', '#f08', '#201'));
  }
  showPanel(0);
  if (option.container && _typeof(option.container) === 'object') {
    option.container.appendChild(container);
  } else if (option.container && typeof option.container === 'string') {
    option.container = document.querySelector(option.container);
    option.container.appendChild(container);
  } else {
    document.body.appendChild(container);
  }
  return {
    REVISION: 16,
    dom: container,
    addPanel: addPanel,
    showPanel: showPanel,
    begin: function begin() {
      beginTime = (performance || Date).now();
    },
    end: function end() {
      frames++;
      var time = (performance || Date).now();
      msPanel.update(time - beginTime, 200);
      if (time >= prevTime + 1000) {
        fpsPanel.update(frames * 1000 / (time - prevTime), 100);
        prevTime = time;
        frames = 0;
        if (memPanel) {
          var memory = performance.memory;
          memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
        }
      }
      return time;
    },
    update: function update() {
      beginTime = this.end();
    },
    // Backwards Compatibility
    domElement: container,
    setMode: showPanel
  };
};
Stats.Panel = function (name, fg, bg) {
  var min = Infinity,
      max = 0,
      round = Math.round;
  var PR = round(window.devicePixelRatio || 1);
  var WIDTH = 80 * PR,
      HEIGHT = 48 * PR,
      TEXT_X = 3 * PR,
      TEXT_Y = 2 * PR,
      GRAPH_X = 3 * PR,
      GRAPH_Y = 15 * PR,
      GRAPH_WIDTH = 74 * PR,
      GRAPH_HEIGHT = 30 * PR;
  var canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.cssText = 'width:80px;height:48px';
  var context = canvas.getContext('2d');
  context.font = 'bold ' + 9 * PR + 'px Helvetica,Arial,sans-serif';
  context.textBaseline = 'top';
  context.fillStyle = bg;
  context.fillRect(0, 0, WIDTH, HEIGHT);
  context.fillStyle = fg;
  context.fillText(name, TEXT_X, TEXT_Y);
  context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
  context.fillStyle = bg;
  context.globalAlpha = 0.9;
  context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
  return {
    dom: canvas,
    update: function update(value, maxValue) {
      min = Math.min(min, value);
      max = Math.max(max, value);
      context.fillStyle = bg;
      context.globalAlpha = 1;
      context.fillRect(0, 0, WIDTH, GRAPH_Y);
      context.fillStyle = fg;
      context.fillText(round(value) + ' ' + name + ' (' + round(min) + '-' + round(max) + ')', TEXT_X, TEXT_Y);
      context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
      context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
      context.fillStyle = bg;
      context.globalAlpha = 0.9;
      context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
    }
  };
}; // module.exports = Stats

var dev = {
  Stats: Stats
};

var index = {
  util: util,
  vis: vis,
  dev: dev
};

export default index;
export { util, vis, dev };

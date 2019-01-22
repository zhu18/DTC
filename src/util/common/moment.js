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
    ordinal: function (n) {
      return n + '日'
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
  d = function (t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t
  },
  $ = {
    padStart: d,
    padZoneStr: function (t) {
      var e = Math.abs(t), n = Math.floor(e / 60), r = e % 60;
      return (t <= 0 ? '+' : '-') + d(n, 2, '0') + ':' + d(r, 2, '0')
    },
    monthDiff: function (t, e) {
      var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(n, 'months'), s = e - r < 0, i = t.clone().add(n + (s ? -1 : 1), 'months');
      return Number(-(n + (e - r) / (s ? r - i : i - r)))
    },
    absFloor: function (t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    },
    prettyUnit: function (c) {
      return {
        M: a,
        y: u,
        w: i,
        d: s,
        h: r,
        m: n,
        s: e,
        ms: t
      }[c] || String(c || '').toLowerCase().replace(/s$/, '')
    },
    isUndefined: function (t) {
      return void 0 === t
    }
  },
  f = 'zh-cn',
  l = {};
l[f] = h;
var m = function (t) {
  return t instanceof D
}, y = function (t, e, n) {
  var r;
  if (!t)return null;
  if ("string" == typeof t)l[t] && (r = t), e && (l[t] = e, r = t); else {
    var s = t.name;
    l[s] = t, r = s;
  }
  return n || (f = r), r
}, M = function (t, e) {
  if (m(t))return t.clone();
  var n = e || {};
  return n.date = t, new D(n)
}, S = function (t, e) {
  return M(t, {locale: e.$L})
}, p = $;
p.parseLocale = y, p.isDayjs = m, p.wrapper = S;
var D = (function () {
  function h (t) {
    this.parse(t);
  }
  var d = h.prototype;
  return d.parse = function (t) {
    var e, n;
    this.$d = null === (e = t.date) ? new Date(NaN) : p.isUndefined(e) ? new Date : e instanceof Date ? e : "string" == typeof e && /.*[^Z]$/i.test(e) && (n = e.match(c)) ? new Date(n[1], n[2] - 1, n[3] || 1, n[5] || 0, n[6] || 0, n[7] || 0, n[8] || 0) : new Date(e), this.init(t);
  },
    d.init = function (t) {
      this.$y = this.$d.getFullYear(), this.$M = this.$d.getMonth(), this.$D = this.$d.getDate(), this.$W = this.$d.getDay(), this.$H = this.$d.getHours(), this.$m = this.$d.getMinutes(), this.$s = this.$d.getSeconds(), this.$ms = this.$d.getMilliseconds(), this.$L = this.$L || y(t.locale, null, !0) || f;
    },
    d.$locale = function () {
      return l[this.$L]
    },
    d.format = function (t) {
      console.log(this.$d);
      var e = this, n = t || 'yyyy-MM-ddTHH:mm:ssZ',
        r = p.padZoneStr(this.$d.getTimezoneOffset()),
        s = this.$locale(), i = s.weekdays, a = s.months,
        u = function (t, e, n, r) {
          return t && t[e] || n[e].substr(0, r)
        };
      return n.replace(o, function (t) {
        if (t.indexOf('[') > -1) return t.replace(/\[|\]/g, '')
        switch (t) {
          case 'yy':
            return String(e.$y).slice(-2)
          case 'yyyy':
            return String(e.$y)
          case 'M':
            return String(e.$M + 1)
          case 'MM':
            return p.padStart(e.$M + 1, 2, '0')
          case 'MMM':
            return u(s.monthsShort, e.$M, a, 3)
          case 'MMMM':
            return a[e.$M]
          case 'd':
            return String(e.$D)
          case 'dd':
            return p.padStart(e.$D, 2, '0')
          case 'w':
            return String(e.$W)
          case 'ww':
            return u(s.weekdaysMin, e.$W, i, 2)
          case 'www':
            return u(s.weekdaysShort, e.$W, i, 3)
          case 'wwww':
            return i[e.$W]
          case 'H':
            return String(e.$H)
          case 'HH':
            return p.padStart(e.$H, 2, '0')
          case 'h':
          case 'hh':
            return e.$H === 0 ? 12 : p.padStart(e.$H < 13 ? e.$H : e.$H - 12, t === 'hh' ? 2 : 1, '0')
          case 'a':
            return e.$H < 12 ? 'am' : 'pm'
          case 'A':
            return e.$H < 12 ? 'AM' : 'PM'
          case 'm':
            return String(e.$m)
          case 'mm':
            return p.padStart(e.$m, 2, '0')
          case 's':
            return String(e.$s)
          case 'ss':
            return p.padStart(e.$s, 2, '0')
          case 'SSS':
            return p.padStart(e.$ms, 3, '0')
          case 'Z':
            return r
          default:
            return r.replace(':', '')
        }
      })
    }, h
}());

module.exports = M

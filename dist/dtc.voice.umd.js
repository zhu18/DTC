
/**
  * dtc V1.0.5
  * (c) 2018-2019
  * Copyright all contributors
  * @license Released under MIT license.
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.voice = {}));
}(this, function (exports) { 'use strict';

  /**
   * 检测浏览器是否支持语音合成
   */
  function isSupport() {
    try {
      new window.SpeechSynthesisUtterance();
      return true;
    } catch (error) {
      return false;
    }
  }
  /**
   * 检测浏览器是否支持语言
   * @param {string} lang 语言
   */

  /* async function isSupportLang(lang) {
    let supportList = await window.speechSynthesis.getVoices()
    return supportList.some((item) => {
      return item === lang
    })
  } */


  function synthesis(text) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    option = Object.assign({
      lang: 'zh-CN',
      volume: 1,
      rate: 0.7,
      pitch: 1
    }, option); // 检测支持情况

    if (!isSupport()) {
      console.log('your browser do net support the API, visit https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance get more infomation');
      return;
    } // 合成实例对象


    var utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = option.lang;
    utterance.volume = option.volume;
    utterance.rate = option.rate;
    utterance.pitch = option.pitch;
    window.speechSynthesis.speak(utterance);

    SpeechSynthesisUtterance.prototype.speak = function () {
      var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.text = txt;
      window.speechSynthesis.speak(this);
    };

    return utterance;
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

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var annyang = createCommonjsModule(function (module) {

    var _typeof$$1 = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }; //! annyang
    //! version : 2.6.1
    //! author  : Tal Ater @TalAter
    //! license : MIT
    //! https://www.TalAter.com/annyang/
    //! annyang
    //! version : 2.6.1
    //! author  : Tal Ater @TalAter
    //! license : MIT
    //! https://www.TalAter.com/annyang/


    !function (e, n) {
      "object" === (_typeof$$1(module)) && module.exports ? module.exports = n(e) : e.annyang = n(e);
    }("undefined" != typeof window ? window : void 0, function (r, i) {
      var t,
          o = r.SpeechRecognition || r.webkitSpeechRecognition || r.mozSpeechRecognition || r.msSpeechRecognition || r.oSpeechRecognition;
      if (!o) return null;

      var a,
          c,
          s = [],
          u = {
        start: [],
        error: [],
        end: [],
        soundstart: [],
        result: [],
        resultMatch: [],
        resultNoMatch: [],
        errorNetwork: [],
        errorPermissionBlocked: [],
        errorPermissionDenied: []
      },
          f = 0,
          l = 0,
          d = !1,
          p = "font-weight: bold; color: #00f;",
          g = !1,
          m = !1,
          h = /\s*\((.*?)\)\s*/g,
          y = /(\(\?:[^)]+\))\?/g,
          b = /(\(\?)?:\w+/g,
          v = /\*\w+/g,
          w = /[\-{}\[\]+?.,\\\^$|#]/g,
          S = function S(e) {
        for (var n = arguments.length, t = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) {
          t[o - 1] = arguments[o];
        }

        e.forEach(function (e) {
          e.callback.apply(e.context, t);
        });
      },
          e = function e() {
        return a !== i;
      },
          k = function k(e, n) {
        -1 !== e.indexOf("%c") || n ? console.log(e, n || p) : console.log(e);
      },
          x = function x() {
        e() || t.init({}, !1);
      },
          R = function R(e, n, t) {
        s.push({
          command: e,
          callback: n,
          originalPhrase: t
        }), d && k("Command successfully loaded: %c" + t, p);
      },
          P = function P(e) {
        var n;
        S(u.result, e);

        for (var t = 0; t < e.length; t++) {
          n = e[t].trim(), d && k("Speech recognized: %c" + n, p);

          for (var o = 0, r = s.length; o < r; o++) {
            var i = s[o],
                a = i.command.exec(n);

            if (a) {
              var c = a.slice(1);
              return d && (k("command matched: %c" + i.originalPhrase, p), c.length && k("with parameters", c)), i.callback.apply(this, c), void S(u.resultMatch, n, i.originalPhrase, e);
            }
          }
        }

        S(u.resultNoMatch, e);
      };

      return t = {
        init: function init(e) {
          var n = !(1 < arguments.length && arguments[1] !== i) || arguments[1];
          a && a.abort && a.abort(), (a = new o()).maxAlternatives = 5, a.continuous = "http:" === r.location.protocol, a.lang = "en-US", a.onstart = function () {
            m = !0, S(u.start);
          }, a.onsoundstart = function () {
            S(u.soundstart);
          }, a.onerror = function (e) {
            switch (S(u.error, e), e.error) {
              case "network":
                S(u.errorNetwork, e);
                break;

              case "not-allowed":
              case "service-not-allowed":
                c = !1, new Date().getTime() - f < 200 ? S(u.errorPermissionBlocked, e) : S(u.errorPermissionDenied, e);
            }
          }, a.onend = function () {
            if (m = !1, S(u.end), c) {
              var e = new Date().getTime() - f;
              (l += 1) % 10 == 0 && d && k("Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips."), e < 1e3 ? setTimeout(function () {
                t.start({
                  paused: g
                });
              }, 1e3 - e) : t.start({
                paused: g
              });
            }
          }, a.onresult = function (e) {
            if (g) return d && k("Speech heard, but annyang is paused"), !1;

            for (var n = e.results[e.resultIndex], t = [], o = 0; o < n.length; o++) {
              t[o] = n[o].transcript;
            }

            P(t);
          }, n && (s = []), e.length && this.addCommands(e);
        },
        start: function start(e) {
          x(), g = (e = e || {}).paused !== i && !!e.paused, c = e.autoRestart === i || !!e.autoRestart, e.continuous !== i && (a.continuous = !!e.continuous), f = new Date().getTime();

          try {
            a.start();
          } catch (e) {
            d && k(e.message);
          }
        },
        abort: function abort() {
          c = !1, l = 0, e() && a.abort();
        },
        pause: function pause() {
          g = !0;
        },
        resume: function resume() {
          t.start();
        },
        debug: function debug() {
          var e = !(0 < arguments.length && arguments[0] !== i) || arguments[0];
          d = !!e;
        },
        setLanguage: function setLanguage(e) {
          x(), a.lang = e;
        },
        addCommands: function addCommands(e) {
          var n, t;

          for (var o in x(), e) {
            if (e.hasOwnProperty(o)) if ("function" == typeof (n = r[e[o]] || e[o])) R((t = (t = o).replace(w, "\\$&").replace(h, "(?:$1)?").replace(b, function (e, n) {
              return n ? e : "([^\\s]+)";
            }).replace(v, "(.*?)").replace(y, "\\s*$1?\\s*"), new RegExp("^" + t + "$", "i")), n, o);else {
              if (!("object" === (void 0 === n ? "undefined" : _typeof$$1(n)) && n.regexp instanceof RegExp)) {
                d && k("Can not register command: %c" + o, p);
                continue;
              }

              R(new RegExp(n.regexp.source, "i"), n.callback, o);
            }
          }
        },
        removeCommands: function removeCommands(t) {
          t === i ? s = [] : (t = Array.isArray(t) ? t : [t], s = s.filter(function (e) {
            for (var n = 0; n < t.length; n++) {
              if (t[n] === e.originalPhrase) return !1;
            }

            return !0;
          }));
        },
        addCallback: function addCallback(e, n, t) {
          var o = r[n] || n;
          "function" == typeof o && u[e] !== i && u[e].push({
            callback: o,
            context: t || this
          });
        },
        removeCallback: function removeCallback(e, n) {
          var t = function t(e) {
            return e.callback !== n;
          };

          for (var o in u) {
            u.hasOwnProperty(o) && (e !== i && e !== o || (u[o] = n === i ? [] : u[o].filter(t)));
          }
        },
        isListening: function isListening() {
          return m && !g;
        },
        getSpeechRecognizer: function getSpeechRecognizer() {
          return a;
        },
        trigger: function trigger(e) {
          t.isListening() ? (Array.isArray(e) || (e = [e]), P(e)) : d && k(m ? "Speech heard, but annyang is paused" : "Cannot trigger while annyang is aborted");
        }
      };
    });
  });

  var index = {
    synthesis: synthesis,
    annyang: annyang
  };

  exports.default = index;
  exports.synthesis = synthesis;
  exports.annyang = annyang;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

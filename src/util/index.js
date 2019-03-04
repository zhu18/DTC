/*-------------array----------------*/
import concat from './array/concat'
import shuffle from './array/shuffle'
import max from './array/max'
import min from './array/min'
import unique from './array/unique'

/*-------------commmon----------------*/
import Browser from './browser/browser'

/*-------------commmon----------------*/
import urlArgs from './common/urlArgs'
import moment from './common/moment'

/*-------------object----------------*/
import eq from './object/eq'
import isEqual from './object/isEqual'
import cloneDeep from './object/cloneDeep'
import merge from './object/merge'

/*-------------storage----------------*/
import cookieDel from './storage/cookieDel'
import cookieGet from './storage/cookieGet'
import cookieSet from './storage/cookieSet'

/*-------------string----------------*/
import excerpt from './string/excerpt'
import trim from './string/trim'
import uId from './string/uId'
import toRawType from './string/toRawType'
import rgbToHex from './string/rgbToHex'
import hexToRgb from './string/hexToRgb'

/*-------------typeCheck----------------*/
import isArray from './typeCheck/isArray'
import isEmptyObject from './typeCheck/isEmptyObject'
import isFunction from './typeCheck/isFunction'
import isNaN from './typeCheck/isNaN'
import isNull from './typeCheck/isNull'
import isNumber from './typeCheck/isNumber'
import isObject from './typeCheck/isObject'
import isPlainObject from './typeCheck/isPlainObject'

export default {
  /*--array--*/
  concat,
  shuffle,
  max,
  min,
  unique,
  /*--common--*/
  Browser,
  /*--common--*/
  urlArgs,
  moment,
  /*--object--*/
  eq,
  isEqual,
  cloneDeep,
  merge,
  /*--storage--*/
  cookieDel,
  cookieGet,
  cookieSet,
  /*--string--*/
  excerpt,
  trim,
  uId,
  toRawType,
  rgbToHex,
  hexToRgb,
  /*--typeCheck--*/
  isArray,
  isEmptyObject,
  isFunction,
  isNaN,
  isNull,
  isNumber,
  isObject,
  isPlainObject
}

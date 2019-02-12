/*-------------array----------------*/
const concat = require('./array/concat')
const shuffle = require('./array/shuffle')
const max = require('./array/max')
const min = require('./array/min')
const unique = require('./array/unique')

/*-------------commmon----------------*/
const Browser = require('./browser/browser')

/*-------------commmon----------------*/
const urlArgs = require('./common/urlArgs')
const moment = require('./common/moment')

/*-------------object----------------*/
const eq = require('./object/eq')
const isEqual = require('./object/isEqual')
const cloneDeep = require('./object/cloneDeep')
const merge = require('./object/merge')

/*-------------storage----------------*/
const cookieDel = require('./storage/cookieDel')
const cookieGet = require('./storage/cookieGet')
const cookieSet = require('./storage/cookieSet')

/*-------------string----------------*/
const excerpt = require('./string/excerpt')
const trim = require('./string/trim')
const uId = require('./string/uId')
const toRawType = require('./string/toRawType')

/*-------------typeCheck----------------*/
const isArray = require('./typeCheck/isArray')
const isEmptyObject = require('./typeCheck/isEmptyObject')
const isFunction = require('./typeCheck/isFunction')
const isNaN = require('./typeCheck/isNaN')
const isNull = require('./typeCheck/isNull')
const isNumber = require('./typeCheck/isNumber')
const isObject = require('./typeCheck/isObject')
const isPlainObject = require('./typeCheck/isPlainObject')

module.exports = {
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

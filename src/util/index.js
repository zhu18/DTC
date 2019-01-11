/*-------------array----------------*/
const arrayConcat = require('./array/arrayConcat')
const arrShuffle = require('./array/arrShuffle')
const max = require('./array/max')
const min = require('./array/min')
const unique = require('./array/unique')

/*-------------compare----------------*/
const eq = require('./compare/eq')
const isEqual = require('./compare/isEqual')
const cloneDeep = require('./compare/cloneDeep')

/*-------------storage----------------*/
const cookieDel = require('./storage/cookieDel')
const cookieGet = require('./storage/cookieGet')
const cookieSet = require('./storage/cookieSet')

/*-------------typeCheck----------------*/
const isArray = require('./typeCheck/isArray')
const isEmptyObject = require('./typeCheck/isEmptyObject')
const isFunction = require('./typeCheck/isFunction')
const isNaN = require('./typeCheck/isNaN')
const isNull = require('./typeCheck/isNull')
const isNumber = require('./typeCheck/isNumber')
const isObject = require('./typeCheck/isObject')
module.exports = {
  /*--array--*/
  arrayConcat,
  arrShuffle,
  max,
  min,
  unique,
  /*--compare--*/
  eq,
  isEqual,
  cloneDeep,
  /*--storage--*/
  cookieDel,
  cookieGet,
  cookieSet,
  /*--typeCheck--*/
  isArray,
  isEmptyObject,
  isFunction,
  isNaN,
  isNull,
  isNumber,
  isObject
}
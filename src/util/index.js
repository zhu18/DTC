/*-------------array----------------*/
const concat = require('./array/concat')
const shuffle = require('./array/shuffle')
const max = require('./array/max')
const min = require('./array/min')
const unique = require('./array/unique')

/*-------------commmon----------------*/
const urlArgs = require('./common/urlArgs')

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
const trim =  require('./string/trim')
const uId = require('./string/uId')

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
  concat,
  shuffle,
  max,
  min,
  unique,
  /*--common--*/
  urlArgs,
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
  /*--typeCheck--*/
  isArray,
  isEmptyObject,
  isFunction,
  isNaN,
  isNull,
  isNumber,
  isObject
}

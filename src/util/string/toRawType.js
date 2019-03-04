import _toString from '../../_base/_toString'
/**
 * 监测数据类型只保留基本的数据类型字段
 * @param {any} value 需要监测的数据类型
 */
function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

export default toRawType

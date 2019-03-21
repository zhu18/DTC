/**
 * 合并多个数组为一个数组。
 * @memberof  util
 * @param { Array } arr 多个数组
 * @returns {Array}
 * @author
 * @example
 *   dtc.util.concat([1,2],[3,4],[5,6]) //[1,2,3,4,5,6]
 */

function concat(...args) {
    return [].concat.apply([], args);
}

export default concat

import {
    isFunction
} from '../type/is-function.js'
import {
    isArray
} from '../type/is-array.js'
import {
    isObject
} from '../type/is-object.js'

/** 
 * 将两个或更多对象的内容合并到第一个对象。
 * @memberof  util 
 * @param { Boolean } deep 如果是 true，合并成为递归（又叫做深拷贝）。不支持给这个参数传递 false
 * @param { Object } target 对象扩展。这将接收新的属性。
 * @param { Object } object1 一个对象，它包含额外的属性合并到第一个参数.
 * @param { Object } objectN 包含额外的属性合并到第一个参数
 * @author 王帅  <ws@jusfoun.com>
 * @returns {Object} 
 * @example
 *  var object1 = {
 *      apple: 0,
 *      banana: { weight: 52, price: 100 },
 *      cherry: 97
 *  };
 *  var object2 = {
 *      banana: { price: 200 },
 *      durian: 100
 *  };
 *  // Merge object2 into object1
 *  JFE.util.extend( object1, object2 );
 */

function extend() {
    var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation  
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target  
        i = 2;
    }

    // Handle case when target is a string or something (possible in deep copy)  
    if (typeof target !== "object" && isFunction(target)) {
        target = {};
    }

    // extend jQuery itself if only one argument is passed  
    if (length === i) {
        target = this;
        --i;
    }

    for (; i < length; i++) {
        // Only deal with non-null/undefined values  
        if ((options = arguments[i]) != null) {
            // Extend the base object  
            for (name in options) {
                src = target[name];
                copy = options[name];

                // Prevent never-ending loop  
                if (target === copy) {
                    continue;
                }

                // Recurse if we're merging plain objects or arrays  
                if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];

                    } else {
                        clone = src && isObject(src) ? src : {};
                    }
                    // Never move original objects, clone them  
                    target[name] = extend(deep, clone, copy);

                    // Don't bring in undefined values  
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    // Return the modified object  
    return target;
};

module.exports = extend
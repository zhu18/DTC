



const isType = {
    isArray:function(val){
        return val instanceof Array || Object.prototype.toString.call(val) === '[object Array]';
    },
    isDate:function(val){
        return val instanceof Date || Object.prototype.toString.call(val) === '[object Date]';
    },
    isFunction:function(val){
        return val instanceof Function || Object.prototype.toString.call(val) === '[object Function]';
    },
    isNumber:function(val){
         return typeof val === 'number' || Object.prototype.toString.call(val) === '[object Number]';
    },
    isObjectEmpty:function(obj){
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    },
    isObject:function(val){
        return val != null && Object.prototype.toString.call(val) === '[object Object]';
    }
}

module.exports = isType

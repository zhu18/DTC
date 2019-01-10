const assert = require('chai').assert
const expect = require('chai').expect
const dtc = require('../dist/dtc.umd')

describe('Array', function() {
  describe('arrayConcat', function() {
    it('合并多个数组', function() {
      expect(dtc.util.arrayConcat([1,2],[3,4],[5,6])).to.deep.equal([1,2,3,4,5,6])
    });
    it('传入其它数据类型也是可以的', function() {
      expect(dtc.util.arrayConcat([1,2], {name: 2})).to.deep.equal([1,2,{name: 2}])
    })
  });
});
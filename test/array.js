const assert = require('chai').assert
const expect = require('chai').expect
const util = require('../dist/dtc.util.umd').default

describe('Array', function() {
  describe('concat', function() {
    it('合并多个数组', function() {
      expect(util.concat([1,2],[3,4],[5,6])).to.deep.equal([1,2,3,4,5,6])
    });
    it('传入其它数据类型也是可以的', function() {
      expect(util.concat([1,2], {name: 2})).to.deep.equal([1,2,{name: 2}])
    })
  });

  describe('max', function() {
    it('should return the max number of the array pass in', function() {
      expect(util.max([1,2,3,5,6,7])).to.be.equal(7)
    })
    it('should return undefined', function() {
      expect(util.max([])).to.be.undefined
    })
    it('should return the max number', function() {
      expect(util.max([-1,"test"])).to.be.equal(-1)
    })
    it('should return the max code number', function() {
      expect(util.max(['ac','b','c'])).to.be.equal('c')
    })
  })

  describe('unique', function() {
    it('should return the unique array', function() {
      expect(util.unique([3,4,5,6,7,22,3,4,5])).to.deep.equal([3,4,5,6,7,22])
    })
  })
});


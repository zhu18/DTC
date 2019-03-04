const expect = require('chai').expect
const util = require('../dist/dtc.util.umd').default

describe('TypeChekc', function() {
  describe('isPlainObject', function() {
    it('it should return true', function() {
      let obj = {}
      expect(util.isPlainObject(obj)).to.be.equal(true)
    })
    it('it should return false', function() {
      let obj = null
      expect(util.isPlainObject(obj)).to.be.equal(false)
    })
    it('it should return false', function() {
      let obj = function() {}
      expect(util.isPlainObject(obj)).to.be.equal(false)
    })
  })
})

const assert = require('chai').assert
const expect = require('chai').expect
const dtc = require('../dist/dtc.umd')

describe('String', function() {
  describe('trim', function() {
    it('The left space should be removed', function() {
      let str = '   bei jing  '
      expect(dtc.util.trim(str, 'left')).to.be.equal('bei jing  ')
    })
    it('The right space should be removed', function() {
      let str = '   bei jing  '
      expect(dtc.util.trim(str, 'right')).to.be.equal('   bei jing')
    })
    it('All side space should be removed', function() {
      let str = '   bei jing  '
      expect(dtc.util.trim(str)).to.be.equal('bei jing')
    })
  })
  describe('uId', function() {
    it('Should return a string of length 6', function() {
      expect(dtc.util.uId()).to.have.lengthOf(6)
    })
    it('Should return a string of length 8', function() {
      expect(dtc.util.uId(8)).to.have.lengthOf(8)
    })
    it('Should return a false', function() {
      expect(dtc.util.uId() === dtc.util.uId()).to.be.false
    })
  })
})
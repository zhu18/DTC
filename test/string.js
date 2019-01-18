const assert = require('chai').assert
const expect = require('chai').expect
const util = require('../dist/dtc.util.umd')

describe('String', function() {
  describe('trim', function() {
    it('The left space should be removed', function() {
      let str = '   bei jing  '
      expect(util.trim(str, 'left')).to.be.equal('bei jing  ')
    })
    it('The right space should be removed', function() {
      let str = '   bei jing  '
      expect(util.trim(str, 'right')).to.be.equal('   bei jing')
    })
    it('All side space should be removed', function() {
      let str = '   bei jing  '
      expect(util.trim(str)).to.be.equal('bei jing')
    })
  })
  describe('uId', function() {
    it('Should return a string of length 6', function() {
      expect(util.uId()).to.have.lengthOf(6)
    })
    it('Should return a string of length 8', function() {
      expect(util.uId(8)).to.have.lengthOf(8)
    })
    it('Should return a false', function() {
      expect(util.uId() === util.uId()).to.be.false
    })
  })
})
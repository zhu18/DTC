const assert = require('chai').assert
const expect = require('chai').expect
const util = require('../dist/dtc.util.umd')

describe('String', function() {
  // trim
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
  // uId
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
  // toRawType
  describe('toRawType', function() {
    it('Should get "String" string', function() {
      let test = '/hello/'
      expect(util.toRawType(test)).to.be.equal('String')
    })
    it('Should get "Number" string', function() {
      let test = 12
      expect(util.toRawType(test)).to.be.equal('Number')
    })
    it('Should get "Object" string', function() {
      let test = {}
      expect(util.toRawType(test)).to.be.equal('Object')
    })
    it('Should get "Array" string', function() {
      let test = [1,2]
      expect(util.toRawType(test)).to.be.equal('Array')
    })
    it('Should get "Boolean" string', function() {
      let test = false
      expect(util.toRawType(test)).to.be.equal('Boolean')
    })
    it('Should get "RegExp" string', function() {
      let test = /hello/
      expect(util.toRawType(test)).to.be.equal('RegExp')
    })
    it('Should get "Symbol" string', function() {
      let test = Symbol("foo")
      expect(util.toRawType(test)).to.be.equal('Symbol')
    })
    it('Should get "Null" string', function() {
      let test = null
      expect(util.toRawType(test)).to.be.equal('Null')
    })
    it('Should get "Undefined" string', function() {
      let test = undefined
      expect(util.toRawType(test)).to.be.equal('Undefined')
    })
    it('Should get "Date" string', function() {
      let test = new Date()
      expect(util.toRawType(test)).to.be.equal('Date')
    })
    it('Should get "Error" string', function() {
      let test = new Error()
      expect(util.toRawType(test)).to.be.equal('Error')
    })
    it('Should get "Function" string', function() {
      let test = function() {}
      expect(util.toRawType(test)).to.be.equal('Function')
    })
  })
})

const assert = require('chai').assert
const expect = require('chai').expect
const util = require('../dist/dtc.util.umd').default

describe('String', function () {
  // trim
  describe('trim', function () {
    it('The left space should be removed', function () {
      let str = '   bei jing  '
      expect(util.trim(str, 'left')).to.be.equal('bei jing  ')
    })
    it('The right space should be removed', function () {
      let str = '   bei jing  '
      expect(util.trim(str, 'right')).to.be.equal('   bei jing')
    })
    it('All side space should be removed', function () {
      let str = '   bei jing  '
      expect(util.trim(str)).to.be.equal('bei jing')
    })
  })
  // uId
  describe('uId', function () {
    it('Should return a string of length 6', function () {
      expect(util.uId()).to.have.lengthOf(6)
    })
    it('Should return a string of length 8', function () {
      expect(util.uId(8)).to.have.lengthOf(8)
    })
    it('Should return a false', function () {
      expect(util.uId() === util.uId()).to.be.false
    })
  })
  // toRawType
  describe('toRawType', function () {
    it('Should get "String" string', function () {
      let test = '/hello/'
      expect(util.toRawType(test)).to.be.equal('String')
    })
    it('Should get "Number" string', function () {
      let test = 12
      expect(util.toRawType(test)).to.be.equal('Number')
    })
    it('Should get "Object" string', function () {
      let test = {}
      expect(util.toRawType(test)).to.be.equal('Object')
    })
    it('Should get "Array" string', function () {
      let test = [1, 2]
      expect(util.toRawType(test)).to.be.equal('Array')
    })
    it('Should get "Boolean" string', function () {
      let test = false
      expect(util.toRawType(test)).to.be.equal('Boolean')
    })
    it('Should get "RegExp" string', function () {
      let test = /hello/
      expect(util.toRawType(test)).to.be.equal('RegExp')
    })
    it('Should get "Symbol" string', function () {
      let test = Symbol("foo")
      expect(util.toRawType(test)).to.be.equal('Symbol')
    })
    it('Should get "Null" string', function () {
      let test = null
      expect(util.toRawType(test)).to.be.equal('Null')
    })
    it('Should get "Undefined" string', function () {
      let test = undefined
      expect(util.toRawType(test)).to.be.equal('Undefined')
    })
    it('Should get "Date" string', function () {
      let test = new Date()
      expect(util.toRawType(test)).to.be.equal('Date')
    })
    it('Should get "Error" string', function () {
      let test = new Error()
      expect(util.toRawType(test)).to.be.equal('Error')
    })
    it('Should get "Function" string', function () {
      let test = function () {}
      expect(util.toRawType(test)).to.be.equal('Function')
    })
  })
  // rgbToHex
  describe('rgbToHex', function () {
    let rgb1 = 'rgba(20,50,255,0.8)',
      rgb2 = 'rgb(20,50,255)',
      rgb3 = '205,254,0, .2',
      rgb4 = '20, 30, 40'
    it('Should return #1432ffcc', function () {
      expect(util.rgbToHex(rgb1)).to.be.equal('#1432ffcc')
    })
    it('Should return #1432ff', function () {
      expect(util.rgbToHex(rgb1, false)).to.be.equal('#1432ff')
    })
    it('Should return #1432ff', function () {
      expect(util.rgbToHex(rgb2)).to.be.equal('#1432ff')
    })
    it('Should return #cdfe0033', function () {
      expect(util.rgbToHex(rgb3)).to.be.equal('#cdfe0033')
    })
    it('Should return #141e28', function () {
      expect(util.rgbToHex(rgb4)).to.be.equal('#141e28')
    })
    it('Should return null', function () {
      expect(util.rgbToHex('43,44')).to.be.equal(null)
    })
  })
  // hexToRgb
  describe('hexToRgb', function () {
    it('Should return "20,30,40"', function () {
      expect(util.hexToRgb('#141e28')).to.be.equal('20,30,40')
    })
    it('Should return "20,30,40"', function () {
      expect(util.hexToRgb('141e28')).to.be.equal('20,30,40')
    })
    it('Should return "255,255,255"', function () {
      expect(util.hexToRgb('fff')).to.be.equal('255,255,255')
    })
    it('Should return null', function () {
      expect(util.hexToRgb('ff')).to.be.equal(null)
    })
    it('Should return null', function () {
      expect(util.hexToRgb('fffffff')).to.be.equal(null)
    })
  })
})

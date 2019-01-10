const assert = require('chai').assert
const expect = require('chai').expect
const dtc = require('../dist/dtc.umd')

describe('Tool', function() {
  describe('format time', function() {
    it('通过"-"连接日期', function() {
      expect(dtc.util.formatTime('2018-01-10',false, '-')).to.equal('2018-01-10')
    })
    it('通过"年月日"连接日期', function() {
      expect(dtc.util.formatTime('2018-01-10',false, '年月日')).to.be.equal('2018年01月10日')
    })
  })
})
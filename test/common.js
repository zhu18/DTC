const assert = require('chai').assert
const expect = require('chai').expect
const util = require('../dist/dtc.util.umd')

describe('Common', function () {
  describe('moment', function () {
    it('should support the date and time formats', function () {
      expect(util.moment('1911-9-1 13:09:07').format()).to.be.equal('1911-09-01T13:09:07+08:00')
    })
    it('should support the date and time formats', function () {
      expect(util.moment(new Date('1911-9-1 13:09:07')).format()).to.be.equal('1911-09-01T13:09:07+08:00')
    })
    it('should support the date and time formats', function () {
      expect(util.moment('1911-9-1 13:09:07').format('yy-M-d H:m:s a Z w')).to.be.equal('11-9-1 13:9:7 pm +08:00 5')
    })
    it('should support the date and time formats', function () {
      expect(util.moment('1911-9-1 13:09:07').format('yyyy-MM-dd HH:mm:ss:SSS A ww')).to.be.equal('1911-09-01 13:09:07:000 PM 五')
    })
    it('should support the date and time formats', function () {
      expect(util.moment('1911-9-1 13:09:07').format('yyyy[年]MMMdd[日] hha wwww')).to.be.equal('1911年9月01日 01pm 星期五')
    })
    it('should support the date and time formats', function () {
      expect(util.moment('1911-9-1 13:09:07').format('MMMM yyyy hA www')).to.be.equal('九月 1911 1PM 周五')
    })
  })
})

const fs = require('fs')
const path = require('path')

// todo 完善这个正则表达式
let reg = /(?<=module\.exports\s\=\s)\w+(?=)/
/**
 * 读取文件夹下的所有文件夹
 * @param {string} src 文件路径
 */
function readdir(src) {
  fs.readdir(src, {
    withFileTypes: true
  }, function (err, files) {
    let reg = /^(\.|_)/
    files.forEach((file, index) => {
      let name = file.name
      let isDir = file.isDirectory()
      let isFile = file.isFile()
      // 文件
      if (!reg.test(name) && isFile) {
        // console.log()
        readFiles(`${src}/${name}`)
      }
      // 目录
      if (!reg.test(name) && isDir) {
        readdir(`${src}/${name}`)
      }
    })
  })
}
readdir('./src')
/**
 * 读取文件夹下的所有文件
 * @param {string} src 文件路径
 */
function readFiles(src) {
  fs.readFile(src, {
    encoding: 'utf-8'
  }, function (err, data) {
    if (err) throw err
    let name = reg.exec(data)
    if (name) {
      console.log(name[0])

    }
  })
}
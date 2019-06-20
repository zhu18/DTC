/**
 * 检测浏览器是否支持语音合成
 */
function isSupport() {
  try {
    new window.SpeechSynthesisUtterance()
    return true
  } catch (error) {
    return false
  }
}
/**
 * 检测浏览器是否支持语言
 * @param {string} lang 语言
 */
/* async function isSupportLang(lang) {
  let supportList = await window.speechSynthesis.getVoices()
  return supportList.some((item) => {
    return item === lang
  })
} */

function Synthesis(option = {}) {
  if (!Synthesis.single_instance) {
    Synthesis.single_instance = this;
  }
  option = Object.assign({
    lang: 'zh-CN',
    volume: 1,
    rate: 0.8,
    pitch: 1
  }, option)
  // 检测支持情况
  if (!isSupport()) {
    console.log('your browser do net support the API, visit https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance get more infomation')
    return null
  }
  const synth = window.speechSynthesis
  // 合成实例对象
  const utterance = new SpeechSynthesisUtterance()
  const keys = Object.keys(option)
  keys.forEach(key => {
    utterance[key] = option[key]
  })
  // 获取配置项目

  this.speak = function (txt) {
    if (!txt) return
    utterance.text = txt
    synth.speak(utterance);
  }
  this.cancle = function () {
    synth.cancle();
  }
  this.setOption = function (opt = {}) {
    Object.assign(option, opt)
    const keys = Object.keys(option)
    keys.forEach(key => {
      utterance[key] = option[key]
    })
  }
  this.addEventListener = function (type, callback) {
    utterance.addEventListener(type, callback)
  }
  this.getOption = function() {
  const {lang, volume, rate, pitch} = utterance
    return {lang, volume, rate, pitch}
  }
  return Synthesis.single_instance
}

export default Synthesis

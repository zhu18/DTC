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

function synthesis(text, option = {}) {
  option = Object.assign({
    lang: 'zh-CN',
    volume: 1,
    rate: 0.7,
    pitch: 1
  }, option)
  // 检测支持情况
  if (!isSupport()) {
    console.log('your browser do net support the API, visit https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance get more infomation')
    return
  }
  // 合成实例对象
  const utterance = new SpeechSynthesisUtterance()
  utterance.text = text
  utterance.lang = option.lang
  utterance.volume = option.volume
  utterance.rate = option.rate
  utterance.pitch = option.pitch
  window.speechSynthesis.speak(utterance);
  SpeechSynthesisUtterance.prototype.speak = function (txt = '') {
    this.text = txt
    window.speechSynthesis.speak(this);
  }
  return utterance
}

export default synthesis

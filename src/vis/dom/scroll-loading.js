export default class ScrollLoad {
  static defaultOptions = {
    container: 'body',
    callback: undefined
  }
  constructor(options = {}) {
    this._options = Object.assign({}, defaultOptions, options)
    this.container = document.querySelector(this._options.container)
    this.container.style.overflow = 'auto'
    let sh = this.container.scrollHeight
    let st = this.container.scrollTop
    let ch = this.container.clientHeight
    
  }
}
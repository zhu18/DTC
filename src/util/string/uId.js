class Lab62 {
  constructor() {
    // Init delegate
    this.delegate = {
      b62char: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      b62string: ""
    };
    // Init generator
    this.generator = function (length) {
      // Run loop specified times
      for (var i = 0; i < length; i++) {
        // Get random integer
        var index = Math.floor(Math.random() * (62));
        // Build ID one character at a time
        this.delegate.b62string += this.delegate.b62char[index];
      }
      return this.delegate.b62string;
    };
  }
  make(length) {
    return this.generator(length)
  }
}

function uId(length = 6) {
  let id = new Lab62()
  return id.make(length)
}

export default uId

'use strict';

class Utils {
  extend( dest, src ) {
    for(var prop in src) {
      if(src[prop] && src[prop].constructor && src[prop].constructor === Object) {
        dest[prop] = dest[prop] || {};
        this.extend( dest[prop], src[prop] )
      } else {
        dest[prop] = src[prop]
      }
    }
  }

  each(data, callback) {
    return [].forEach(data, callback)
  }
}

module.exports = new Utils()

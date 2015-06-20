'use strict';

class SimpleHasing {
  constructor( tableLength ) {
    this.tableLength = tableLength || 137;
  }

  make( data ) {
    var total = 0;
    for(let i = 0, len = data.length; i < len; i++) {
      total += data.charCodeAt(i);
    }

    return total % this.tableLength;
  }
}

module.exports = SimpleHashing;

'use strict';

class BetterHashing {
  constructor( tableLength ) {
    this.tableLength = tableLength || 137;
  }

  make( data ) {
    const H = 37;
    var tableLength = this.tableLength,
        hash = 0;

    for(let i = 0, len = data.length; i < len; i++) {
      hash = (hash * H) + data.charCodeAt(i);
    }
    hash = hash % tableLength;

    if( hash < 0 )
      hash += tableLength;

    return hash;
  }
}

module.exports = BetterHashing;

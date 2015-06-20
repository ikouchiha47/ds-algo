'use strict';

import * as HashTable from "HashTable";

class BetterHashTable extends HashTable {
  constructor( tableLength ) {
    super(tableLength);
  }

  toHash( data ) {
    const H = 37;
    var tableLength = this.table.length,
        hash = 0;

    for(let i = 0, len = data.length; i < len; i++) {
      hash = (hash * H) + data.charCodeAt(i);
    }
    hash = hash % tableLength;

    if( hash < 0 )
      hash += tableLength;

    return hash;
  }

  insert( data ) {
    var pos = this.toHash(data);
    this.table[pos] = data;
  }
}

module.exports = BetterHashTable;

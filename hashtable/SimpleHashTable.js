'use strict';

import * as HashTable from "HashTable";

class SimpleHashTable extends HashTable {
  constructor( tableLength ) {
    super(tableLength)
  }

  toHash( data ) {
    var total = 0;
    for(let i = 0, len = data.length; i < len; i++) {
      total += data.charCodeAt(i);
    }

    return this.mod(total, this.table.length);
  }

  insert( data ) {
    var pos = this.toHash(data);
    this.table[pos] = data;
  }
}

module.exports = SimpleHashTable;

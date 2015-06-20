'use strict';

var __ = require("../utils");

class HashTable {
  constructor(tableLength) {
    tableLength = tableLength || 137;
    this.table = new Array(137);
  }

  toHash( data ) {}

  insert( data ) {}

  mod( value, divisor ) {
    return value % divisor;
  }

  showDistribution() {
    __.each(this.table, function(data, index) {
      console.log(index + " : " + data)
    });
  }
}

export default HashTable;

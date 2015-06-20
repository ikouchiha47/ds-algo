'use strict';

var Hashing = require("hashing");
var _ = require("utils");

class HashTable {
  constructor(tableLength) {
    tableLength = tableLength || 137;
    this.table = new Array(137);
    this.hash = new Hashing(tableLength);
  }

  toHash( data ) {}

  insert( data ) {}


  showDistribution() {
    _.each(this.table, function(data, index) {
      if(data)
        console.log(index + " : " + data)
    });
  }
}

module.exports = HashTable;

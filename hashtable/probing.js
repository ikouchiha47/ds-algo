'use strict';

var HashTable = require("./HashTable");
var _ = require("utils");

class HashLinearProbing extends HashTable {
  constructor( tableLength ) {
    super(tableLength);
    this.values = [];
  }

  insert( key, data ) {
    var pos = this.hash.make(data);
    if(this.table[pos] === undefined) {
      this.table[pos] = key;
      this.values[pos] = data;
    } else {
      while(this.table[pos] !== undefined) {
        pos += 1;
      }
      this.table[pos] = key;
      this.values[pos] = data;
    }
  }

  get( key ) {
    var pos = this.hash.make(key),
        i = 0;
    if(pos > -1) {
      for(let i = pos; this.table[i] !== undefined; i++) {
        if(this.table[i] == key)
          return this.values[i];
      }
    }
    return undefined;
  }

  showDistribution() {
    var that = this;
    _.each(this.table, function(data, index) {
      if(data)
        console.log(index + " : " + data + "->" + that.get(data))
    }
  }
}

module.exports = HashLinearProbing;

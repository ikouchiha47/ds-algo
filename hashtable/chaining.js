'use strict';

var HashTable = require("./HashTable");
var _ = require('utils');

class HashSeperateChaining extends HashTable {
  constructor( tableLength ) {
    super(tableLength);
    this.buildChains();
  }

  buildChains() {
    var table = this.table;
    for(let i = 0, len = table.length; i < len; i++) {
      table[i] = [];
    }
  }

  makePair( key, value ) {
    var pair = {
      key: key,
      value: value,
      toString() {
        return [this.key, this.value].join(", ");
      }
    }
    return pair;
  }

  insert( key, value ) {
    var pos = this.hash.make(key);
    this.table[pos].push(this.makePair(key, value));
  }

  get( key ) {
    var pos = this.hash.make(key),
        buckets = this.table[pos];

    for(let i = 0, len = buckets.length; i < len; i++) {
      if(buckets[i] && buckets[i].key == key)
        return buckets[i].toString();
    }
    return undefined;
  }

  showDistribution() {
    _.each(this.table, function(data, index) {
      if(data && data.length > 0)
        console.log(index + " : " + data);
    });
  }
}

module.exports = HashSeperateChaining;

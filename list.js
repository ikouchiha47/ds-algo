'use strict';

var __ = require('./utils');

class List {
  constructor() {
    __.extend(this, {
      listSize: 0,
      pos: 0,
      dataStore: []
    })
  }

  append( element ) {
    this.dataStore[this.listSize] = element;
    ++this.listSize;
  }

  find( element ) {
    for( var i = 0, len = this.dataStore.length; i < len; i++ ) {
      if(this.dataStore[i] === element)
        return i;
    }
    return -1;
  }

  remove( element ) {
    var foundAt = this.find(element);
    if(foundAt > -1){
      this.dataStore.splice(foundAt, 1);
      --this.listSize
      return this;
    } else {
      return false;
    }
  }

  insert( element, after ) {
    var foundAt = this.find(element);
    if(foundAt > -1) {
      this.dataStore.splice(founAt+1, 0, element);
      ++this.listSize
      return this;
    } else {
      return false;
    }
  }

  /* traversing the list */
  front() {
    this.pos = 0
  }

  end() {
    this.pos = this.listSize - 1
  }

  prev() {
    if(this.pos > -1)
      --this.pos
    return this;
  }

  next() {
    if(this.pos < this.listSize - 1)
      ++this.pos
    return this;
  }

  currPos() {
    return this.pos
  }

  moveTo(position) {
    if(position < this.listSize -1)
      this.pos = position - 1
    return this;
  }

  getElement() {
    return this.dataStore[this.pos]
  }

  toString() {
    return this.dataStore;
  }
}

module.exports = List;

'use strict';

var DNodes = require("./DNodes");

class DLinkedList {
  constructor() {
    this.head = new DNodes("head");
  }

  find( item ) {
    var currNode = this.head;

    while(currNode.next != null) {
      currNode = currNode.next;
    }

    return currNode;
  }

  insertAfter( nElement, after ) {
    var nNode, currNode;

    after = after || "head";

    if(nElement === "head") {
      throw Error("cannot insert another head");
    }

    nNode = new DNodes(nElement);
    currNode = this.find(after);

    nNode.next = currNode.next;
    nNode.previous = currNode;
    currNode.next = nNode;

    return nNode;
  }

  insertBefore( nElement, before ) {
    var nNode, currNode;

    if(nElement === "head") {
      throw Error("Cannot insert another head");
    }

    nNode = new DNodes(nElement);
    currNode = this.find(before);

    nNode.previous = currNode.previous;
    nNode.next = currNode;
    currNode.previous.next = nNode;
    currNode.previous = nNode;

    return nNode;
  }

  remove( item ) {
    var currNode = this.find(item);
    if(currNode.next != null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }

    return this;
  }

  display() {
    var currNode = this.head;
    while(currNode.next != null) {
      console.log(currNode.next.element)
      currNode = currNode.next
    }
  }
}

module.exports = DLinkedList;
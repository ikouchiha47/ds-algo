'use strict';

var Nodes = require("./Nodes");

class LinkedList {
  constructor() {
    this.head = new Nodes("head");
  }

  find( item ) {
    var currNode = this.head;
    while(currNode.next != null && currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode
  }

  findPrev( item ) {
    var currNode = this.head;
    while(currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert( nElement, after ) {
    var currNode, nNode;
    after = after || "head";
    nNode = new Nodes(nElement);
    currNode = this.find(after);

    nNode.next = currNode.next;
    currNode.next = nNode;

    return nNode;
  }

  remove(item) {
    var prevNode, currNode;
    prevNode = this.findPrev(item);
    currNode = prevNode.next;

    prevNode.next = currNode.next;
    return this;
  }

  display() {
    var currNode = this.head;
    while(currNode.next != null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}

module.exports = LinkedList;

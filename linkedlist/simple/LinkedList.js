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

  insert( newElement, after ) {
    var currNode, newNode;

    if(newElement === "head") {
      throw Error("You can't add another head")
    }

    after = after || "head";
    newNode = new Nodes(newElement);
    currNode = this.find(after);

    newNode.next = currNode.next;
    currNode.next = newNode;

    return newNode;
  }

  remove( item ) {
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

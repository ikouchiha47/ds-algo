'use strict';

var DoublyLinkedNodes = require("./DNodes");

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyLinkedNodes("head");
  }

  find( item ) {
    var currNode = this.head;

    while(currNode.next != null) {
      currNode = currNode.next;
    }

    return currNode;
  }

  insertAfter( newElement, after ) {
    var newNode, currNode;

    after = after || "head";

    if(newElement === "head") {
      throw Error("cannot insert another head");
    }

    newNode = new DoublyLinkedNodes(newElement);
    currNode = this.find(after);

    newNode.next = currNode.next;
    newNode.previous = currNode;
    currNode.next = newNode;

    return newNode;
  }

  insertBefore( newElement, before ) {
    var newNode, currNode;

    if(newElement === "head") {
      throw Error("Cannot insert another head");
    }

    newNode = new DoublyLinkedNodes((newElement);
    currNode = this.find(before);

    newNode.previous = currNode.previous;
    newNode.next = currNode;
    currNode.previous.next = newNode;
    currNode.previous = newNode;

    return newNode;
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

module.exports = DoublyLinkedList;
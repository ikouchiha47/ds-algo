'use strict';

var DoublyLinkedNodes = require("./DoublyLinkedNodes");

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyLinkedNodes("head");
    this.pos = this.head;
  }

  find( item ) {
    var currNode = this.head;

    while(currNode.element != item) {
      currNode = currNode.next;
    }

    return currNode;
  }

  findLast() {
    var currNode = this.head;
    while(currNode.next != null) {
      currNode = currNode.next;
    }

    return currNode;
  }

  advance(n) {
    var currNode = this.head;
    while(n > 0 && currNode.next != null) {
      currNode = currNode.next;
      n -= 1;
    }
    this.pos = currNode;
    return currNode;
  }


  back() {
    if(this.pos.previous != null)
      this.pos = this.pos.previous;

    return this.pos;
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

  displayReverse() {
    var currNode = this.findLast();
    while(currNode.previous != null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }

  show() {
    console.log(this.pos.element)
  }
}

module.exports = DoublyLinkedList;
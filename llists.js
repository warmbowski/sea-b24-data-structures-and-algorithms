'use strict';
function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
}

LList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next;
  }
};

LList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while (!(currNode.next === null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.display = function() {
  var currNode = this.head;
  while (!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};

LList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

LList.prototype.insert = function(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
};

// Exercise 6-1
LList.prototype.advance = function(currNode, n) {
  while(n > 0 && currNode.next != null) {
    currNode = currNode.next;
    n--;
  }
  return currNode;
},

// Exercise 6-2
LList.prototype.back = function(currNode, n) {
  while(n > 0 && this.findPrevious(currNode) != null) {
    currNode = this.findPrevious(currNode);
    n--;
  }
  return currNode;
},

// Exercise 6-1
LList.prototype.show = function(currNode) {
  nodeAssoc = 'Next:' + currNode.next + 'Prev: ' + findPrevious(currNode).element;
  return nodeAssoc;
}

module.exports = LList;

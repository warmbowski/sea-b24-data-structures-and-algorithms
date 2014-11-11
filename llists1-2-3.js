;'use strict';
var LList = require('./llist.js');

LList.prototype.advance = function(currNode, n) {
  while(n > 0 && currNode.next != null) {
    currNode = currNode.next;
    n--;
  }
  return currNode;
},

LList.prototype.back = function(currNode, n) {
  while(n > 0 && this.findPrevious(currNode) != null) {
    currNode = this.findPrevious(currNode);
    n--;
  }
  return currNode;
},

LList.prototype.show = function(currNode) {
  nodeAssoc = 'Next:' + currNode.next + 'Prev: ' + findPrevious(currNode).element;
  return nodeAssoc;
}
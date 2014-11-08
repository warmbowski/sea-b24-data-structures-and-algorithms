'use strict';

function Dequeue() {
  this.dataStore = [];
}

Dequeue.prototype.enqueue = function(element) {
  this.dataStore.push(element);
};

Dequeue.prototype.dequeueFront = function() {
  return this.dataStore.shift();
};

Dequeue.prototype.dequeueBack = function() {
  return this.dataStore.pop();
};

Dequeue.prototype.front = function() {
  return this.dataStore[0];
};

Dequeue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Dequeue.prototype.toString = function() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
};

Dequeue.prototype.empty = function() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Dequeue;

'use strict';

function Queue() {
  this.dataStore = [];
}

Queue.prototype.enqueue = function(element) {
  this.dataStore.push(element);
};

Queue.prototype.dequeue = function() {
  return this.dataStore.shift();
};

Queue.prototype.dequeueByCode = function() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    //highest code has priority
    if (this.dataStore[i].code > this.dataStore[entry].code) entry = i;
  }
  return this.dataStore.splice(entry, 1);
};

Queue.prototype.front = function() {
  return this.dataStore[0];
};

Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.empty = function() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
};

Queue.prototype.toString = function() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
};

Queue.prototype.toStringByCode = function() {
  var retStr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
  }
  return retStr;
};

module.exports = Queue;

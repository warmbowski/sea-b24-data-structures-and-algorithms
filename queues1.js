function Dequeue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeueFront = dequeueFront;
  this.dequeueBack = dequeueBack;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeueFront() {
  return this.dataStore.shift();
}

function dequeueBack() {
  return this.dataStore.pop();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length-1];
}

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n"; }
    return retStr; 
}

function empty() {
  if (this.dataStore.length === 0) {
    return true; }
  else {
    return false;
  } 
}

module.exports = Dequeue;

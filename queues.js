var expr = process.argv[2];

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.dequeueByCode = dequeueByCode;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.toStringByCode = toStringByCode;
  this.empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length-1];
}

function empty() {
  if (this.dataStore.length === 0) {
    return true; 
  } else {
    return false;
  }
}

function Patient(name, code) { 
  this.name = name; 
  this.code = code;
}

function dequeueByCode() {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    //highest code has priority
    if (this.dataStore[i].code > this.dataStore[entry].code) entry = i;
  }
  return this.dataStore.splice(entry,1); 
}

function toStringByCode() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
  }
  return retStr;
}

module.exports = Queue;

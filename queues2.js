'use strict';
var Dequeue = require ('./queues1.js');
var expr = process.argv[2];

function testPalendrome() {

  var d = new Dequeue();
  var isPalendrome = '';

  d.dataStore = expr.split('');

  while (d.dataStore.length > 1) {
    if (d.front() === d.back()) {
      isPalendrome = ' is a palendrome';
      d.dequeueFront();
      d.dequeueBack();
    } else {
      isPalendrome = ' is NOT a palendrome';
      break;
    }
  }
  return expr + isPalendrome;
}

console.log(testPalendrome());

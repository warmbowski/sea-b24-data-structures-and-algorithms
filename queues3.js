'use strict';
var Queue = require ('./queues.js');
var seen;

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

// enqueue patients
var ed = new Queue();
var p = new Patient('Smith', 5);
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p); // print queue
console.log(ed.toStringByCode());
// first round
seen = ed.dequeueByCode();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toStringByCode());
// second round
seen = ed.dequeueByCode();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toStringByCode());
// third round
seen = ed.dequeueByCode();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toStringByCode());
// fourth
seen = ed.dequeueByCode();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toStringByCode());

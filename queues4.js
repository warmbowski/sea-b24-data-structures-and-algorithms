'use strict';
var Queue = require ('./queues.js');

function Patient(name, code) {
  this.name = name;
  this.code = code;
}

var ed = new Queue();
var p = new Patient();

function enqueuePatient(patient, priority) {
  p = new Patient(patient, priority);
  ed.enqueue(p);
  return p.name + ' has been coded and queued';
}

function displayPatientQueue() {
  return ed.toStringByCode();
}

function seeNextPatientInQueue() {
  var seen = ed.dequeueByCode();
  return 'Patient being treated: ' + seen[0].name;
}

console.log(enqueuePatient('fred', 6));
console.log(enqueuePatient('wilma', 1));
console.log('--------------------');
console.log(displayPatientQueue());
console.log('--------------------');
console.log(seeNextPatientInQueue());
console.log('--------------------');
console.log(displayPatientQueue());

;'use strict';
var LList = require('./llist.js');

var item = 'head';
var grades = new LList();

function addGrade(student, grade) {
  
  grades.insert({'student': student, 'grade': grade}, item);
  item = student;
  grades.display();
};


addGrade('fred','B');
addGrade('wilma', 'A+');

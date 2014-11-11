;'use strict';
function Node(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

function LList() {
  this.head = new Node("head");
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
return currNode; }
}

var item = 'head';
var grades = new LList();

function addGrade(student, grade) {
  
  grades.insert({'student': student, 'grade': grade}, item);
  item = student;
  grades.display();
  
};


addGrade('fred','B');
addGrade('wilma', 'A+');

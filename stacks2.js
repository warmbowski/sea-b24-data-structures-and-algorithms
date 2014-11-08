'use strict';
var arg = process.argv[2];

function postfixToInfix(expr) {
  // takes in a string containing a math expression
  // returns string containing new math expression in rpn

  var operands = [];
  var operators = [];

  for (var i = 0; i < expr.length; i++) {
    if (expr[i] == '+' || expr[i] == '-' || expr[i] == '*' || expr[i] == '/') {
      operators.push(expr[i]);
    } else if (!isNaN(expr[i])) {
      operands.push(expr[i]);
    }
  }
  return operands.join(' ') + ' ' + operators.join(' ');
}

console.log(postfixToInfix(arg));

module.exports = postfixToInfix;

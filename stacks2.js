'use strict';
var Stack = require('./stacks.js');
var parenCheck = require('./stacks1.js');
var arg = process.argv[2];

function postfixToInfix(expr) {
  // takes in a string containing a math expression of integers
  // returns string containing new math expression in rpn
  // based on Shunting Yard Algorithm:
  //   http://en.wikipedia.org/wiki/Shunting-yard_algorithm

  var output = '';
  var opStack = new Stack();
  var paren = parenCheck(expr);

  if (paren.length > 0) return 'Problem: Unmatched parentheses at ' + paren.join(', ');
  expr = expr.split(' ').join();

  for (var i = 0; i < expr.length; i++) {
    if (!isNaN(expr[i])) {
      output += expr[i];

    } else if (expr[i] == '+' || expr[i] == '-') {
      while (opStack.top > 0 && opStack.peek() != '(') {
        if (opStack.peek() == '+' || opStack.peek() == '-') {
          output += opStack.peek();
          opStack.pop();
        } else {
          output += opStack.peek();
          opStack.pop();
        }
      }
      opStack.push(expr[i]);

    } else if (expr[i] == '*' || expr[i] == '/') {
      while (opStack.top > 0 && opStack.peek() != '(') {
        if (opStack.peek() == '*' || opStack.peek() == '/') {
          output += opStack.peek();
          opStack.pop();
        } else {
          break;
        }
      }
      opStack.push(expr[i]);

    } else if (expr[i] == '(') {
      opStack.push(expr[i]);

    } else if (expr[i] == ')') {
      while (opStack.peek() != '(') {
        output += opStack.peek();
        opStack.pop();
      }
      opStack.pop();
    }
  }
  while (opStack.length() > 0) {
    output += opStack.peek();
    opStack.pop();
  }
  return output;
}

console.log(postfixToInfix(arg));

module.exports = postfixToInfix;

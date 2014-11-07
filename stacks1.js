'use strict';
var arg = process.argv[2];

function unbalancedParens(expr) {
  //returns an array of positions of unbalanced parenteses

  var stack = [];
  var unmatched = [];

  for (var i = 0; i < expr.length; i++) {
    if (expr[i] == '()') {
      stack.push(i + 1);
    }
    if (expr[i] == ')') {
      if (stack.length === 0) {
        unmatched.push(i + 1);
      } else {
        stack.pop();
      }
    }
  }
  return unmatched.concat(stack);
}

console.log (unbalancedParens(arg));

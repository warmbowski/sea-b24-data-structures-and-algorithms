'use strict';
var arg = process.argv[2];

function pezDispenserNoYellow(expr) {
  // takes in a string of Pez colors 'RWRRYRW'
  // returns a string containing the same order of candies
  // but excluding the yellow ones 'RWRRRW'

  var newExpr = '';
  var stack = [];

  for (var i = 0; i < expr.length; i++) {
    if (expr[i] != 'Y') stack.push(expr[i]);
  }
  newExpr += stack.join('');
  return newExpr;
}

console.log(pezDispenserNoYellow(arg));

module.exports = pezDispenserNoYellow;

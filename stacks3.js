var expr = process.argv[2];
var newExpr = ""
var stack = [];

for (i = 0; i < expr.length; i++) {
  if (expr[i] != 'Y') stack.push(expr[i]);
}
newExpr += stack.join("");
console.log(newExpr);
var expr = process.argv[2];
var newExpr = ""
var operands = [];
var operators = [];

for (i = 0; i < expr.length; i++) {
  if (expr[i] == '+' || expr[i] == '-' || expr[i] == '*' || expr[i] == '/') {
    operators.push(expr[i]);
  } else if (expr[i] == " ") {
    
  } else {
    operands.push(expr[i]);
  }
}
newExpr = operands.join(" ") + " " + operators.join(" ");
console.log(newExpr);

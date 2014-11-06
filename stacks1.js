var expr = process.argv[2];
var stack = [];
var unmatched = "";
var noun = "parenthesis";

for (i = 0; i < expr.length; i++) {
  if (expr[i] == "(") {
    stack.push((i+1).toString());
  };
  if (expr[i] == ")") {
    if (stack.length == 0) {
      unmatched += ((i+1).toString() + ", ");
    } else {
      stack.pop();
    };
  };
};

//if (stack.length == 0) unmatched = unmatched.replace(", ", "")
unmatched += stack.join(", ")
if (unmatched.indexOf(",") >= 0) noun = "parentheses";

console.log(expr);
if (unmatched == "" ) {
  console.log("There are no unmatched parnetheses");
} else {
  console.log("Unmatched " + noun + " at " + unmatched);
}
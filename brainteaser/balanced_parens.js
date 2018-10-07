'use strict';
function is_balanced(input_str) {
  const temp = [],
    opening = ['{', '[', '('],
    closing = ['}', ']', ')'];

  for (let i = 0; i < input_str.length; i++) {
    if (opening.indexOf(input_str[i]) > -1) temp.push(input_str[i]);
    if (closing.indexOf(input_str[i]) > -1) {
      let expected_bracket = opening[closing.indexOf(input_str[i])];
      if (temp.length === 0 || temp.pop() !== expected_bracket) {
        return false;
      }
    }
  }
  return temp.length === 0;
}

console.log(is_balanced('{{[}}'));
console.log(is_balanced('{{[]}}'));

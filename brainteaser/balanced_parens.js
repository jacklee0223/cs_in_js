'use strict';
function is_balanced(input_str) {
  let expected_bracket;

  const temp = [];
  const len = input_str.length;

  const opening_brackets = ['[', '{', '('];
  const closing_brackets = [']', '}', ')'];

  for (let i = 0; i < len; i++) {

    if (opening_brackets.indexOf(input_str[i]) > -1) {
      temp.push(input_str[i]);
    } else if (closing_brackets.indexOf(input_str[i]) > -1) {

      expected_bracket = opening_brackets[closing_brackets.indexOf(input_str[i])];
      if (temp.length === 0 || (temp.pop() !== expected_bracket)) {
        return false;
      }

    } else {
      // Ignore the characters which do not match valid Brackets symbol
      continue;
    }
  }

  return (temp.length === 0);
}

is_balanced( "{{[}}" );
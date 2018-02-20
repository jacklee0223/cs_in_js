function reverseInteger(n) {
  // Write your code here, and
  // return your final answer.
  const num = 0;

  while (n !== 0) {
    num = num * 10 + n % 10;
    n = Math.floor(n / 10);
  }

  return num;
}

reverseInteger(4321);

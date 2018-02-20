function reverseInteger(n) {
  // define result
  let result = 0;
  // while n is > 0
  while (n > 0) {
    // multiply result by 10, and add remainder of n%10
    result = result * 10 + n % 10;
    // set n to n/10 floor
    n = Math.floor(n / 10);
  }
  return result;
}

reverseInteger(4321);

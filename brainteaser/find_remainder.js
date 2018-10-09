function find_remainder(n, divisor) {
  if ( divisor === 0 || isNaN(n) || isNaN(divisor) ) return NaN;

  const nAbs = Math.abs(n), divAbs = Math.abs(divisor);
  let remainder;

  while ( nAbs >= divAbs ) {
    remainder = nAbs - divAbs;
  }

  return n > 0 ? remainder : -remainder
}

// find_remainder(10, 5)
// find_remainder(9, 2)
// find_remainder(27, 5)

function find_remainder(n, divisor) {
  if ( divisor === 0 || isNaN(n) || isNaN(divisor) ) return NaN;

  let nAbs = Math.abs(n), divAbs = Math.abs(divisor);

  while ( nAbs >= divAbs ) {
    nAbs -= divAbs;
  }

  return n > 0 ? nAbs : -nAbs
}

// find_remainder(10, 5) // 0
// find_remainder(9, 2) // 1
find_remainder(27, 5) // 2

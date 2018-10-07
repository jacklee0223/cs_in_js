function collatzLength(input) {
  const result = [ input ];

  const recurse = (input) => {
    if ( input <= 1 ) return;

    if ( input % 2 === 1 ) {
      result.push( 3 * input + 1 )
    }

    if ( input % 2 === 0 ) {
      result.push( input/2 )
    }
    recurse( result[result.length - 1] )
  }

  recurse(input);
  return result.length;
}

function longestCollatz() {
  let longestCount = 1, longest = 1;
  for ( let i=1; i<1000000; i++ ) {
    const len = collatzLength(i)
    if (len > longestCount ) {
      longestCount = len
      longest = i;
    }
  }
  return longest
}

longestCollatz() // 837799

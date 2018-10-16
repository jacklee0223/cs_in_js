function perimeter(n) {
  let arr = []

  for ( let i=1; i<n+2; i++ ) {
    if ( arr.length < 2 ) {
      arr.push(1)
    } else {
      const el = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(el);
    }
  }

  return arr.reduce( (prev, curr) => {
    return prev + curr;
  } ) * 4
}

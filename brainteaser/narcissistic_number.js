function narcissistic_number( n ) {
  const arr = n.toString().split('');
  let sum = 0;

  for ( let i=0; i<arr.length; i++ ) {
    sum += Math.pow(arr[i], arr.length);
  }

  return sum === n;
}

narcissistic_number(1634)

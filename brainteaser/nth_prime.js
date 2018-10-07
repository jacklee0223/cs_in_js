function isPrime (num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

function nthPrime (n) {
  const result = [];

  for ( let i=3; i<=n; i++ ) {
    if ( isPrime(i) ) result.push(i)
  }
  return result.length;
}

nthPrime(10001)

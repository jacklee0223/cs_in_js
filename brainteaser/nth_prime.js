function isPrime (num) {
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

function nth_prime (n) {
  let result = 3;

  for ( let i=2; n > 0; i++ ) {
    if ( isPrime(i) ) {
      result = i;
      n--;
    }
  }

  return result;
}

nth_prime(6) // 13
// nth_prime(10) // 29
// nth_prime(1000) // 7919

// nth_prime(10001)

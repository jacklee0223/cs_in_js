function isPrime (num) {
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

function nthPrime (n) {
  let result = 3;

    for (var i = 1; 0 < n; i++) {
      if(isPrime(i)) {
        result = i; n--;
      }
      // we can skip the even numbers
      if(3 <= i){
        i++;
      }
    }

  return result;
}

nthPrime(10001)

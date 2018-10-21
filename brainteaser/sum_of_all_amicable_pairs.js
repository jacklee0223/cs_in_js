function sum_of_proper_divisors(n) {
  const result = [];

  for ( let i=1; i<=n/2; i++ ) {
    if ( n % i === 0 ) result.push(i)
  }

  return result.reduce( (prev, cur) => {
    return prev + cur
  }, 0) ;
}

function is_amicable(n) {
  const temp = sum_of_proper_divisors(n);
  return temp !== n && sum_of_proper_divisors(temp) === n;
}

function sum_of_amicable_nums() {
  const result = [];

  for ( let i=1; i<10000; i++ ) {
    if ( is_amicable(i) ) result.push(i)
  }

  return result.reduce( (prev, cur) => {
    return prev + cur
  }, 0);
}

sum_of_amicable_nums()

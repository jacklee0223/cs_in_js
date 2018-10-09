function factorsOf(n) {
    let factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            factors.push(i);
            factors.push(n/i);
        }
    }
    return factorsToPrimes(factors);
}

function factorsToPrimes(factors) {
    let primes = [];
    // Go through each factor
    for (let i=0; i<factors.length; i++) {
        let iIsPrime = true;
        // Check to see if any other factor divides it
        for (let j=0; j<factors.length; j++) {
            if (factors[i]%factors[j] == 0 && i != j)
                iIsPrime = false;
        }
        // If no other factor divides it, it must be prime
        if (iIsPrime)
            primes.push(factors[i]);
    }
    return primes[primes.length - 1];
}

factorsOf(13195)

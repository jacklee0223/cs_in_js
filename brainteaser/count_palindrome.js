function isPalindrome( str ) {
  if ( str.length < 3 ) return false;
  return str === str.split('').reverse('').join('')
}

function palindromeCount( str ) {
  let count = 0;
  for ( let i=0; i<str.length; i++ ) {
    for ( let j=0; j<str.length - i; j++ ) {
      const sub = str.substring( j, j + i + 1 );
      if ( isPalindrome( sub ) && sub.length >=3 ) count++
    }
  }

  return count;
}

palindromeCount('mississippi')

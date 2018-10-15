//return the total number of smiling faces in the array
function countSmileys(arr) {
  const eyes = {
    ':' : true,
    ';': true
  }
  const nose = {
    '-': true,
    '~': true
  }
  const mouth = {
    ')': true,
    'D': true
  }
  let count = 0;

  for ( let i=0; i<arr.length; i++ ) {
    const current = arr[i]
    if ( current.length === 3 ) {
      const curEyes = current[0], curNose = current[1], curMouth = current[2];

      if ( eyes[curEyes] && nose[curNose] && mouth[curMouth] ) count++;
    }

    if ( current.length === 2 ) {
      const curEyes = current[0], curMouth = current[1];

      if ( eyes[curEyes] && mouth[curMouth] ) count++;
    }
  }

  return count;
}

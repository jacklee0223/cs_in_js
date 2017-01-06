'use strict';

// baseball -> bal
const example_string = 'baseball';
// function that takes a string, returns or prints out duplicate letters in string

function duplicate_letters( input_string ) {
  if ( typeof input_string !== 'string' ) {
    return 'Not a string';
  } 
  
  if ( input_string.length < 2 ) {
    return 'String needs to be longer than 1';
  } 
  // define store_array
  const store_array = []; // [ b, a, l ]
  const len = input_string.length;
  const store_object = {};
    // iterate through input_string, if a letter occurs more than once, push to store_array
  for ( let i=0; i<len; i++) {
    if ( !store_object[input_string[i]] ) {
      store_object[input_string[i]] = 1;
    } else {
      store_array.push( input_string[i] );
    }
  }
    // return store_array
  return store_array.join('');
}

duplicate_letters( example_string );
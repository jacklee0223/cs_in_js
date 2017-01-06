'use strict';

let memory = {};

const fibonacci = function( n ) {
  if ( n < 2 ) return n;
  
  memory[n] = fibonacci( n - 1 ) + fibonacci( n - 2 );
  
  return memory[n];
  
};

fibonacci( 5 );
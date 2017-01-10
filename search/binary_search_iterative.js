'use strict';

const array = [ 1, 3, 5, 6, 10, 15, 21, 40 ];

/* Function binary_search: Takes array and target as input, return 
at which index of the input array the target is located at.
If target is not within array, return -1. Implement it iteratively */

function binary_search (array, target) {
  let min = 0;
  let max = array.length-1;
  let half;

  while( min<=max ){
    half = Math.floor((min + max) / 2);
    if ( array[half] === target ){
      return half;
    }
    else{
      if( target > array[ half ] ){
        min = half+1;
      }
      else{
        max = half-1;
      }
    }
  }
  return -1;
}

binary_search(array, 15);
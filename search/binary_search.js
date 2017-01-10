'use strict';

const array = [ 1, 3, 5, 6, 10, 15, 21, 40 ];

/* Function binary_search: Takes array and target as input, return 
at which index of the input array the target is located at.
If target is not within array, return -1 */
function binary_search (array, target) {
  let result = -1;
  
  const recurse = function(min, max) {
  	const midpoint = Math.floor(max+min/2);
  	
  	if ( min === max ) return;
  	if (array[midpoint] === target) {
  		result=midpoint;
  	} else if (target > array[midpoint]) {
  		recurse(midpoint + 1, array.length - 1);
  	} else if (target < array[midpoint]) {
  		recurse(0, midpoint - 1);
  	}
  };

  recurse(0, array.length - 1);
  return result;
}

binary_search(array, 15);
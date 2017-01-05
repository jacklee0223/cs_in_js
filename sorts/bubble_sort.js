'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
// 1, 1, 3, 4, 4, 5, 8
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

// Function bubble_sort: iterate through the input_array, compare an element and one after that, if right element is less than left one, swap, iterate until all values are swapped
function bubble_sort( input_array ) {
	// If input_array is not an array, return
	if ( !Array.isArray( input_array ) ) {
		return "Not an array";
	}
	// If input_array only has 1 value, return the input_array itself
	if ( input_array.length < 2 ) {
		return input_array;
	}
	// Set swapped to true to start off first iteration
	let swapped = true;
	// Loop through the input_array, compare each value with the one on the right, swap if right is less than left. If a swap has occured during each loop cycle, repeat until no swap has occured.
	while ( swapped ) {
		swapped = false;
		for ( let i=0; i<input_array.length; i++ ) {
			const left = input_array[i];
			const right = input_array[i+1];
			
			if ( right < left ) {
				input_array[i] = right;
				input_array[i+1] = left;
				swapped = true;
			}
		}
	}
	
	// Return sorted array
	return input_array
}

console.log(bubble_sort( array ));
console.log(bubble_sort( obj ));
console.log(bubble_sort( nothing ));
console.log(bubble_sort( empty_array ));
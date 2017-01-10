'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

/* Function merge_sort: divide input array into left and right, call merge function 
that sorts and merges input array after calling merge_sort itself on left and right */
function merge_sort( input_array ) {
	// Return if input_array is not an array
	if ( !Array.isArray( input_array ) ) {
		return "Not an array";
	}
	
	// Base case: return input_array if it has only 1 element in it
	if ( input_array.length < 2 ) {
		return input_array;
	}
	
	// Define index of midpoint, and use it to divide input_array into left and right array
	const midpoint = parseInt(input_array.length/2);
	const left_array = input_array.slice( 0, midpoint );
	const right_array = input_array.slice( midpoint, input_array.length );
	// Call merge_sort itself on left and right, and merge those two with merge function
	return merge( merge_sort(left_array), merge_sort(right_array) );
}


/* Function merge: takes two inputs, left and right array, compare the first element 
in each array to push the smaller one into result array and popping it from the array 
until both left and right are empty */
function merge( left_array, right_array ) {
	// Define result array
	const result_array = [];
	
	/* While there are elements in both left_array and right_array, 
	compare the first elements in left and right, put the smaller one 
	inside result array and pop itself */
	while ( left_array.length && right_array.length ) {
		if ( left_array[0] <= right_array[0] ) {
			result_array.push( left_array.shift() );
		} else if ( left_array[0] > right_array[0] ) {
			result_array.push( right_array.shift() );
		}
	}
	
	/* If right array is empty but there are elements in left array, 
	put the first element inside result array and pop itself until it is empty */
	while ( left_array.length ) {
		result_array.push( left_array.shift() );
	}
	
	/* If left array is empty but there are elements in right array, 
	put the first element inside result array and pop itself until it is empty */
	while ( right_array.length ) {
		result_array.push( right_array.shift() );
	}
	
	// Return result array
	return result_array;
}

merge_sort( array );

console.log(merge_sort( array ));
console.log(merge_sort( obj ));
console.log(merge_sort( nothing ));
console.log(merge_sort( empty_array ));
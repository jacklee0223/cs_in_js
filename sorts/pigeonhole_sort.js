'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

/* Function pigeonhole_sort: create a new pigeonhole array, fill it with 0's 
for the number of input array+1, iterate through input array and increment 
matching index at pigeonhole, iterate through pigeonhole, replacing 
the value with 1 and incrementing based on the value at pigeonhole index */
function pigeonhole_sort( input_array ) {
    // return if input_array is not an array
    if ( !Array.isArray(input_array) ) {
        return 'Not an array';
    }

    if ( input_array.length < 1 ) {
        return 'Empty Array';
    }

    let pigeonhole = [];

	// push 0s into pigeonhole for the length of input array + 1
    for ( let i=0; i<=input_array.length; i++ ) {
    	pigeonhole.push(0);
    }

	// add 1 each time numbers in input array matches index of pigeonhole
    for ( let j=0; j<input_array.length; j++ ) {
    	pigeonhole[input_array[j]]++;
    }

    // Iterate through the pigeonhole and replace values in input_array
	let input_array_index = 0;
	for (let i = 0; i < pigeonhole.length; i++) {
		// Add to input_array until the current pigeonhole index is 0
		while (pigeonhole[i]) {
			input_array[input_array_index] = i;
			pigeonhole[i]--;
			input_array_index++;
		}
	}
	return input_array
}

console.log(pigeonhole_sort( array ));
console.log(pigeonhole_sort( obj ));
console.log(pigeonhole_sort( nothing ));
console.log(pigeonhole_sort( empty_array ));
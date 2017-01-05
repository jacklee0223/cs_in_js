'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
// 1, 1, 3, 4, 4, 5, 8
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

// Function quick_sort: pick a pivot of input array, place all other elements smaller than pivot into left_array, and elements bigger than pivot into right_array, call quick_sort itself on the left_array and right_array, finally returning sorted and concatenated array from left_array, pivot, and right_array
function quick_sort( input_array ) {
    // If input_array is not an array, return
    if ( !Array.isArray( input_array ) ) {
        return "Not an array";
    }
    // Base case: If there is nothing in input_array, return empty array
    if ( input_array.length === 0 ) {
        return [];
    }
    // Define pivot, left_array, and right_array
    const pivot = input_array[ 0 ];
    const left_array = [];
    const right_array = [];
    // loop through input_array to push values smaller than pivot into left_array and bigger than pivot into right_array
    for ( let i=1; i<input_array.length; i++ ) {
        if ( input_array[i] <= pivot ) {
            left_array.push( input_array[i] );
        } else if ( input_array[i] > pivot ) {
            right_array.push( input_array[i] );
        }
    }
    // Recursive case: return the concatenated array containing all values in fully sorted left_array, pivot, and fully sorted right_array (fully sort by calling quick_sort itself on left_array and right_array)
    return quick_sort(left_array).concat( pivot, quick_sort(right_array) );
}

quick_sort(array);
console.log(quick_sort( array ));
console.log(quick_sort( obj ));
console.log(quick_sort( nothing ));
console.log(quick_sort( empty_array ));
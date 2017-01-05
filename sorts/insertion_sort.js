'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
// 1, 1, 3, 4, 4, 5, 8
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

// Function insertion_sort: Loop through array, store the current value, and loop through all values before it in descending order. Shift stored value left if we still have elements left, and also the current value is bigger than stored value. Return fully sorted array
function insertion_sort(input_array) {
    if ( !Array.isArray( input_array ) ) {
        return "Not an array";
    }

    if ( input_array.length < 2 ) {
        return input_array;
    }

    let picked_value, i, j;

    for ( i=0; i<input_array.length; i++ ) {
        // store the current value because it may shift later
        picked_value = input_array[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        for ( j=i-1; j>-1&&input_array[j] > picked_value; j-- ) {
            input_array[j+1] = input_array[j];
        }
        // insert the picked_value into the index right after the inner for loop (j)
        input_array[j+1] = picked_value;
    }

    return input_array;
}

console.log(insertion_sort( array ));
console.log(insertion_sort( obj ));
console.log(insertion_sort( nothing ));
console.log(insertion_sort( empty_array ));
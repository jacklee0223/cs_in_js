'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

/* Function selection_sort: Create an sorted and unsorted submists, 
Find the smallest (or can be largest) element in the unsorted sublist, 
swapping it with the leftmost unsorted element (putting it in sorted order), 
and moving the sublist boundaries one element to the right. */
function selection_sort( input_array ) {
    // return if input_array is not an array
    if ( !Array.isArray(input_array) ) {
        return 'Not an array';
    }

    if ( input_array.length < 1 ) {
        return 'Empty Array';
    }

    // iterate through array
    for (let i=0; i < input_array.length; i++){

        //set minimum to this position
        let min = i;

        //check the rest of the array to see if anything is smaller
        for (let j=i+1; j < input_array.length; j++){
            if (input_array[j] < input_array[min]){
                min = j;
            }
        }

        //if the minimum isn't in the position, swap it
        if (i !== min){
            const temp = input_array[min];
            input_array[min] = input_array[i];
            input_array[i] = temp;
        }
    }

    return input_array;
}

console.log(selection_sort( array ));
console.log(selection_sort( obj ));
console.log(selection_sort( nothing ));
console.log(selection_sort( empty_array ));
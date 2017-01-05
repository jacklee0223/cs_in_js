'use strict';

const array = [ 1, 4, 1, 3, 5, 6, 4, 8 ];
// 1, 1, 3, 4, 4, 5, 8
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

// define array length on global scope
let arrayLength;

// define function swap that switches the index of two values
function swap(input, index_A, index_B) {
    let temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

// define function heapify that takes an input array and index, compares index with values 2i+1 and 2i+2 away from it to find the largest value. If the index of largest value is not the input index, swap the largest and input values, and call heapify function itself with input array and the largest index as parameters
function heapify(input, i) {
    // define largest and set it to index, left and set it to 2i+1, right and set it to 2i+2
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    // if input value at left index is larger than value at array length && the index itself is smaller than array length, set largest as left
    if (left < arrayLength && input[left] > input[largest]) {
        largest = left;
    }

    if (right < arrayLength && input[right] > input[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(input, i, largest);
        heapify(input, largest);
    }
}

// define function build_heap that takes an input array and builds a heap
function build_heap(input) {
    arrayLength = input.length;
    // iterates through input array, call heapify on each one of them
    for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
        heapify(input, i);
    }
}

// define function heap_sort that builds the initial heap, and for the length - 1 of input array, swap the first and current element within the loop, reduce array length, and heapify the input at the first index
function heap_sort(input) {
    build_heap(input);

    for (let i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        arrayLength--;
        heapify(input, 0);
    }
}

console.log(heap_sort( array ));
console.log(heap_sort( obj ));
console.log(heap_sort( nothing ));
console.log(heap_sort( empty_array ));
'use strict';

const array = [1, 4, 1, 3, 5, 6, 4, 8];
const obj = { foo: 'bar', fooz: 'baz' };
const nothing = null;
const empty_array = [];

/* Function quick_sort: pick a pivot of input array, place all other elements smaller 
than pivot into left_array, and elements bigger than pivot into right_array, 
call quick_sort itself on the left_array and right_array, finally returning sorted 
and concatenated array from left_array, pivot, and right_array */

function quick_sort(arr) {
  // if not array, return
  if (!Array.isArray(arr)) return 'Not array';
  // if arr.length < 2 return arr
  if (arr.length < 2) return arr;
  // pick pivot, initialize left and right array
  const pivot = arr[0],
    left = [],
    right = [];
  // iterate through arr, put number smaller than pivot to left, larger than pivot to right
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  // call function itself on left and right until they are all sorted and concat left, pivot, and right together to form single fully sorted array
  return quick_sort(left).concat(pivot, quick_sort(right));
}

quick_sort(array);
console.log(quick_sort(array));
console.log(quick_sort(obj));
console.log(quick_sort(nothing));
console.log(quick_sort(empty_array));

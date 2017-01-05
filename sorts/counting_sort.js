'use strict';
const sample_arr = [5, 1, 3, 4, 2, 6, 6, 1, 1, 0];
function counting_sort( array ){
    const max = array.length;
    let i;
    let sorted = [];
    let count = [];

    // initialize counting array
    for(i = 0; i <= max; i++){
        count[i] = 0;
    }

    // count unique occurrences
    for(i = 0; i <= max; i++){
        count[array[i]] += 1;
    }

    // compute proper indices
    for(i = 1; i <= max; i++){
        count[i] += count[i - 1];
    }

    // sort
    for(i = array.length - 1; i >= 0; i--){
        sorted[count[array[i]] - 1] = array[i];
        count[array[i]] -= 1;
    }
    
    return sorted;
}

counting_sort( sample_arr );
'use strict';
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

function spin ( matrix ) {
  let temp_index = matrix[0].length - 1;
  let matrix_index = 0;
  
  while ( temp_index >= 0 ) {
    let temp = [];
    for ( let i=0; i<matrix.length; i++) {
      temp.push( matrix[i][temp_index] );
    }
    matrix[matrix_index] = temp;
    temp_index--;
    matrix_index++;
  }
  return matrix;
}

spin(matrix);
spin(matrix);
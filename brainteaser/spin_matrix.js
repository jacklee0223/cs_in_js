'use strict';
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


function spin ( matrix ) {
  let temp_index = matrix[0].length - 1;
  let matrix_index = 0;
  let new_matrix = [];
  
  while ( temp_index >= 0 ) {
    let temp = [];
    for ( let i=0; i<matrix.length; i++) {
      temp.push( matrix[i][temp_index] );
    }
    new_matrix[matrix_index] = temp;
    temp_index--;
    matrix_index++;
  }
  return new_matrix;
}

spin(matrix);
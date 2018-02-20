const string = 'this is string';

function capitalize_word( input_string ) {
  return input_string.charAt(0).toUpperCase() + input_string.slice(1);
}

function capitalize( input_string ) {
  let arr = input_string.split( " " );
  
  for ( let i=0; i<arr.length; i++ ) {
    arr[i] = capitalize_word( arr[i] )
  }
  
  return arr.join( " " )
}

capitalize(string)
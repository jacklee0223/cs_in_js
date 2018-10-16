/* Average Movie Ratings
You have a hash of keys that are users and values that are hashes of their movie ratings (also in the form of a hash).

The user’s movie ratings are also in a hash of key value pairs of movie names and ratings from 1 to 10.

Create a hash containing the average ratings for each movies generated from the ratings made by all the users in the input.

*/

function avg_movie_ratings( ratings ) {
  const avg_ratings = {}, count = {}, ratings_arr = Object.values(ratings), len = ratings_arr.length
  let i = 0;

  Object.values(ratings).map( indRatings => {
    i++;
    for ( let key in indRatings ) {
      if ( avg_ratings[ key ] ) {
        const subTotal = avg_ratings[ key ] + indRatings[ key ]
        avg_ratings[ key ] = subTotal
        count[key]++
      } else {
        avg_ratings[ key ] = indRatings[ key ]
        count[key] = 1
      }
    }
  } )

  for ( let key in count ) {
    avg_ratings[key] = avg_ratings[key] / count[key]
  }

  return avg_ratings
}

const user_ratings = {
   "Ryan": {"Avengers": 8, "Little Mermaid": 8, "Inception": 9},
   "Clay": {"Avengers": 9, "Inception": 10, "Independence Day": 7},
   "Christine": {"Avengers": 9, "Little Mermaid": 8, "Inception": 7},
   "Jon": {"Avengers": 5, "Little Mermaid": 2, "Inception": 8},
   "David": {"Avengers": 3, "Inception": 8, "Independence Day": 6}
}

avg_movie_ratings(user_ratings) // {"Avengers"=>6.8, "Little Mermaid"=>6.0, "Inception"=>8.4, "Independence Day"=>6.5}

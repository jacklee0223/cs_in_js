/* Average Movie Ratings
You have a hash of keys that are users and values that are hashes of their movie ratings (also in the form of a hash).

The user’s movie ratings are also in a hash of key value pairs of movie names and ratings from 1 to 10.

Create a hash containing the average ratings for each movies generated from the ratings made by all the users in the input.

*/

var userRatings = {
   "Ryan": {"Avengers": 8, "Little Mermaid": 8, "Inception": 9},
   "Clay": {"Avengers": 9, "Inception": 10, "Independence Day": 7},
   "Christine": {"Avengers": 9, "Little Mermaid": 8, "Inception": 7},
   "Jon": {"Avengers": 5, "Little Mermaid": 2, "Inception": 8},
   "David": {"Avengers": 3, "Inception": 8, "Independence Day": 6}
}

function sum(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function avgMovieRatings(user_ratings) {
  var totalRatings = {};

  for (var k in user_ratings) {
    for (var l in user_ratings[k]) {
      if (totalRatings[l] === undefined) {
        totalRatings[l] = [userRatings[k][l]];
      } else {
        totalRatings[l].push(userRatings[k][l]);
      }
    }
  }

  for (var m in totalRatings) {
    totalRatings[m] = (sum(totalRatings[m]) / totalRatings[m].length).toFixed(1);
  }

  return totalRatings;
}

avgMovieRatings(userRatings)

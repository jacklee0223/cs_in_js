// Todo: do this in proper binary search
let values = [5, 6, 3, 2, 1, 4];

function bstDistance(values, n, node1, node2) {
  let sorted_arr = values.sort();
  let node1_idx;
  let node2_idx;
  let distance;
  for (let i = 0; i < n; i++) {
    if (sorted_arr[i] === node1) {
      node1_idx = i;
    }

    if (sorted_arr[i] === node2) {
      node2_idx = i;
    }
  }
  distance = Math.abs(node1_idx - node2_idx);
  return distance;
}

bstDistance(values, 6, 2, 4);

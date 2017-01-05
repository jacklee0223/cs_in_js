var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {      
  //YOUR CODE HERE
  const result = [];
  
  const recurse = (node, depth) => {
    if (filter(node.value, depth)) {
      result.push(node.value);
    }
    
    for (let i=0; i<node.children.length; i++) {
      recurse(node.children[i], depth + 1)
    }
  }
  
  recurse(this, 0)
  
  return result;
};
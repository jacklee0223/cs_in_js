var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  const result = [];
  
  const recurse =  (node, depth) => {
    const queue = [];
    
    for (let i=0; i<node.length; i++) {
      if (filter(node[i].value, depth)) result.push(node[i].value);
      for (let j=0; j<node[i].children.length; j++) {
        queue.push(node[i].children[j])
      }
    }
    
    if (queue.length > 0) recurse(queue, depth + 1)
    else return;
    
    
  }
  
  recurse([this], 0)
  
  return result;
};
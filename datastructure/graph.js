var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  //this[this.index] = new GraphNode(node);
  this.storage[node] = [];
};

Graph.prototype.contains = function(node){

  var result = false;
  _.each(this.storage, function(value, key) {
    result = result || key === node;
  })
  return result;

};


Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;
  _.each(this.storage[fromNode], function(node) {
    result = result || node === toNode;
  })
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var index1 = _.indexOf(this.storage[fromNode], toNode);
  this.storage[fromNode].splice(index1, 1);
  var index2 = _.indexOf(this.storage[toNode], fromNode);
  this.storage[toNode].splice(index2, 1);
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(value, key) {
    cb(key);
  })
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.position = 0;

};

Queue.prototype.enqueue = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function(){
  if(this.size() > 0) {
    var temp = this.storage[this.position];

    delete this.storage[this.position];
    this.position++;

    return temp;
  }
};

Queue.prototype.size = function(){
  return this.counter - this.position;
};




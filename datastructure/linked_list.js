var LinkedList = function (initialValue) {
	this.head = null;
	this.tail = null;
	
	if(initialValue) {
		this.addToTail(initialValue);
	}
}

LinkedList.prototype.addToTail = function (value) {
	if (!this.head) {
		this.head = this.tail = this.makeNode(value);
	} else {
		this.tail.next = this.makeNode(value);
		this.tail = this.tail.next
	}
}

LinkedList.prototype.removeHead = function () {
	var copy = this.head;
	if(!this.head.next) {
		this.head = null;
		this.tail = null;
	} else {
		this.head = this.head.next;
	}
	return copy;
}

LinkedList.prototype.contains = function (value) {
	var current = this.head;
	while(current) {
		if (current.value === value) {
			return true;
		}
		current = current.next;
	}
	return false;
}

LinkedList.prototype.makeNode = function(value) {
	var node = {
		value: value,
		next: null
	}
	return node;
}
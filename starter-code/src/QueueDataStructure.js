// Second iteration

// Queue: FIFO structure.
// Queue Overflow : when we try to add an element into a queue that is already full.
// Queue Underflow occurs when we try to get an element from an empty queue.

// Two methods: one to check if we can add new elements to the queue (it will avoid the queue overflow), 
// and one to check if we can remove an element from the queue (it will avoid the queue underflow).

function QueueDataStructure () {
  this.queueControl = [];
  this.MAX_SIZE = 9;
}

QueueDataStructure.prototype.isEmpty = function() {
  if (this.queueControl.length === 0) {
    return true;
  } 
  else {
    return false;
  }
}

QueueDataStructure.prototype.canEnqueue = function () {
  if (this.queueControl.length < this.MAX_SIZE) {
    this.queueControl.push();
    return true;
  }
  else {
    return false;
  }
}

QueueDataStructure.prototype.enqueue = function (n) {
  if (this.canEnqueue()) {
    this.queueControl.push(n);
    this.queueControl.reverse();
    return this.queueControl;
  }
  else {
    return "Queue Overflow";
  }
}

QueueDataStructure.prototype.dequeue = function () {
  if (this.queueControl.length > 0) {
    return this.queueControl.pop();
  }
  else {
    return "Queue Underflow";
  }
}

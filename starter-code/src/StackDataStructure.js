// This is the data file

function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length === 0) {
    return true;
  } else {
    return false;
  }
}

StackDataStructure.prototype.canPush = function() {
  if(this.stackControl.length >=  this.MAX_SIZE) {
    return false;
  } else {
    return true;
  }
}

StackDataStructure.prototype.push = function(n) {
  if (this.canPush()) {
    this.stackControl.push(n);
    return this.stackControl;
  } else {
    return 'Stack Overflow';
  }
}

StackDataStructure.prototype.pop = function(n) {
  if (this.stackControl.length > 0) {
    return this.stackControl.pop(n); 
    } 
    else {
    return "Stack Underflow";
   }
}

export default StackDataStructure;

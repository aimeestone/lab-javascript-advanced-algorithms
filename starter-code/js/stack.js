
import StackDataStructure from '../src/StackDataStructure.js'

const stackList = new StackDataStructure({
  stackControl: [],
  MAX_SIZE: 8,
})

const usersInput = document.querySelector('.ui-input');
const addBtn = document.querySelector('#green');
const removeBtn = document.querySelector('#red');

function addStacks(e) {
  e.preventDefault()
  let text = usersInput.value
  console.log(text)
  if (stackList.canPush()) {
    // create a new div:
    var addStack = document.createElement('div')
    var parentContainer = document.querySelector('section.container') // need to show where to add it
    parentContainer.appendChild(addStack); // now I add the child to the end
    addStack.className = 'stack'; // adding a className to that new div created
    addStack.classList.add('is-active') // adding another class to the classList
    addStack.innerHTML = usersInput.value; // the HTML content needs to be the user's input
  }
    else {
      window.alert('Stack Overflow') // showing an alert message if cannot push anything
    }
  stackList.push(usersInput.value) // pushing into the array the user's input
}

function removeStacks() {
  if (!stackList.isEmpty()) {
    // then I can remove the stacks
    var addStack = document.querySelector('.container').lastElementChild;
    // var x = document.getElementById("myDIV").lastElementChild.tagName;
    var parentContainer = document.querySelector('section.container')
    parentContainer.removeChild(addStack);
  }
    else {
      window.alert("Stack Underflow"); // showing an alert message if cannot remove anything
    }
  stackList.pop();
}

// event listeners

addBtn.addEventListener('click', addStacks)

removeBtn.addEventListener('click', removeStacks)


















// function addItems(e){
//   e.preventDefault()
//   var text = (document.querySelector('.ui-input')).value
//   var newDiv = document.createElement("div")
//   var item ={
//     text: text,
//     //done: false
//   }
// }
//   newDiv.appendChild(text)
//   items.push(item)
//   populateList(items, stackList)
//   this.reset()

//   var currentDiv = document.getElementById('div1');
//   document.body.insertBefore(newDiv, currentDiv);
// }

// Surveiller les events qui permettent d'activer la fonction

// addBtn.addEventListener('click', function(e) {
//  e.preventDefault();
//  const text = (document.querySelector('.ui-input')).value;

//  var newStack = document.createElement('div');
//  var stackText = document.createTextNode(text);

//  newStack.appendChild(stackText);

//  console.log(newStack);
//  document.body.insertBefore(newStack, stackList);
// });

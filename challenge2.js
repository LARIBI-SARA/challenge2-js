//1
function arrayEvenNumbers(Array) {
  const evenNumbers = []
  for (let i = 0; i < Array.length; i++) {
    const number = Array[i]
    if (number % 2 === 0) {
      evenNumbers.push(number)
    }
  }
  return evenNumbers;
}

let Array = [12, 4, 8, 3];
const evenArray = arrayEvenNumbers(Array);
for (let i = 0; i < evenArray.length; i++){
 console.log(evenArray[i])
}
//2
const person1 = {
  name: "SARA",
  age: 19,
  email: "sara@example.com"
}

const person2 = {
  name: "YASMINE",
  age: 31,
  email: "YASMINE@example.com"
}

const person3 = {
  name: "HIBA",
  age: 21,
  email: "HIBA@example.com"
}


const people = [person1, person2, person3];
function PeopleOver30(personArray) {
  const over30 = [];
  for (let i = 0; i < personArray.length; i++) {
    if (personArray[i].age > 30) {
      over30.push(personArray[i]);
    }
  }
  return over30;
}

const peopleOver30 = peopleOver30(people);
console.log(peopleOver30);
//3

  let queue = [];
   queue.push(1);
   queue.push(2);
   queue.push(3);
   queue.push(4);
   queue.push(6);

  

  function dequeue() {
    return items.shift();
  }


  function isEmpty() {
    return stack.length === 0;
  }

  function push(stack) {
    return stack.push(stack);
  }

  function pop() {
    return stack.pop();
  }

  function peek() {
    return stack[stack.length - 1];
  }

  function isEmpty() {
    return stack.length === 0;
  }
// Usage
const stack =[]
stack.push(10);
stack.push(20);
console.log(stack.pop());  
console.log(stack.peek()); 
//4
function removeVowels(inputString) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (vowels.indexOf(inputString[i]) === -1) {
      result += inputString[i];
    }
  }

  return result;
}

// Usage
const input = "SARA is a full-stack developer";
const result = removeVowels(input);
console.log(result); 

//5
function getUniqueElements(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const uniqueArray = [];

  for (const num of combinedArray) {
    if (!uniqueArray.includes(num)) {
      uniqueArray.push(num);
    }
  }

  return uniqueArray;
}

// Usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueResult = getUniqueElements(array1, array2);
console.log(uniqueResult);  
// “The sum of a range

// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].”

// Excerpt From: Marijn Haverbeke. “Eloquent JavaScript.” iBooks. 

// Your code here.
  var array = [];

function range(a,b) {
  var array = [];
  for (i = a; i <= b; i++){
    array.push(i);
  }
  return array;
}

function sum(array) {
  var total = array.reduce(function (a,b) {
    return a + b;
  }, 0);
     return total;                      
}

// “Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?”

// Excerpt From: Marijn Haverbeke. “Eloquent JavaScript.” iBooks. 

// Your code here.
var arrayValue = [];

function reverseArray(array) {
  var output = [];
  while (array.length) {
   output.push(array.pop()); 
  }
  return output;
}

function reverseArrayInPlace(arrayValue) {
  var i  = 0;
  n = arrayValue.length,
  middle = Math.floor(n/2),
  temp = null;
  
  for (; i < middle; i++) {
    temp = arrayValue[i];
    arrayValue[i] = arrayValue[n - 1 - i];
    arrayValue[n - 1 - i] = temp;
  }
}

// “A list

// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// The resulting objects form a chain, like this:


// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that[…]”

// “If you haven’t already, also write a recursive version of nth.”

// Excerpt From: Marijn Haverbeke. “Eloquent JavaScript.” iBooks. 



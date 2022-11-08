// // 7. What is a closure? (one of the most common JS interview questions as well). 
// // 	Write a verbal definition of closure (using JS comments)
// // 	and then write an example of closure (using JS code).

// // Hint: a simple counter is a good example. Make sure the counter works properly via the console.


// // A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

// Closures can capture variables in block scopes and module scopes as well. For example.

// JavaScript Nested Functions
// All functions have access to the global scope.  
// In fact, in JavaScript, all functions have access to the scope "above" them.
// JavaScript supports nested functions. Nested functions have access to the scope "above" them.
// In this example, the inner function plus() has access to the counter variable in the parent function:

// function add() {
//   let counter = 0;
//   function plus() {counter += 1;}
//   plus();   
//   return counter;
// }
// add();
// add();
// add();
// console.log(add());


// This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once.
// We need a closure.

// JavaScript Closures
// Remember self-invoking functions? What does this function do?


const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  console.log(add());
  console.log(add());
  
  // the counter is now 3
  
  // The variable add is assigned to the return value of a self-invoking function.
  // The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression (Function expressions are when you create a function and assign it to a variable. The function is anonymous, which means it doesn't have a name. For example: let myFunction = function() { // do something };).
  // This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
  // This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
  // The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
  // A closure is a function having access to the parent scope, even after the parent function has closed.
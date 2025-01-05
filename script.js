'use strict';

const calcAge = birthYear => {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
};

const firstName = 'Jonas';
calcAge(1991);

/* console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1996; */

/* // functions - can't declare before initialize. Ex😔
console.log(addDecl(5, 4));
console.log(addExpr(5, 4));
console.log(addArrow(5, 4));

// Declaration is hoisted it will hosted to the top, and run like var variable.
function addDecl(a, b) {
  return a - b;
}

//ReferenceError: Cannot access 'addExpr' before initialization
const addExpr = function (a, b) {
  return a - b;
};

//ReferenceError: Cannot access 'addArrow' before initialization
const addArrow = (a, b) => {
  return a - b;
};
// variable declare with var create an object in window. Let and Const doesn't do this.  */

console.log(this)


/* # This

- **Global Context**: `this` refers to the global object (`window` in browsers, `global` in Node.js).
- **Function (Non-strict Mode)**: `this` refers to the global object, unless explicitly called with a different context.
- **Strict Mode**: `this` is `undefined` in functions unless bound to an object.
- **Object Method**: `this` refers to the object that the method belongs to / means owner of the object.
- **Constructor/Class**: `this` refers to the new instance created by the constructor or class.
- **Arrow Functions**: `this` is lexically bound, meaning it refers to `this` from the outer function or context where it is defined. Like if it’s define in global, then it will refer window.
- **Event Handlers**: `this` refers to the element that triggered the event.
- **`call()`, `apply()`, `bind()`**: These methods allow you to explicitly set the value of `this` for a function. */

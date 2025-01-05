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

// functions - can't declare before initialize. Ex😔
/* console.log(addDecl(5, 4));
console.log(addExpr(5, 4));
console.log(addArrow(5, 4)); */

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
// variable declare with var create an object in window. Let and Const doesn't do this.

console.log(this);

/* # This

- **Global Context**: `this` refers to the global object (`window` in browsers, `global` in Node.js).
- **Function (Non-strict Mode)**: `this` refers to the global object, unless explicitly called with a different context.
- **Strict Mode**: `this` is `undefined` in functions unless bound to an object.
- **Object Method**: `this` refers to the object that the method belongs to / means owner of the object.
- **Constructor/Class**: `this` refers to the new instance created by the constructor or class.
- **Arrow Functions**: `this` is lexically bound, meaning it refers to `this` from the outer function or context where it is defined. Like if it’s define in global, then it will refer window.
- **Event Handlers**: `this` refers to the element that triggered the event.
- **`call()`, `apply()`, `bind()`**: These methods allow you to explicitly set the value of `this` for a function. */

const Arafat = {
  firstName: 'Arafat',
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

// It will undefined, because arrow function doesn't have his this keyword. It always indicate his outer function, it's called lexically bound.
// Here it will refer to window.
// Arafat.greet();

const Arafat2 = {
  firstName: 'Arafat',
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // This will be undefined, because this is regular function and regular function called this always should be undefined no matter it's on an object.
    // Some people consider this is an bug in javaScript. But this is the how it's actually work.
    // Solution 1: Have o write the this keyword in a variable like.
    /*  const self = this;
    const isGenZ = function () {
      console.log(self.year >= 1998 && self.year <= 2010);
    };
    isGenZ(); */

    // Solution 2: Write in with array function, Because this has not his this keyword,it will always look for outer function.
    const isGenZ = () => {
      console.log(this.year >= 1998 && this.year <= 2010);
    };
    
    isGenZ();
  },
  // Fix: just write this on regular function
  greet: () => console.log(`Hey ${this.firstName}`),
};

Arafat2.greet();

// const arafatClone = structuredClone(Arafat2);

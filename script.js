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

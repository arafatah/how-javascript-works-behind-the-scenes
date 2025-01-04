# Behind the scenes - Var, Let, Const

> JAVASCRIPT is a high-level Object-Oriented, Multi-Paradigm Programming Language.
> 

JavaScript is multi paradigm language: A approach and mindset of structure  code, which will direct you coding style and technique. 

1. Procedural Programming 
2. Object-Oriented Programming (OOP)
3. Functional Programming 

JavaScript is JIT, JUST IN TIME language. 

The key differences between `var`, `let`, and `const` in JavaScript relate to **scope**, **reassignment**, and **hoisting**. Here's a detailed explanation of each:

### 1. **Scope**

- **`var`**: Has **function scope**. This means that a variable declared with `var` is available throughout the entire function in which it's declared, even if it's inside a block (like a loop or an `if` statement). `var` does **not have block scope**.
- **`let` and `const`**: Both have **block scope**. This means that variables declared with `let` or `const` are only available within the block (enclosed by `{}`) in which they are declared. They are not accessible outside that block.

**Example**:

```jsx
function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10, because 'var' is function-scoped
}

function testLet() {
    if (true) {
        let y = 20;
    }
    console.log(y); // ReferenceError: y is not defined, because 'let' is block-scoped
}

testVar(); // 10
testLet(); // Error

```

### 2. **Reassignment**

- **`var`**: Variables declared with `var` can be **reassigned** and **re-declared** within the same scope.
- **`let`**: Variables declared with `let` can be **reassigned**, but **cannot be re-declared** within the same scope.
- **`const`**: Variables declared with `const` **cannot be reassigned**, and like `let`, they **cannot be re-declared** within the same scope. `const` is used for values that should not change (constants).

**Example**:

```jsx
javascript
Copy code
var a = 10;
a = 20; // Reassignment is allowed
var a = 30; // Redeclaration is allowed

let b = 10;
b = 20; // Reassignment is allowed
let b = 30; // Error: Identifier 'b' has already been declared

const c = 10;
c = 20; // Error: Assignment to constant variable

```

- **Note**: While `const` prevents reassignment, if a `const` is an **object or array**, you can **mutate** the contents (e.g., adding properties to an object or modifying array elements), but you cannot reassign the variable itself.

**Example**:

```jsx
const person = { name: "John" };
person.name = "Jane"; // Allowed, object properties can be changed
person = {}; // Error: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // Allowed, arrays can be mutated
numbers = [5, 6, 7]; // Error: Assignment to constant variable

```

### 3. **Hoisting**

- **`var`**: Variables declared with `var` are **hoisted**, meaning their declaration is moved to the top of the scope (either the function or global scope). However, their initialization is not hoisted, so the variable will be undefined if used before initialization.
- **`let` and `const`**: Variables declared with `let` and `const` are also **hoisted**, but they are placed in a **"temporal dead zone"** until the code execution reaches the actual line where they are defined. This means that you **cannot use `let` or `const` variables before they are declared**, and attempting to do so will result in a `ReferenceError`.

**Example**:

```jsx
console.log(x); // undefined, because 'var' is hoisted but not initialized
var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;

```

### 4. **Initialization**

- **`var`**: Variables declared with `var` are **initialized as `undefined`** if no value is provided at the time of declaration.
- **`let`**: Variables declared with `let` are **not initialized** until they are assigned a value. If accessed before initialization, they throw a `ReferenceError`.
- **`const`**: Variables declared with `const` **must be initialized** at the time of declaration, or a `SyntaxError` will be thrown.

**Example**:

```jsx
var a;
console.log(a); // undefined

let b;
console.log(b); // undefined (but if used before declaration, it'll throw an error)

const c; // SyntaxError: Missing initializer in const declaration
```

### Summary:

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| **Scope** | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | Hoisted, initialized to `undefined` | Hoisted but not initialized (TDZ) | Hoisted but not initialized (TDZ) |
| **Reassignment** | Can be reassigned | Can be reassigned | Cannot be reassigned |
| **Redeclaration** | Can be re-declared | Cannot be re-declared | Cannot be re-declared |
| **Initialization** | Optional | Optional | Required |

### Best Practices:

- Use `let` when you need to **reassign** variables.
- Use `const` for **constants** or when you don't want a variable to be reassigned.
- Avoid using `var` due to its **function-scoped** behavior and potential for creating bugs when used in block scopes.

# This

- **Global Context**: `this` refers to the global object (`window` in browsers, `global` in Node.js).
- **Function (Non-strict Mode)**: `this` refers to the global object, unless explicitly called with a different context.
- **Strict Mode**: `this` is `undefined` in functions unless bound to an object.
- **Object Method**: `this` refers to the object that the method belongs to.
- **Constructor/Class**: `this` refers to the new instance created by the constructor or class.
- **Arrow Functions**: `this` is lexically bound, meaning it refers to `this` from the outer function or context where it is defined.
- **Event Handlers**: `this` refers to the element that triggered the event.
- **`call()`, `apply()`, `bind()`**: These methods allow you to explicitly set the value of `this` for a function.

```jsx
object.assign({}, jessica2); 
```

This is for copy the object and keep the value difference for both of them.
Scope determines **where variables can be accessed**.

### **3.1 Global Scope**

Variables declared **outside functions** are **accessible anywhere**.

```js
let globalVar = "I am global!";

function showGlobal() {
    console.log(globalVar); // Accessible inside function
}

showGlobal();
console.log(globalVar); // Accessible outside function
```

### **3.2 Local Scope (Function Scope)**

Variables declared **inside a function** are **only available within that function**.

```js
function localExample() {
    let localVar = "I am local!";
    console.log(localVar); // Works
}

localExample();
console.log(localVar); // ❌ Error: localVar is not defined
```

### **3.3 Block Scope (`let` & `const`)**

`let` and `const` have **block scope** (inside `{}`).

```js
if (true) {
    let blockVar = "Inside block";
    console.log(blockVar); // Works inside block
}
console.log(blockVar); // ❌ Error: blockVar is not defined
```

`var` does **not** have block scope!

```js
if (true) {
    var testVar = "Inside block";
}
console.log(testVar); // ✅ Works (not block-scoped)
```

### **3.4 Nested Functions and Scope**

Functions can access **variables from outer scopes**.

```js
function outer() {
    let outerVar = "I'm outside!";

    function inner() {
        console.log(outerVar); // Works
    }

    inner();
}
outer();
```

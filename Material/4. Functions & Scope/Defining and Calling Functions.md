A **function** is a block of code that runs when called. It helps in **code reusability** and **modularity**.

### **1.1 Function Declaration**

A **declared function** can be called **before or after** its definition (hoisting applies).

```js
function greet() {
    console.log("Hello, world!");
}

greet(); // Call the function
```

### **1.2 Function with Parameters**

Functions can accept **parameters** (input values).

```js
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
```

### **1.3 Function with a Return Value**

Functions can return values using `return`.

```js
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8
```

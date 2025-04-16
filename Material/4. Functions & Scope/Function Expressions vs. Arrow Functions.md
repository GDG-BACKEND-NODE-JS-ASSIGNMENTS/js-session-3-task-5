### **2.1 Function Expressions**

A function can be stored in a **variable** (called a function expression).

```js
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // Output: 20
```

- Function expressions **aren't hoisted** (must be defined before use).

### **2.2 Arrow Functions (`=>`)**

A **shorter way** to write functions (no `function` keyword).

```js
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 4)); // Output: 6
```

#### **Implicit Return (One-Liner Arrow Function)**

If the function body has **one expression**, we can omit `{}` and `return`.

```js
const multiplyShort = (a, b) => a * b;
console.log(multiplyShort(6, 7)); // Output: 42
```

#### **Arrow Functions with One Parameter**

Parentheses `()` can be omitted if there’s only **one** parameter.

```js
const square = x => x * x;
console.log(square(5)); // Output: 25
```

#### **Arrow Functions vs Regular Functions**

|Feature|Regular Function|Arrow Function|
|---|---|---|
|`this` Binding|Own `this`|Inherits from parent|
|Hoisting|Yes|No|
|Syntax|More verbose|Shorter|

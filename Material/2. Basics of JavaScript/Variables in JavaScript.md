A **variable** is a container for storing data. JavaScript has three ways to declare variables:

- `var` (old way, not recommended)
- `let` (modern and recommended for most cases)
- `const` (for values that never change)

### **Declaring Variables**

```js
var oldVar = "I am var"; // Avoid using var
let myName = "John"; // Preferred for changeable values
const birthYear = 2000; // Cannot be reassigned
```

### **Key Differences**

|Keyword|Scope|Can be Reassigned?|Hoisting Behavior|
|---|---|---|---|
|`var`|Function|✅ Yes|Hoisted but **not safe**|
|`let`|Block|✅ Yes|Hoisted but **not initialized**|
|`const`|Block|❌ No|Hoisted but **not initialized**|

#### **Example: Difference between `let` and `const`**

```js
let age = 25;
age = 26; // ✅ Allowed

const PI = 3.14;
PI = 3.14159; // ❌ Error: Assignment to constant variable
```

#### **Example: Scope Behavior (`var` vs `let`)**

```js
if (true) {
    var testVar = "Hello"; // Accessible outside block
    let testLet = "Hi"; // Block scoped
}
console.log(testVar); // ✅ Works
console.log(testLet); // ❌ Error: testLet is not defined
```

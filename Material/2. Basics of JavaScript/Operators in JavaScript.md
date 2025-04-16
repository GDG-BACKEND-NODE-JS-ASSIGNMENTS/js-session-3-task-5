Operators perform actions on values.
### **3.1. Arithmetic Operators**

Used for mathematical operations.

|Operator|Description|Example|
|---|---|---|
|`+`|Addition|`5 + 3 // 8`|
|`-`|Subtraction|`10 - 4 // 6`|
|`*`|Multiplication|`3 * 3 // 9`|
|`/`|Division|`10 / 2 // 5`|
|`%`|Modulus (Remainder)|`10 % 3 // 1`|
|`**`|Exponentiation|`2 ** 3 // 8`|

#### **Example: Arithmetic Operators**

```js
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1
console.log(x ** y); // 1000 (10³)
```

---

### **3.2. Comparison Operators**

Used for comparing values.

|Operator|Description|Example|Result|
|---|---|---|---|
|`==`|Equal (loose comparison)|`5 == "5"`|`true`|
|`===`|Strict equal|`5 === "5"`|`false`|
|`!=`|Not equal|`10 != "10"`|`false`|
|`!==`|Strict not equal|`10 !== "10"`|`true`|
|`>`|Greater than|`8 > 5`|`true`|
|`<`|Less than|`3 < 5`|`true`|
|`>=`|Greater or equal|`10 >= 10`|`true`|
|`<=`|Less or equal|`7 <= 4`|`false`|

#### **Example: Comparison Operators**

```js
console.log(5 == "5"); // true (loose comparison, converts string to number)
console.log(5 === "5"); // false (strict comparison, different types)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(8 > 5); // true
console.log(7 <= 7); // true
```

---

### **3.3. Logical Operators**

Used for combining conditions.

| Operator | Description             | Example                     |
| -------- | ----------------------- | --------------------------- |
| `&&`     | AND (both must be true) | `(5 > 3 && 10 > 5) // true` |
| \|\|     | OR                      |                             |
| `!`      | NOT (negation)          | `!(5 > 3) // false`         |

#### **Example: Logical Operators**

```js
let a = 5, b = 10;

console.log(a > 3 && b < 20); // true (both conditions are true)
console.log(a > 3 || b > 20); // true (one condition is true)
console.log(!(a > 3)); // false (negation of true)
```

---

### **3.4. Type Coercion & Conversion**

JavaScript automatically converts types in certain operations.

#### **Example: Type Coercion (Implicit Conversion)**

```js
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (string converted to number)
console.log(true + 1); // 2 (true is treated as 1)
```

#### **Example: Type Conversion (Explicit)**

```js
let strNum = "42";
let convertedNum = Number(strNum); // Converts string to number
console.log(convertedNum); // 42
```

JavaScript has **primitive** and **non-primitive** data types.

### **Primitive Data Types**

|Data Type|Example|Description|
|---|---|---|
|String|`"Hello"`|Text values|
|Number|`42`, `3.14`|Integer & float numbers|
|Boolean|`true`, `false`|Logical values|
|Null|`null`|Intentional empty value|
|Undefined|`undefined`|Variable declared but not assigned|
|Symbol|`Symbol("id")`|Unique identifier (rarely used)|
|BigInt|`9007199254740991n`|Large integers|

#### **Example: Using Different Data Types**

```js
let message = "Hello, JavaScript"; // String
let count = 42; // Number
let isStudent = true; // Boolean
let emptyValue = null; // Null
let notAssigned; // Undefined

console.log(typeof message); // "string"
console.log(typeof count); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof emptyValue); // "object" (a known JavaScript quirk)
console.log(typeof notAssigned); // "undefined"
```

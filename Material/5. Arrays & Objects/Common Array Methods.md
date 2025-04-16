JavaScript provides built-in methods to **add, remove, and manipulate** arrays.

### **2.1 Adding and Removing Elements**

|Method|Description|
|---|---|
|`push(item)`|Adds an item to the **end** of the array|
|`pop()`|Removes the **last** item|
|`unshift(item)`|Adds an item to the **beginning**|
|`shift()`|Removes the **first** item|

#### **Examples**

```js
let numbers = [1, 2, 3];

numbers.push(4); 
console.log(numbers); // [1, 2, 3, 4]

numbers.pop();
console.log(numbers); // [1, 2, 3]

numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3]

numbers.shift();
console.log(numbers); // [1, 2, 3]
```

---

### **2.2 Looping Through Arrays**

#### **Using `for` Loop**

```js
let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

#### **Using `forEach` Method**

```js
colors.forEach(color => console.log(color));
```

---

### **2.3 Transforming Arrays with `map`**

Creates a **new** array by applying a function to each element.

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

---

### **2.4 Filtering Arrays with `filter`**

Returns a **new array** with elements that match a condition.

```js
let ages = [12, 18, 25, 30];
let adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]
```

---

### **2.5 Finding an Element with `find`**

Finds the **first** element that matches a condition.

```js
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

let user = users.find(user => user.name === "Alice");
console.log(user); // { name: "Alice", age: 25 }
```

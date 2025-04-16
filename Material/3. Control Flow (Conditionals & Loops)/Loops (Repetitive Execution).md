Loops **repeat a block of code** as long as a condition is true.

### **3.1 `for` Loop**

- Used when the number of iterations is **known**.

#### **Example: Basic `for` Loop**

```js
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```

**How it works:**

1. **Initialization:** `let i = 1` → Start counter at 1.
2. **Condition:** `i <= 5` → Run as long as `i` is ≤ 5.
3. **Increment:** `i++` → Increase `i` by 1 after each iteration.

### **Example: Looping Through an Array**

```js
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

---

### **3.2 `while` Loop**

- Used when the **number of iterations is unknown** (runs until a condition is false).

#### **Example: Basic `while` Loop**

```js
let count = 1;

while (count <= 5) {
    console.log("Count:", count);
    count++; // Increment count
}
```

#### **Example: User Input Simulation**

```js
let password = "secret";
let userInput = "";

while (userInput !== password) {
    userInput = "secret"; // Simulating user input
    console.log("Checking password...");
}
console.log("Access granted.");
```

---

### **3.3 `do...while` Loop**

- Similar to `while`, but **always runs at least once** before checking the condition.

#### **Example: Basic `do...while` Loop**

```js
let number = 5;

do {
    console.log("Number is:", number);
    number--;
} while (number > 0);
```

#### **Example: Requiring User Input**

```js
let userInput;

do {
    userInput = "correct"; // Simulating input
    console.log("Please enter a valid response.");
} while (userInput !== "correct");

console.log("Input accepted.");
```

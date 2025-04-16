Conditional statements allow the program to make decisions based on conditions.

### **1.1 `if`, `else if`, `else`**

- `if` runs **if a condition is true**.
- `else if` checks **additional conditions**.
- `else` runs **if none of the above conditions are met**.

#### **Example: Basic `if` Statement**

```js
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}
```

#### **Example: `if`, `else if`, `else`**

```js
let temperature = 30;

if (temperature > 35) {
    console.log("It's too hot!");
} else if (temperature >= 20) {
    console.log("The weather is nice.");
} else {
    console.log("It's cold outside.");
}
```

### **1.2 Nested `if` Statements**

- Used when one condition depends on another.

```js
let userLoggedIn = true;
let hasSubscription = false;

if (userLoggedIn) {
    if (hasSubscription) {
        console.log("Access granted!");
    } else {
        console.log("Please subscribe to continue.");
    }
} else {
    console.log("Please log in first.");
}
```

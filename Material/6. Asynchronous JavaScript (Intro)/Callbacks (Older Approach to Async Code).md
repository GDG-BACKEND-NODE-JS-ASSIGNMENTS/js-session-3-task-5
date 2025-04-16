A **callback function** is a function **passed as an argument** to another function, executed **after a task completes**.

### **2.1 Example: Callback in `setTimeout`**

```js
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

📌 Output:

```
Hello, Alice  
Goodbye!
```

---

### **2.2 Callback Hell (Nested Callbacks Issue)**

Callbacks can lead to **deeply nested**, unreadable code.

```js
setTimeout(() => {
    console.log("Task 1 done!");
    setTimeout(() => {
        console.log("Task 2 done!");
        setTimeout(() => {
            console.log("Task 3 done!");
        }, 1000);
    }, 1000);
}, 1000);
```

🔴 This is called **callback hell** → difficult to maintain.

**Solution:** **Promises!** 🚀
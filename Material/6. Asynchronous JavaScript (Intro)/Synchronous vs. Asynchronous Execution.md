### **1.1 Synchronous Execution (Blocking Code)**

In **synchronous** code, JavaScript executes **one line at a time** in order.

```js
console.log("Start");

for (let i = 0; i < 1e9; i++) {} // Simulates a long task

console.log("End");
```

🛑 The loop **blocks** execution, so "End" prints **after** the delay.

---

### **1.2 Asynchronous Execution (Non-blocking Code)**

**Asynchronous** operations allow JavaScript to **continue execution** while waiting for a task to complete.

```js
console.log("Start");

setTimeout(() => {
    console.log("Async Task Done!");
}, 2000); // Runs after 2 seconds

console.log("End");
```

📌 **Output order:**

```
Start  
End  
Async Task Done!  (After 2 seconds)
```

💡 **JavaScript doesn’t wait** for `setTimeout` to finish before moving to the next line.

Control **how loops behave**.

### **4.1 `break` Statement**

- **Stops the loop immediately**.

#### **Example: Stopping When a Condition is Met**

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Stopping loop at", i);
        break;
    }
    console.log(i);
}
```

### **4.2 `continue` Statement**

- **Skips** the current iteration and moves to the next.

#### **Example: Skipping Specific Values**

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3");
        continue;
    }
    console.log(i);
}
```

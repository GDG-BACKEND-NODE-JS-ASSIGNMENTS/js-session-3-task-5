A **Promise** represents a future **event** (pending, fulfilled, or rejected).

### **3.1 Creating a Promise**

```js
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Promise Resolved!");
        } else {
            reject("Promise Rejected!");
        }
    }, 2000);
});
```

### **3.2 Using `.then()` and `.catch()`**

```js
myPromise
    .then(result => console.log(result))  // Runs if resolved
    .catch(error => console.log(error)); // Runs if rejected
```

📌 If `success = true`:

```
Promise Resolved!
```

📌 If `success = false`:

```
Promise Rejected!
```

---

### **3.3 Chaining Promises**

Promises allow **chaining** to avoid callback hell.

```js
function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 done!");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 done!");
            resolve();
        }, 1000);
    });
}

step1().then(step2);
```

### **4.1 Converting Promises to Async/Await**

Instead of `.then()`, we use `await` inside an `async` function.

```js
async function runTasks() {
    console.log("Start");

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Task 1 done!");

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Task 2 done!");

    console.log("End");
}

runTasks();
```

📌 **Output:**

```
Start  
(Task 1 waits 2 seconds)  
Task 1 done!  
(Task 2 waits 2 seconds)  
Task 2 done!  
End
```

---

### **4.2 Handling Errors with `try...catch`**

```js
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();
```

📌 If successful: `{ id: 1, title: "..." }`  
📌 If an error occurs: `"Error: ..."`

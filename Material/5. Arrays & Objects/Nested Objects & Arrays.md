Objects can contain **arrays** and **other objects**.

### **4.1 Object Inside an Object**

```js
let user = {
    name: "Alice",
    address: {
        city: "Los Angeles",
        zip: 90001
    }
};

console.log(user.address.city); // Output: Los Angeles
```

---

### **4.2 Array of Objects**

```js
let cars = [
    { brand: "Tesla", year: 2022 },
    { brand: "Toyota", year: 2020 }
];

console.log(cars[1].brand); // Output: Toyota
```

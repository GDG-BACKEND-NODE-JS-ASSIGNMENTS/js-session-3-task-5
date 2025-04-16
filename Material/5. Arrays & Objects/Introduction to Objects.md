An **object** stores **key-value pairs**.

### **3.1 Creating an Object**

```js
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person);
```

---

### **3.2 Accessing Object Properties**

|Syntax|Example|
|---|---|
|`object.property`|`person.name` → `"John"`|
|`object["property"]`|`person["age"]` → `30`|

```js
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
```

---

### **3.3 Modifying Object Properties**

```js
person.age = 31; 
console.log(person.age); // Output: 31
```

---

### **3.4 Adding and Removing Properties**

```js
person.city = "New York";
console.log(person); 

delete person.isStudent;
console.log(person);
```

---

### **3.5 Looping Through Objects**

Using **`for...in`** loop:

```js
for (let key in person) {
    console.log(key, ":", person[key]);
}
```

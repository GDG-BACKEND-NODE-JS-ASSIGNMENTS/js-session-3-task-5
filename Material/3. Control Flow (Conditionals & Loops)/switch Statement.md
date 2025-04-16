- Used when multiple values are compared against a variable.
- Works best when checking for **specific values**.

### **Example: `switch`**

```js
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("A regular day.");
}
```

#### **Key Notes**

- **Use `break`** to prevent falling through to the next case.
- **Multiple cases can share the same block** (e.g., `"Saturday"` and `"Sunday"`).
- If no case matches, the `default` block runs.
